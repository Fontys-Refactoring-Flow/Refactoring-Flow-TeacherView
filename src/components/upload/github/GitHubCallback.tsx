import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {axiosInstance} from "../../../services/axios.service";

const GitHubCallback = () => {
    const [params] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.post(`/github/callback?code=${params.get("code")}`).then(() => {
            navigate("/")
        })
    })

    return (
        <div>
            <p>Loading...</p>
        </div>
    )
}

export default GitHubCallback