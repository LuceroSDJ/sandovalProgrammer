import {useState, useEffect} from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Portfolio.module.css";

import axios from "axios";

export default function Portfolio() {
    const [reposListData, setReposListData] = useState([]);

     // make API useCallback, retrieve data from github, store it in a stateful variable
    useEffect(() => {
        const getMyRepos = async () => {
        const retrievedRepos = await axios.get(
            "https://api.github.com/users/LuceroSDJ/repos"
        )
        console.log("retrievedRepos.data", retrievedRepos.data)
        const filteredData = retrievedRepos.data;
        // const result = filteredData.filter(repo => repo.stargazers_count > 0);
        const result = filteredData.filter(repo => repo.topics != "");
        // update state
        setReposListData(result);
        }
        getMyRepos();
    }, [setReposListData])


    return (
        <div className={styles.portfolioContainer}>
            <h2>My Projects</h2>
            <div className={styles.projectsContainer}>
                <ProjectCard data={reposListData} />
            </div>
        </div>
    )
}
