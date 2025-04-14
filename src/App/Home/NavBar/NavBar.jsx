import PropTypes from 'prop-types'
import styles from './NavBar.module.css'
import menu from '../../../assets/images/menu.png'
import logo from '../../../assets/images/logo.png'
import { useState, useEffect } from 'react'





const NavBar = ({ pull, setPull }) => {

  const [fixed, setFixed] = useState(true);
  

  useEffect(() => {
    if (!pull) {
      setFixed(true);
    }
  },[pull])

  const handleClick = () => {
    setPull(!pull);
    setFixed(false);


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
      <button
        
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
  setPull: PropTypes.func.isRequired
};

export default NavBar
