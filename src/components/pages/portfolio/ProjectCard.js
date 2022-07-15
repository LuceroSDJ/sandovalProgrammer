// import bamazon from "../../images/azon1.png";
import memoryGame from "../../images/memoryGame.png";
import notes from "../../images/react-notes.png";
import giphyAPI from "../../images/giphyAPI.png";
import to_do from "../../images/to-do.png";
import moneyTracker from "../../images/moneyTracker.png";
import collabApp from "../../images/collabApp.png";

import styles from "./Portfolio.module.css";

const images = [
    memoryGame,
    // notes,
    giphyAPI,
    // to_do,
    moneyTracker,
    collabApp
]

export default function ProjectCard({data}) {
    return (
        <>
            {data && data.map((project, index) => (
                <div className={styles.card} key={project.id}>
                    <img src={images[index]} />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className={styles.projectLinks}>
                        <div className={styles.github}>
                            <a href={project.gitHubLink}>GitHub Repo</a>
                        </div>
                        <div className={styles.deployedLink}>
                            <a href={project.liveSite}>Check it out!</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
