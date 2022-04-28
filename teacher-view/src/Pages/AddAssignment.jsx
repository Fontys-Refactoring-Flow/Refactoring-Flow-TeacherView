import React, { Component } from 'react'
import './../Style/Main.css'
import { Link } from 'react-router-dom'

class AddAssignment extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            language: '',
            duration: '',
            difficulty: '',
            discription: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
        this.changeDurationHandler = this.changeDurationHandler.bind(this);
        this.changeDifficultyHandler = this.changeDifficultyHandler.bind(this);
        this.changeDiscriptionHandler = this.changeDiscriptionHandler.bind(this);
        this.saveAssignment = this.saveAssignment.bind(this);
    }

    saveAssignment = (e) => {
        e.preventDefault();
        let assignment = {
            name: this.state.name, 
            language: this.state.language, 
            duration: this.state.duration,
            difficulty: this.state.difficulty, 
            discription: this.state.discription
        };
        console.log('assignment =>' + JSON.stringify(assignment));

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

    changeDiscriptionHandler=(event) =>{
        this.setState({discription: event.target.value});
    }

render(){

  return (
    <div className='container'>
        <p className='title'>Add an Assignment</p>
        <form className="row g-3">
            <div className='col-md-3'></div>
            <div className="col-md-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
            </div>
            <div className="col-md-3">
                <label className="form-label">Language</label>
                <input type="text" className="form-control" value={this.state.language} onChange={this.changeLanguageHandler}/>
            </div>
            <div className='col-md-3'></div>
            <div className='col-md-4'></div>
            <div className="col-md-2">
                <label className="form-label">Duration in minutes</label>
                <input type="number" className="form-control" value={this.state.duration} onChange={this.changeDurationHandler}/>
            </div>
            <div className="col-md-2">
                <label className="form-label">Difficulty</label>
                <select className="form-select" value={this.state.difficulty} onChange={this.changeDifficultyHandler}>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                </select>
            </div>
            <div className="col-12">
                <label className="form-label">Discription</label>
                <textarea rows='4' className="form-control" value={this.state.discription} onChange={this.changeDiscriptionHandler}/>
            </div>
            <div className='col-md-5'></div>
            <div className="col-2">
                <button type="submit" className="button" onClick={this.saveAssignment}>Save</button>
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
