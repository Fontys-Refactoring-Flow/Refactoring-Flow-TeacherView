import {useEffect, useState} from "react";
import githubService from "../../../services/github.service";

const GitHubSelect = () => {
    const [repos, setRepos] = useState<Array<String>>([])

    useEffect(() => {
        githubService.listRepositories().then((response) => {
            setRepos(response.data)
        })
    }, [])

    return (
        <div>
            <ul>
                {repos.map((repo) => {
                    return <li key={repo.toString()}>{repo}</li>
                })}
            </ul>
        </div>
    )
}

export default GitHubSelect