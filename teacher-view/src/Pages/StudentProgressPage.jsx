import React, {Component} from 'react'
import './../Style/Main.css'
import './../Style/Card.css'
import StudentService from '../Services/StudentService';
import { Link } from 'react-router-dom'
import SesionHandler from '../SesionHandler';

class StudentProgressPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            student: []
        }
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            console.log(res)
            this.setState({ student: res.data});
            SesionHandler.clearStudentId();
        })
    }

    grabId = (id) =>{
        console.log(id);
        SesionHandler.setStudentId(id);
    }

    render() {

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
                                this.state.student.map(
                                    student =>
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.semester}</td>
                                    <td><a id={student.id} className='button' value={student.id} onClick={() =>this.grabId(student.id)} href='/progressDetail'>Progress</a></td>
                                </tr>
                                   )
                                }
                            </tbody>
                        </table>
                        
                 
            </div>
        );
    }

}

export default StudentProgressPage;
