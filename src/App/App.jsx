import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from  'react'
import styles from './App.module.scss'
import Root from './Root/Root'
import Dropdown from '../Components/Dropdown/Dropdown';
import { useMediaQuery } from 'react-responsive';
import menu from '../../src/assets/images/menu.png'
import Clients from './Pages/Clients/Clients';
import Home from './Root/Home/Home';
import Subscription from '../Components/Subscription/Subscription';
import Contract from '../Components/Contract/Contract';
import Email from '../Components/Email/Email';
import Contract__1 from '../Components/Contract/Contract--1/Contract--1';
import MonthlyContract from '../Components/Contract/MonthlyContract/MonthlyContract';
import Advertisement from '../Components/Advertisement/Advertisement';


function App() {
  
const [pull, setPull] = useState(false); 

const [display, setDisplay] = useState(true);


const isMobile = useMediaQuery({ query: '(max-width: 62.5em)' });
    
    
const [mainDisplay, setMainDisplay] = useState(true);

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
    
    <div className={styles["app--wrapper"]} style={{minHeight: pull ? "fit-content" : "100vh"} }>
        <button
              style={{display: display ? "block" : "none"}}
              className={fixed ? styles["menu--button--fixed"] : styles["_menu--button"]}
              aria-label="Toggle navigation"
              onClick={() => handleClick()}
            >
              <img
                className={styles["nav-bar__menu"]}
                src={menu}
                alt="Menu"
              />
            </button>
          <div className={!isMobile ? styles['no-display'] : pull ? `${styles["nav-bar__dropdown"]} ${styles["top--0"] }`: `${styles["nav-bar__dropdown"]} ${styles["nav-bar__dropdown--shut"]}` }>
            <Dropdown pull={pull} setPull={setPull} display={display} setDisplay={setDisplay} setMainDisplay={setMainDisplay} />
          </div>
    <div  className={  pull && isMobile ? styles["app-pull"] : styles["app"]}>
      <Routes>
        <Route path="/" element={<Root pull={pull} setPull={setPull} display={display} setDisplay={setDisplay} mainDisplay={mainDisplay} setMainDisplay={setMainDisplay}  />}>
          <Route index element= {<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/paiement" element= {<Subscription />} />
          <Route path='/contrat' element={<Contract />} >
            <Route path='/contrat/tb--001' element={<Contract__1 />} />
            <Route path='/contrat/maintenance--001' element={<MonthlyContract />} />
          </Route>
          <Route path='/email-confirmation' element={<Email />} />
          <Route path='/offre' element={<Advertisement />} />
        </Route>
        
      </Routes>
    </div>
    </div>
  )
}

export default App
