import React, {useEffect, useState} from 'react'
import '../style/Main.css'
import '../style/Card.css'
import assignmentService from '../services/assignment.service';
import { Link } from 'react-router-dom';
import {AssignmentType} from "../types/AssignmentType";

const AssignmentsPage = () => {
    const [assignments, setAssignments] = useState<Array<AssignmentType> | null>(null)

    useEffect(() => {
        assignmentService.getAssignments().then((res) => {
            setAssignments(res.data)
        })
    })

    return (
        <div className='container'>
            <Link to="/addAssignment" className='button' style={{float: 'left'}}>Add Assignment</Link>
            <form className="d-flex" style={{marginTop:'32px',paddingLeft:'16px'}}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="button" type="submit">Search</button>
            </form>
            <p className='title' style={{textAlign:'left'}}>All Assignments</p>
            <div className='card-container'>
            {
                assignments?.map((challenge) =>
                    <tr key={challenge.id}>
                        <div className='card' style={{ width: '18rem', height: '200px', margin: '10px' }}>
                            <div className="card-body">
                                <h5 className="card-title">{challenge.refactoringType}</h5>
                                <p className='card-body'>{"Level 1"}</p>
                                <Link to='editassignment' className='button' role="button">Edit Assignment</Link>
                            </div>
                        </div>
                    </tr>
                )
            }
            </div>
        </div>
    )
}

export default AssignmentsPage;
