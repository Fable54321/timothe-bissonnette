import PropTypes from "prop-types"
import NavBar from "./NavBar/NavBar"
import styles from './Root.module.css'

// import {  useState } from "react"
 import { Outlet } from "react-router-dom";



const Home = ({ pull, setPull, display, setDisplay, mainDisplay ,setMainDisplay }) => {

  
 

  return (
    <div className={styles["home--wrapper"]} style={{display: mainDisplay ? "flex" : "none"}} >
      <NavBar  pull={pull} setPull={setPull} scrollY={scrollY} display={display} setDisplay={setDisplay} setMainDisplay={setMainDisplay}  />
      
      <main className={styles["main"]}>
          <Outlet />
        
      </main>
    </div>
  );
 
}

Home.propTypes = {
  pull: PropTypes.bool.isRequired,
  setPull: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
  setDisplay: PropTypes.func.isRequired,
  mainDisplay: PropTypes.bool.isRequired,
  setMainDisplay: PropTypes.func.isRequired
}

export default Home
