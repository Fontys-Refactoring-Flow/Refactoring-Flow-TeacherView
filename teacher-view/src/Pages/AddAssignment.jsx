import React, { Component } from 'react'
import './../Style/Main.css'
import { Link } from 'react-router-dom'
import AssignmentService from '../Services/AssignmentService'
import history from '../history';

class AddAssignment extends Component {

    constructor(props){
        
        super(props)

        this.state = {
            name: '',
            language: '',
            duration: '',
            difficulty: '',
            description: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
        this.changeDurationHandler = this.changeDurationHandler.bind(this);
        this.changeDifficultyHandler = this.changeDifficultyHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveAssignment = this.saveAssignment.bind(this);
    }

    saveAssignment = (e) => {
        e.preventDefault();
        
        let assignment = {
            name: this.state.name, 
            language: this.state.language, 
            duration: this.state.duration,
            difficulty: this.state.difficulty, 
            description: this.state.description
        };
        console.log('assignment =>' + JSON.stringify(assignment));

        AssignmentService.createChallange(assignment).then(res =>{
            history.push('/assignments')
            window.location.reload(false)
        });
    }

    changeNameHandler=(event) =>{
        this.setState({name: event.target.value});
    }

    changeLanguageHandler=(event) =>{
        this.setState({language: event.target.value});
    }

    changeDurationHandler=(event) =>{
        this.setState({duration: event.target.value});
    }
    
    changeDifficultyHandler=(event) =>{
        this.setState({difficulty: event.target.value});
    }

    changeDescriptionHandler=(event) =>{
        this.setState({description: event.target.value});
    }

render(){

  return (
    <div className='container'>
        <p className='title'>Add an Assignment</p>
        <form className="row g-3">
            <div className='col-md-3'></div>
            <div className="col-md-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.changeNameHandler} required/>
            </div>
            <div className="col-md-3">
                <label className="form-label">Language</label>
                <input type="text" className="form-control" value={this.state.language} onChange={this.changeLanguageHandler} required/>
            </div>
            <div className='col-md-3'></div>
            <div className='col-md-4'></div>
            <div className="col-md-2">
                <label className="form-label">Duration in minutes</label>
                <input type="number" className="form-control" value={this.state.duration} onChange={this.changeDurationHandler} required/>
            </div>
            <div className="col-md-2">
                <label className="form-label">Difficulty</label>
                <select className="form-select" value={this.state.difficulty} onChange={this.changeDifficultyHandler} required>
                <option selected>choose an option...</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                </select>
            </div>
            <div className="col-12">
                <label className="form-label">Description</label>
                <textarea rows='4' className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler} required/>
            </div>
            <div className='col-md-5'></div>
            <div className="col-2">
                <Link to="/assignments" type="submit" className="button" onClick={this.saveAssignment}>Save</Link>
            </div>
            <div className='col-md-4'></div>
            <div className='col-md-1'>
                <Link to="/assignments" className='button'>Cancel</Link>
            </div>
        </form>
    </div>
  )
}
}
export default AddAssignment
