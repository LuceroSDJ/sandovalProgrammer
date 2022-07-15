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
        const result = await filteredData.filter(repo => repo.topics != "");
        
        //build object
        const projects = await result.map(project => {
            console.log("test", reposListData.id)
            return {
                id: project.id,
                name: project.name,
                description: project.description,
                gitHubLink: project.clone_url,
                liveSite: project.homepage
            }
        })

        const reactProjects = [
            {
                id: 999,
                name: "Money Tracker",
                description: "This React-powered web application helps users keep track of their expenses through a simple and intuitive User Interface. Firebase real-time database & authentication services shine, allowing users to create their accounts and see new transactions in real-time.",
                gitHubLink: "must deploy",
                liveSite: "https://mymoneytracker-5d8af.web.app/"
            },
            {
                id: 9999,
                name: "Collab Group Web App",
                description: "This web application leverages Context, Hooks, Reducers, and Routing to create interactive log-in, sign-up, and dashboard pages binging a group collaboration site to live. Users can interact in real-time with other users by adding new projects and comments. The magic comes from Firebase Authentication and Realtime Database services storing and syncing app data in milliseconds.",
                gitHubLink: "must deploy",
                liveSite: "https://mycollabgroupapp.web.app"
            },
        ]
        // update state
        setReposListData([...projects, ...reactProjects]);
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
