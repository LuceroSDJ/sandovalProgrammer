import { TbPuzzle2 } from "react-icons/tb";
import { MdScreenSearchDesktop } from "react-icons/md";
import { IoAlarmSharp } from "react-icons/io5";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { HiThumbUp} from "react-icons/hi";
import profilePic from "../../images/profile1.jpeg"
import styles from "./LandingPage.module.css";

export default function LandingPage() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.frame}></div>
                <div className={styles.landingImg}>
                    <img src={profilePic} />
                </div>
                <div className={styles.intro}>
                    <h2>Need a Font-end Web Developer?</h2>
                    <h3>I'm here to help.</h3>
                    <button>Schedule a Call</button>
                </div>             
            </div>
            <div className={styles.adjetivos}>
                <div>
                    {/* <IoAlarmSharp /> */}
                    <FaHandsHelping />
                    <h3>Commited</h3>
                    <p>I'm 100% commited to your business success and adding value to the team.</p>
                </div>
                <div>
                    {/* <TbPuzzle2 /> */}
                    <IoExtensionPuzzleSharp />
                    <h3>Problem-solver</h3>
                    <p>I enjoy tackling complex problems head on, one step at a time.</p>
                </div>
                <div>
                    {/* <MdScreenSearchDesktop /> */}
                    {/* <IoRocketSharp /> */}
                    <HiThumbUp />
                    <h3>Enthusistic</h3>
                    <p>Enthusiastic about creating dynamic and intuitive websites.</p>
                </div>
            </div>
        </div>
        
    )
}
