import React, {Component} from 'react'
import './../Style/Main.css'
import './../Style/Card.css'
import StudentService from '../Services/StudentService';
import { Link } from 'react-router-dom'

class StudentProgressDetailPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            student:[]
        }
    }

    componentDidMount(){
        StudentService.getStudentById().then((res) => {
            console.log(res)
            this.setState({ student: res.data});
        })
    }

    render() {

        return(
            <div className='container'>
            {
                this.state.student.map(
                    student =>
                    <h1>{student.name}</h1>
                )
            }
            </div>
        );
    
    }

}

export default StudentProgressDetailPage