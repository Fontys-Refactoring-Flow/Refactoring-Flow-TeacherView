import {axiosInstance} from "./axios.service";
import {AssignmentType} from "../types/AssignmentType";

const url = "/assignment";

const getAssignments = () => {
    return axiosInstance.get(url);
}

const getAssignmentById = (assignmentId: number) => {
    return axiosInstance.get(url + '/' + assignmentId);
}

const createAssignment = (assignment: AssignmentType) => {
    return axiosInstance.post(url, assignment);
}

const getAssignmentByStudent = (studentId: number) => {
    return axiosInstance.get(url + '/' + studentId);
}

export default { getAssignmentByStudent, getAssignments, createAssignment, getAssignmentById}