import axios from "axios";

const ASSIGNMENT_API_BASE_URL = "http://localhost:8080/api/v1/assignment";

class AssignmentService{

    getChallenges(){
        return axios.get(ASSIGNMENT_API_BASE_URL);
    }

    getAssignmentById(assignmentId){
        console.log(assignmentId);
        return axios.get(ASSIGNMENT_API_BASE_URL + '/' + assignmentId);
    }

    createAssignment(assignment){
        return axios.post(ASSIGNMENT_API_BASE_URL, assignment);
    }

    getAssignmentByStudent(studentid){
        return axios.get(ASSIGNMENT_API_BASE_URL + '/findByStudentId/' + studentid);
    }

}

export default new AssignmentService()