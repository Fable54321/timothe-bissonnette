import PropTypes from 'prop-types'
import styles from './NavBar.module.scss'

import logo from '../../../assets/images/logo.png'

import NavDesktop from '../../../Components/NavDesktop/NavDesktop'





const NavBar = () => {

  



  return (
    <>
    
    <header id="nav" className={styles["nav-bar"]} aria-label="Main Navigation">
      
     
      <div  className={styles["nav-bar__logo--wrapper"]}>
        <img
         
          className={styles["nav-bar__logo"]}
          src={logo}
          alt="Logo"
          aria-label="Navigate to the Home page"
        />
      </div>
      <h1 translate='no' className={styles["nav-bar__title"]}><span>tb</span> technologies</h1>
      <NavDesktop />
    
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
