import React, {Component, useState} from 'react'
import './../Style/Main.css'
import './../Style/Card.css'
import AssignmentService from '../Services/AssignmentService';
import { Link } from 'react-router-dom';

class AssignmentsPage extends Component {

    constructor(props) {
        super(props);


        this.state = {
            assignments: [],
            filteredAssignments: []
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        if (e.target.value.length > 0) {
            this.setState({filteredAssignments:this.state.assignments.filter(assignment => assignment.refactoringType.toLowerCase().includes(e.target.value))});
        }
        else{
            this.setState({filteredAssignments: this.state.assignments})
        }

    };

    componentDidMount() {
        AssignmentService.getAssignments().then((res) => {
            console.log(res)
            this.setState({ assignments: res.data });
            this.setState({ filteredAssignments: res.data });
        })
    }


    render() {
        
        return (
            <div className='container'>
                <p className='title'style={{textAlign:'left'}}>All Assignments <Link to="/addAssignment" class='button' >Add Assignment</Link>  </p>


                <input
                    type="text"
                    placeholder="Search here"
                    class="searchbar col-md-2"
                    style={{marginTop:'32px',paddingLeft:'16px'}}
                    onChange={this.handleChange}
                />

                <div className='card-container'>
                { 
                    this.state.filteredAssignments.map(
                        challenge =>
                            <tr key={challenge.id}>
                                <div className='card' style={{ width: '18rem', height: '200px', margin: '10px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{challenge.refactoringType}</h5>
                                        <p className='card-body'>{"level " + challenge.level}</p>
                                        {/*<Link to='editassignment' className='button' role="button" id={challenge.id}>Edit Assignment</Link>*/}
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
