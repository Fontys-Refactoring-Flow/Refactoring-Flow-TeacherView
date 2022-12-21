import React, {useState} from 'react'
import './../style/Main.css'
import {Link, useNavigate} from 'react-router-dom'
import {AssignmentType} from "../types/AssignmentType";
import assignmentService from "../services/assignment.service";

const AddAssignment = () => {
    const navigate = useNavigate()

    const [refactoringType, setRefactoringType] = useState("")
    const [codeFile, setCodeFile] = useState("")
    const [level, setLevel] = useState(0)
    const [language, setLanguage] = useState("")
    const [risks, setRisks] = useState("")
    const [description, setDescription] = useState("")

    const saveAssignment = () => {
        let assignment : AssignmentType = {
            refactoringType: refactoringType,
            level: level,
            language: language,
            risks: risks,
            description: description
        };

        assignmentService.addAssignment(assignment).then(() => {
            navigate('/assignments')
        });
    }

    return (
        <div className='container'>
            <p className='title'>Add an Assignment</p>
            <form>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label className="form-label">Refactoring type</label>
                        <input type="text" className="form-control" value={refactoringType}
                               onChange={(e) => setRefactoringType(e.target.value)} required/>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Language</label>
                        <input type="text" className="form-control" value={language}
                               onChange={(e) => setLanguage(e.target.value)} required/>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">level</label>
                        <input type="number" className="form-control" value={level}
                               onChange={(e) => setLevel(parseInt(e.currentTarget.value))} required/>
                    </div>
                </div>

                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Description</label>
                        <textarea rows={4} className="form-control" value={description}
                                  onChange={(e) => setDescription(e.currentTarget.value)} required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Risks</label>
                        <textarea rows={4} className="form-control" value={risks}
                                  onChange={(e) => setRisks(e.currentTarget.value)} required/>
                    </div>

                </div>

                <div className="row g-3">
                    <div className="col-md-12">
                        <label className="form-label">Code</label>
                        <textarea rows={8} className="form-control" value={codeFile}
                                  onChange={(e) => setCodeFile(e.target.value)} required/>
                    </div>

                </div>

                <div className="row g-3">
                    <div className='col-md-5'></div>
                    <div className="col-2">
                        <button disabled={
                            !refactoringType ||
                            !language ||
                            !level ||
                            !description ||
                            !risks ||
                            !codeFile } type="submit" className="button" onClick={saveAssignment}>Save</button>
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
export default AddAssignment
