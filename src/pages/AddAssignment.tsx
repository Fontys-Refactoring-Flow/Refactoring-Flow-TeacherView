import {MouseEvent, useState} from 'react'
import '../style/Main.css'
import {Link, useNavigate} from 'react-router-dom'
import assignmentService from '../services/assignment.service'
import codeService from '../services/code.service'
import {AssignmentType} from "../types/AssignmentType";

const AddAssignment = () => {
    const navigate = useNavigate()

    const [refactoringType, setRefactoringType] = useState("")
    const [level, setLevel] = useState("")
    const [description, setDescription] = useState("")
    const [risks, setRisks] = useState("")
    const [language, setLanguage] = useState("")
    const [assignmentId, setAssignmentId] = useState("")
    const [codeFile, setCodeFIle] = useState("")




    const saveAssignment = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const assignment : AssignmentType = {
            refactoringType: refactoringType,
            level: parseInt(level) ,
            description: description,
            risks: risks,
            language:language
        };

        assignmentService.addAssignment(assignment).then(res => {
            navigate('/assignments')
            setAssignmentId(res.data.id)
            saveCodeFile()
        });
    }

    const saveCodeFile = () => {

        codeService.postCode(codeFile, parseInt(assignmentId) , 11, -1).then(res =>{

        })
    }



    return (
        <div className='container'>
            <p className='title'>Add an Assignment</p>
            <form>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label className="form-label">Refactoring type</label>
                        <select value={refactoringType} onChange={(e) => { setRefactoringType(e.target.value) }} required>
                            <option value={"Rename_Method"}>Rename method</option>
                            <option value={"API_Rename"}>API rename</option>
                            <option value={"Extract_Method"}>Extract method</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Language</label>
                        <input type="text" className="form-control" value={language}
                               onChange={(e) => { setLanguage(e.target.value) }} required/>
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">level</label>
                        <input type="number" className="form-control" value={level}
                               onChange={(e) => { setLevel(e.target.value) }} required/>
                    </div>
                </div>

                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Description</label>
                        <textarea rows={4} className="form-control" value={description}
                                  onChange={(e) => { setDescription(e.target.value) }} required/>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Risks</label>
                        <textarea rows={4} className="form-control" value={risks}
                                  onChange={(e) => { setRisks(e.target.value) }} required/>
                    </div>

                </div>

                <div className="row g-3">
                    <div className="col-md-12">
                        <label className="form-label">Code</label>
                        <textarea rows={8} className="form-control" value={codeFile}
                                  onChange={(e) => { setCodeFIle(e.target.value) }} required/>
                    </div>

                </div>

                <div className="row g-3">
                    <div className='col-md-5'></div>
                    <div className="col-2">
                        <button disabled={
                            !refactoringType ||
                            !description ||
                            !risks ||
                            !level ||
                            !language} type="submit" className="button" onClick={saveAssignment}>Save</button>
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

export default AddAssignment
