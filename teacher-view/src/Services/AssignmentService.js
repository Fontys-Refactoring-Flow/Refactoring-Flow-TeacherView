import axios from "axios";

const CHALLENGE_API_BASE_URL = "http://localhost:8080/api/v1/assignment";

class AssignmentService{

    getChallenges(){
        return axios.get(CHALLENGE_API_BASE_URL);
    }

    getChallengeById(challengeid){
        console.log(challengeid);
        return axios.get(CHALLENGE_API_BASE_URL + '/' + challengeid);
    }

    createChallange(challange){
        return axios.post(CHALLENGE_API_BASE_URL, challange);
    }
}

export default new AssignmentService()