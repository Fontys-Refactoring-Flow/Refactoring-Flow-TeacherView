import {axiosInstance} from "./axios.service";

const listRepositories = () => {
    return axiosInstance.get('/github/list');
}

export default { listRepositories }