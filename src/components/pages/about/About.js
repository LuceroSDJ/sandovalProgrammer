import React from 'react';
import { BsThermometerSun } from "react-icons/bs";
import { GiTexas } from "react-icons/gi";
import NetworkLinks from "./NetworkLinks";
import profile from "../../images/profile2.jpeg";
import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles.aboutMeSection}>
            <div className={styles.perfil}>
                <img src={profile} />
                <p>Hello, world! <br/> My name is Carmen Lucero.</p>
                <p>Frontend Web Developer</p>
                <NetworkLinks />
            </div>
            <div className={styles.bio}>
                <h2>About Me</h2>
                
                <p>I am a highly motivated web developer based in Austin, Texas.  <GiTexas /> <BsThermometerSun /></p>
                <p>
                    I have embarked in the journey of changing careers, and I have fallen in love with 
                    the great variety of technologies and resources available for driven individuals like me. 
                    My background is in social work and customers relations. Therefore, I posses a particular set 
                    of transferrable skills including problem-solving, leadership, teamwork, and a high sense of responsibility.
                </p>
                <p>
                    As a lifelong learner, I have also enjoyed exploring programming languages, frameworks, 
                    and libraries such as JavaScript, Python, jQuery, React, node.js, and express.
                </p>
                <p>
                    I welcome the type of challenge that helps me grow as a web developer, and I would love to have 
                    the opportunity to master the technologies specific to your team.
                </p>
                <p>
                    I invite you to further discuss how my qualifications will be beneficial to your organization's success.   
                </p>
            </div>
        </section>
    )
}
