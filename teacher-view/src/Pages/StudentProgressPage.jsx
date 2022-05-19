import React, {Component} from 'react'
import './../Style/Main.css'
import './../Style/Card.css'
import StudentService from '../Services/StudentService';
import { Link } from 'react-router-dom'

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
        })
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
                                    <td><Link to='/test' className='button'>Progress</Link></td>
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
