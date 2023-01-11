import React, {useEffect, useState} from 'react'
import '../style/Main.css'
import '../style/Card.css'
import {Link, useSearchParams} from 'react-router-dom'
import studentService from "../services/student.service";
import assignmentService from "../services/assignment.service";
import {StudentType} from "../types/UserTypes";
import {AssignmentType} from "../types/AssignmentType";

const StudentProgressDetailPage = () => {
    const [params] = useSearchParams()
    const [student, setStudent] = useState<StudentType>();
    const [assignments, setAssignments] = useState<Array<AssignmentType>>([]);
    useEffect(() => {
        const studentId = params.get("id")
        if(studentId == null) return
        studentService.getStudentById(parseInt(studentId)).then((res) => {
            setStudent(res.data)
        })

        assignmentService.getAssignmentByStudent(parseInt(studentId)).then((res) => {
            console.log(res)
            setAssignments(res.data)
        })
    }, [])

    return(
        <div className='container'>
            <h1 className='title'>{student?.name}</h1>
            <p className='text'>Assignments finished</p>
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th>Assignment</th>
                    <th>Level</th>
                    <th>Versions</th>
                </tr>
                </thead>
                <tbody>
                {
                    assignments!.map(
                        assignment =>
                            <tr key={assignment.id}>
                                <td>{assignment.refactoringType}</td>
                                <td>{assignment.level}</td>
                                <td><Link className='button' to={'codeview/' + assignment.id + '/' + student?.name}>View</Link></td>
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