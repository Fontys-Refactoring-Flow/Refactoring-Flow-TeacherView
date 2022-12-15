import React, { Component } from 'react'
import './../Style/Main.css'
import { Link } from 'react-router-dom'
import AssignmentService from '../Services/AssignmentService'
import history from '../history';
import CodeService from "../Services/codeService";

class AddAssignment extends Component {

    constructor(props){

        super(props)

        this.state = {
            id:'',
            refactoringType: '',
            level: '',
            description: '',
            risks: '',
            language:'',
            codeFile:''

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeRisksHandler = this.changeRisksHandler.bind(this);
        this.changeLevelHandler = this.changeLevelHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
        this.changeCodeFileHandler = this.changeCodeFileHandler.bind(this);
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

        AssignmentService.createAssignment(assignment).then(res =>{
            history.push('/assignments')
            this.state.id = res.data.id

            window.location.reload(false)
            this.SaveCodeFile()
        });

    }

    SaveCodeFile = () => {
        let codeFile ={
            userId: 11,
            code: this.state.codeFile,
            assignmentId: this.state.id,
            version: -1
        }

        CodeService.addCodefile(codeFile).then(res =>{

        })
    }

    changeNameHandler=(event) =>{
        this.setState({refactoringType: event.target.value});
    }

    changeLevelHandler=(event) =>{
        this.setState({level: event.target.value});
    }

    changeLanguageHandler=(event)=>{
        this.setState({language: event.target.value});
    }

    changeDescriptionHandler=(event) =>{
        this.setState({description: event.target.value});
    }

    changeRisksHandler=(event) =>{
        this.setState({risks: event.target.value});
    }

    changeCodeFileHandler=(event) =>{
        this.setState({codeFile: event.target.value});
    }


    render(){

        return (
            <div className='container'>
                <p className='title'>Add an Assignment</p>
                <form>
                    <div className="row g-3">
                        <div className="col-md-4">
                            <label className="form-label">Refactoring type</label>
                            <select value={this.state.refactoringType} onChange={this.changeNameHandler} required>
                                <option value={"Rename_Method"}>Rename method</option>
                                <option value={"API_Rename"}>API rename</option>
                                <option value={"Extract_Method"}>Extract method</option>
                            </select>
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
                            <textarea rows='8' className="form-control" value={this.state.codeFile} onChange={this.changeCodeFileHandler} required/>
                        </div>

                    </div>

                    <div className="row g-3">
                        <div className='col-md-5'></div>
                        <div className="col-2">
                            <button disabled={
                                !this.state.refactoringType ||
                                !this.state.language ||
                                !this.state.level ||
                                !this.state.description ||
                                !this.state.risks ||
                                !this.state.codeFile } type="submit" className="button" onClick={this.saveAssignment}>Save</button>
                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-1'>
                            <Link to="/assignments" className='button'>Cancel</Link>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}
export default AddAssignment
