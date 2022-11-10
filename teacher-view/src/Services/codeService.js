import axios from "axios";

const getCodeById = (id) => {
    return axios.get('http://localhost:8080/api/v1/codefile/' + id);
}

const getCodeByNameAndAssignmentID = (id, name) => {
    console.log(id);
    return axios.get('http://localhost:8080/api/v1/codefile/get?name='+ name +'&assignmentID='+ id);
}

const codeService = {
    getCodeById,
    getCodeByNameAndAssignmentID
}

export default codeService