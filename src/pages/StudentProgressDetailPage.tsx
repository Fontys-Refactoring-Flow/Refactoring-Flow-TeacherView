import React, {useEffect, useState} from 'react'
import '../style/Main.css'
import '../style/Card.css'
import studentService from '../services/student.service';
import { Link } from 'react-router-dom'
import sessionHandler from '../SesionHandler';
import assignmentService from '../services/assignment.service';
import {StudentType} from "../types/UserTypes";
import {AssignmentType} from "../types/AssignmentType";

const StudentProgressDetailPage = () => {
    const [student, setStudent] = useState<StudentType | null>(null)
    const [assignments, setAssignments] = useState<Array<AssignmentType> | null>(null)

    useEffect(() => {
        studentService.getStudentById(parseInt(sessionHandler.getStudentId()!)).then((res) => {
            setStudent(res.data)
        })

        assignmentService.getAssignmentByStudent(parseInt(sessionHandler.getStudentId()!))
            .then((res) => {
                setAssignments(res.data)
            })
    }, [])

    return(
        <div className='container'>
            <h1 className='title'>{student?.name}</h1>
            <p className='text'>Assignments in Progress</p>
            <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Assignment</th>
                    <th>Finished</th>
                </tr>
            </thead>
            <tbody>
            {
                assignments?.map((assignment) =>
                    <tr key={assignment.id}>
                        <td>{assignment.name}</td>
                        <td>no</td>
                    </tr>
                )
            }
            </tbody>
            </table>
            <Link className='button' to='/progress'>Return</Link>
        </div>
    );
}

export default StudentProgressDetailPage