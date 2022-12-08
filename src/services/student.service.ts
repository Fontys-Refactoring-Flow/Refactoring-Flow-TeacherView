import {axiosInstance} from "./axios.service";

const url = "/student";

const getStudents = () => {
    return axiosInstance.get(url + '/');
}

const getStudentById = (studentId: number) => {
    return axiosInstance.get(url + '/' + studentId)
}

export default { getStudents, getStudentById }