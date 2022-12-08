import {MouseEvent, useState} from 'react'
import '../style/Main.css'
import {Link, useNavigate} from 'react-router-dom'
import assignmentService from '../services/assignment.service'
import {AssignmentType} from "../types/AssignmentType";

const AddAssignment = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [language, setLanguage] = useState("")
    const [duration, setDuration] = useState(0)
    const [difficulty, setDifficulty] = useState("Choose an option...")
    const [description, setDescription] = useState("")

    const saveAssignment = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const assignment : AssignmentType = {
            name: name,
            refactoringType: "",
            level: 1,
            subject: "",
            duration: duration,
            difficulty: difficulty,
            description: description
        };

        assignmentService.addAssignment(assignment).then(() => {
            navigate('/assignments')
        });
    }

    return (
    <div className='container'>
        <p className='title'>Add an Assignment</p>
        <form className="row g-3">
            <div className='col-md-3'></div>
            <div className="col-md-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" value={name}
                       onChange={(e) => { setName(e.target.value) }} required/>
            </div>
            <div className="col-md-3">
                <label className="form-label">Language</label>
                <input type="text" className="form-control" value={language}
                       onChange={(e) => { setLanguage(e.target.value) }} required/>
            </div>
            <div className='col-md-3'></div>
            <div className='col-md-4'></div>
            <div className="col-md-2">
                <label className="form-label">Duration in minutes</label>
                <input type="number" className="form-control" value={duration}
                       onChange={(e) => { setDuration(parseInt(e.target.value)) }} required/>
            </div>
            <div className="col-md-2">
                <label className="form-label">Difficulty</label>
                <select className="form-select" value={difficulty} onChange={(e) => { setDifficulty(e.target.value) }} required>
                <option defaultChecked={true}>choose an option...</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                </select>
            </div>
            <div className="col-12">
                <label className="form-label">Description</label>
                <textarea rows={4} className="form-control" value={description}
                          onChange={(e) => { setDescription(e.target.value) }} required/>
            </div>
            <div className='col-md-1'>
                <Link to={'/upload'} className={'button'}>Upload</Link>
            </div>
0            <div className='col-md-4'></div>
            <div className="col-2">
                <button disabled={
                    !name ||
                    !description ||
                    !language ||
                    !difficulty ||
                    !duration} type="submit" className="button" onClick={saveAssignment}>Save</button>
            </div>
            <div className='col-md-4'></div>
            <div className='col-md-1'>
                <Link to="/assignments" className='button'>Cancel</Link>
            </div>
        </form>
    </div>
    )
}

export default AddAssignment
