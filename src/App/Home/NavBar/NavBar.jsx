import { Link, useLocation } from 'react-router-dom'
import styles from './NavBar.module.css'
import navIcon  from '../../../assets/stash_burger-classic-duotone.png'
import closeNav from '../../../assets/close-nav.png'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'

const NavBar = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 70em)'})

  const [mobileNavOpen, setMobileNavOpen]= useState(false);  
  
  const location = useLocation();
  

  return (
    <header className={styles["nav-bar"]} aria-label="Main Navigation">
      <h1 className={styles["nav-bar__title"]}>
        {location.pathname === "/projects" ? "My " : "Timothe Bissonnette"}
        <br style={{ display: isMobile ? "block" : "none" }} />
        {location.pathname === "/projects" ? "Projects" : ""}
      </h1>
      <img
        className={!mobileNavOpen ? styles["nav-bar__icon--close"] : styles["nav-bar__icon--open"]}
        src={mobileNavOpen ? closeNav : navIcon}
        alt={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        style={{ display: isMobile ? "block" : "none" }}
        aria-expanded={mobileNavOpen}
      />
      <nav aria-label="Primary">
        <ul
          className={
            [styles["nav-bar__links"], mobileNavOpen ? styles["nav-bar__links--mobile--open"] : ""].join(" ")
          }
        >
          <li>
            <Link to="/" aria-label="Navigate to About Me page">About Me</Link>
          </li>
          <li>
            <Link to="/projects" aria-label="Navigate to My Projects page">My Projects</Link>
          </li>
          <li>
            <Link to="/contact" aria-label="Navigate to Contact Me page">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar
