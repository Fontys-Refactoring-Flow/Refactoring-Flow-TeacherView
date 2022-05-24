import React, {Component} from 'react'
import './../Style/Main.css'
import './../Style/Card.css'
import StudentService from '../Services/StudentService';
import { Link } from 'react-router-dom'
import SesionHandler from '../SesionHandler';
import AssignmentService from '../Services/AssignmentService';

class StudentProgressDetailPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            student:[],
            assignment:[]
        }
    }

    componentDidMount(){
        StudentService.getStudentById(SesionHandler.getStudentId()).then((res) => {
            console.log(res)
            this.setState({ student: res.data});
        })
        AssignmentService.getChallangeByStudent(SesionHandler.getStudentId()).then((res) => {
            console.log(res)
            this.setState({ assignment: res.data});
    })
}

    render() {

        return(
            <div className='container'>
                <h1>{this.state.student.name}</h1>
                <thead>
                    <tr>
                        <th>Assignment</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.assignment.map(
                        assignment =>
                    <tr key={assignment.id}>
                        <td>{assignment.name}</td>
                    </tr>
                    )
                }
                </tbody>
                <h1>{this.state.assignment.name}</h1>
                <Link className='button' to='/progress'>Return</Link>
            </div>
        );
    
    }
    
}

export default StudentProgressDetailPage