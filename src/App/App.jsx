import { Route, Routes } from 'react-router-dom'
import { useState } from  'react'
import styles from './App.module.css'
import Home from './Home/Home'
import Dropdown from '../Components/Dropdown/Dropdown';



function App() {
  
const [pull, setPull] = useState(false);



  return (
    <div style={{overflowX: "hidden", overflowY: pull ? "hidden" : "auto", height: "100vh", minWidth: "100vw"}}>
    <div className={pull ? styles["nav-bar__dropdown"] : `${styles["nav-bar__dropdown"]} ${styles["nav-bar__dropdown--shut"]}`}>
            <Dropdown pull={pull} setPull={setPull} />
          </div>
    <div className={pull ? styles["app-pull"] : styles["app"]}>
      <Routes>
        <Route path="/" element={<Home pull={pull} setPull={setPull} />}  >
          
          
        </Route>
      </Routes>
    </div>
    </div>
  )
}

export default App
