import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import { FaBars } from 'react-icons/fa';

import styles from "./Navbar.module.css";

export default function Navbar() {
    const [header, setHeader] = useState(styles.nav1);
    const [toggleMenu, setToggleMenu] = useState(styles.menu)

    const listenScrollEvent = event => {
        if (window.scrollY < 73) {
          return setHeader(styles.nav1);
        } else if (window.scrollY > 70) {
          return setHeader(styles.nav2);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    
        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    const handleClick = () => {
        toggleMenu == styles.menu 
        ? setToggleMenu(`${styles.menu} ${styles.show}`)
        : setToggleMenu(styles.menu)
    }
    const onLinkClick = () => {
        setToggleMenu(styles.menu)
    }

    return (
        // <div className={header}>
            <nav className={header}>
                <Link className={styles.logo} to="/sandovalProgrammer">Lucero</Link>
                {/* <h1 className={styles.test1}>Lucero</h1> */}
                <ul className={toggleMenu}>
                    <li onClick={onLinkClick}>
                        <Link to="/about">About</Link>
                    </li>
                    <li onClick={onLinkClick}>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li onClick={onLinkClick}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <button onClick={handleClick} className={styles.menuIcon}>
                    <FaBars />
                </button>
            </nav>
        // </div>
    )
}
