import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from  'react'
import styles from './App.module.css'
import Home from './Home/Home'
import Dropdown from '../Components/Dropdown/Dropdown';



function App() {
  
const [pull, setPull] = useState(false); 

const [display, setDisplay] = useState(true);



    
    
const [mainDisplay, setMainDisplay] = useState(true);
   
   

  return (
    
    <div style={{minHeight: pull ? "fit-content" : "100vh"}}>
    <div style={{top: `0px`}} className={pull ? `${styles["nav-bar__dropdown"]} ${styles["top--0"] }`: `${styles["nav-bar__dropdown"]} ${styles["nav-bar__dropdown--shut"]}` }>
            <Dropdown pull={pull} setPull={setPull} display={display} setDisplay={setDisplay} setMainDisplay={setMainDisplay} />
          </div>
    <div  className={pull ? styles["app-pull"] : styles["app"]}>
      <Routes>
        <Route path="/" element={<Home pull={pull} setPull={setPull} display={display} setDisplay={setDisplay} mainDisplay={mainDisplay} setMainDisplay={setMainDisplay}  />}>
          
          
        </Route>
      </Routes>
    </div>
    </div>
  )
}

export default App
