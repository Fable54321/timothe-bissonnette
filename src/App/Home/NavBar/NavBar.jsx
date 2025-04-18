import PropTypes from 'prop-types'
import styles from './NavBar.module.css'
import menu from '../../../assets/images/menu.png'
import logo from '../../../assets/images/logo.png'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import NavDesktop from '../../../Components/NavDesktop/NavDesktop'
import { scroller } from 'react-scroll'



const NavBar = ({ pull, setPull, display, setDisplay, setMainDisplay }) => {

  const [fixed, setFixed] = useState(true);
  

  useEffect(() => {
    if (!pull) {
      setFixed(true);
    }
  },[pull])

  const handleClick = () => {

    setDisplay(false);

    window.scrollTo({
      top: 0,
      duration: 0,
      delay: 0,
      behavior: 'auto'
    })

    setTimeout(() => {
      setPull(!pull);
      
      
      setFixed(false);
    }, 0);

    setTimeout(() => {
      setMainDisplay(false);
    },1000);

    


  };

  return (
    <>
    
    <header id="nav" className={styles["nav-bar"]} aria-label="Main Navigation">
      
     
      <div className={styles["nav-bar__logo--wrapper"]}>
        <img
          className={styles["nav-bar__logo"]}
          src={logo}
          alt="Logo"
          aria-label="Navigate to the Home page"
        />
      </div>
      <h1 className={styles["nav-bar__title"]}><span>tb</span> technologies</h1>
      <NavDesktop />
      <button
        style={{display: display ? "block" : "none"}}
        className={fixed ? styles["nav-bar__menu--button--fixed"] : styles["nav-bar__menu--button"]}
        aria-label="Toggle navigation"
        onClick={() => handleClick()}
      >
        <img
          className={styles["nav-bar__menu"]}
          src={menu}
          alt="Menu"
        />
      </button>
    </header>
    </>
  );
}

NavBar.propTypes = {
  pull: PropTypes.bool.isRequired,
  setPull: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
  setDisplay: PropTypes.func.isRequired,
  setMainDisplay: PropTypes.func.isRequired
};

export default NavBar
