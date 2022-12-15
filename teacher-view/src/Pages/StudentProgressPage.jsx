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
            students: [],
            filteredStudents: []
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        if (e.target.value.length > 0) {
            this.setState({filteredStudents:this.state.students.filter(student => student.name.toLowerCase().includes(e.target.value))});
        }
        else{
            this.setState({filteredStudents: this.state.students})
        }

    };

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            console.log(res)
            this.setState({ students: res.data});
            this.setState({ filteredStudents: res.data});
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
                <div className='row'>
                    <div className='col-3'>
                        <p className='title'>All Students</p>
                    </div>
                    <div className='col-4'>
                        <input
                            className="searchbar"
                            type="text"
                            placeholder="Search student"
                            onChange={this.handleChange}
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
                        this.state.filteredStudents.map(
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