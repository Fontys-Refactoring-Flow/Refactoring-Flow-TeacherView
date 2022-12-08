import React, {useEffect, useState} from 'react'
import '../style/Main.css'
import '../style/Card.css'
import studentService from '../services/student.service';
import SessionHandler from '../SesionHandler';
import {StudentType} from "../types/UserTypes";

const StudentProgressPage = () => {
    const [students, setStudents] = useState<Array<StudentType> | null>(null)

    useEffect(() => {
        studentService.getStudents().then((res) => {
            setStudents(res.data);
            SessionHandler.clearStudentId();
        })
    }, [])

    const grabId = (id: number) =>{
        console.log(id);
        SessionHandler.setStudentId(id);
    }

    return(
        <div className='container'>
            <p className='title'>All Students</p>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Semester</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            students?.map((student) =>
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.semester}</td>
                                    <td>
                                        <a id={student.id.toString()}
                                           className='button'
                                           onClick={() => grabId(student.id)}
                                           href='/progressDetail'>Progress</a>
                                    </td>
                                </tr>
                           )
                        }
                        </tbody>
                    </table>


        </div>
    );
}

export default StudentProgressPage
