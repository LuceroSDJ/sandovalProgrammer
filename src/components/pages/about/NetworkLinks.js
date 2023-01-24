import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {MdEmail} from "react-icons/md";

import styles from "./About.module.css";

export default function NetworkLinks() {
    return (
        <ul className={styles.mediaIcons}>
            <li>
                <a href="https://www.linkedin.com/in/carmen-sandoval-38161b174/" target="_blank" rel="noopener noreferrer" className="linkedIn_icon" >
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href="https://github.com/LuceroSDJ" target="_blank" rel="noopener noreferrer" className='gitHub_icon' >
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="mailto:lucero.atx1@gmail.com?subject=Job%20Opportunity" target="_blank" rel="noopener noreferrer" className='email_icon' >
                    <MdEmail />
                </a>
            </li>
        </ul> 
    )
}
