import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from  'react'
import styles from './App.module.css'
import Home from './Home/Home'
import Dropdown from '../Components/Dropdown/Dropdown';



function App() {
  
const [pull, setPull] = useState(false); 

const [display, setDisplay] = useState(true);

   const [scrollY, setScrollY] = useState(0);
    
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
    
      window.addEventListener('scroll', handleScroll);
    
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      console.log(scrollY);
    }, [scrollY]);

  return (
    
    <div>
    <div style={{top: `${scrollY + 1}px`}} className={pull ? styles["nav-bar__dropdown"] : `${styles["nav-bar__dropdown"]} ${styles["nav-bar__dropdown--shut"]}`}>
            <Dropdown pull={pull} setPull={setPull} display={display} setDisplay={setDisplay} />
          </div>
    <div className={pull ? styles["app-pull"] : styles["app"]}>
      <Routes>
        <Route path="/" element={<Home pull={pull} setPull={setPull} display={display} setDisplay={setDisplay} />}  >
          
          
        </Route>
      </Routes>
    </div>
    </div>
  )
}

export default App
