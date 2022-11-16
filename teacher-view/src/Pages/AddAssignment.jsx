import React, { Component } from 'react'
import './../Style/Main.css'
import { Link } from 'react-router-dom'
import AssignmentService from '../Services/AssignmentService'
import history from '../history';

class AddAssignment extends Component {

    constructor(props){

        super(props)

        this.state = {
            refactoringType: '',
            level: '',
            description: '',
            risks: '',
            language:''

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeRisksHandler = this.changeRisksHandler.bind(this);
        this.changeLevelHandler = this.changeLevelHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
        this.saveAssignment = this.saveAssignment.bind(this);

    }

    saveAssignment = (e) => {
        e.preventDefault();

        let assignment = {
            refactoringType: this.state.refactoringType,
            level: this.state.level,
            language: this.state.language,
            risks: this.state.risks,
            description: this.state.description
        };
        console.log('assignment =>' + JSON.stringify(assignment));

        AssignmentService.createAssignment(assignment).then(res =>{
            history.push('/assignments')
            window.location.reload(false)
        });
    }

    changeNameHandler=(event) =>{
        this.setState({refactoringType: event.target.value});
    }

    changeLevelHandler=(event) =>{
        this.setState({level: event.target.value});
    }

    changeLanguageHandler=(event)=>{
        this.setState({language: event.target.language});
    }

    changeDescriptionHandler=(event) =>{
        this.setState({description: event.target.value});
    }

    changeRisksHandler=(event) =>{
        this.setState({risks: event.target.value});
    }


    render(){

        return (
            <div className='container'>
                <p className='title'>Add an Assignment</p>
                <form>
                    <div className="row g-3">
                        <div className="col-md-4">
                            <label className="form-label">Refactoring type</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.changeNameHandler} required/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Language</label>
                            <input type="text" className="form-control" value={this.state.language} onChange={this.changeLanguageHandler} required/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">level</label>
                            <input type="number" className="form-control" value={this.state.level} onChange={this.changeLevelHandler} required/>
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Description</label>
                            <textarea rows='4' className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler} required/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Risks</label>
                            <textarea rows='4' className="form-control" value={this.state.risks} onChange={this.changeRisksHandler} required/>
                        </div>

                    </div>

                    <div className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">Code</label>
                            <textarea rows='8' className="form-control"  required/>
                        </div>

                    </div>

                    <div className="row g-3">
                        <div className='col-md-5'></div>
                        <div className="col-2">
                            <button disabled={
                                !this.state.name ||
                                !this.state.description ||
                                !this.state.risks ||
                                !this.state.level ||
                                !this.state.language} type="submit" className="button" onClick={this.saveAssignment}>Save</button>
                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-1'>
                            <Link to="/assignments" className='button'>Cancel</Link>
                        </div>

                    </div>

                    {/*<div className="col-md-2">
                        <label className="form-label">Duration in minutes</label>
                        <input type="number" className="form-control" value={} onChange={}/>
                    </div>*/}
                </form>
            </div>
        )
    }
}
export default AddAssignment
