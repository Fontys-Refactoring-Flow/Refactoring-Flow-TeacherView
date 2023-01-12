import React, {FormEvent, useEffect, useState} from 'react'
import '../style/Main.css'
import '../style/Card.css'
import {useNavigate} from 'react-router-dom'
import {StudentType} from "../types/UserTypes";
import studentService from "../services/student.service";

const StudentProgressPage = () => {
    const navigate = useNavigate()
    const [students, setStudents] = useState<Array<StudentType>>([])
    const [filteredStudents, setFilteredStudents] = useState<Array<StudentType>>([])

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.currentTarget.value.length > 0) {
            setFilteredStudents(students!.filter(student => student.name.toLowerCase().includes(e.currentTarget.value)));
        }
        else{
            setFilteredStudents(students);
        }

    };

    useEffect(() => {
        studentService.getStudents().then((res) => {
            setStudents(res.data)
            setFilteredStudents(res.data)
        })
    }, [])

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <p className='title'>All Students</p>
                </div>
                <div className='col-4'>
                    <input
                        className="searchbar"
                        type="text"
                        placeholder="Search student"
                        onChange={handleChange}
                    />
                </div>
            </div>
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
                    filteredStudents!.map(
                        student =>
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.semester}</td>
                                <td>
                                    <a className='button'
                                       onClick={() => navigate('/progressDetail?id=' + student.id)}>Progress</a>
                                </td>
                            </tr>
                    )
                }
                </tbody>
            </table>


        </div>
    );
}

export default StudentProgressPage;
