import React, {Component, useState} from 'react'
import './../Style/Main.css'
import './../Style/Card.css'
import AssignmentService from '../Services/AssignmentService';
import { Link } from 'react-router-dom';

class AssignmentsPage extends Component {

    constructor(props) {
        super(props);


        this.state = {
            challenge: []
        }
    }

    componentDidMount() {
        AssignmentService.getAssignments().then((res) => {
            console.log(res)
            this.setState({ challenge: res.data });
        })
    }


    render() {
        
        return (
            <div className='container'>
                <Link to="/addAssignment" className='button' style={{float: 'left'}}>Add Assignment</Link>
                <form class="d-flex" style={{marginTop:'32px',paddingLeft:'16px'}}>
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="button" type="submit">Search</button>
                </form>
                <p className='title'style={{textAlign:'left'}}>All Assignments</p>
                <div className='card-container'>
                { 
                    this.state.challenge.map(
                        challenge =>
                            <tr key={challenge.id}>
                                <div className='card' style={{ width: '18rem', height: '200px', margin: '10px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{challenge.refactoringType}</h5>
                                        <p className='card-body'>{"level " + challenge.level}</p>
                                        <Link to='editassignment' className='button' role="button" id={challenge.id}>Edit Assignment</Link>
                                    </div>
                                </div>
                            </tr>
                    )
                }
                </div>
            </div>
        );
    }
}

export default AssignmentsPage;
