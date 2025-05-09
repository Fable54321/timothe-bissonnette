import styles from './NavDesktop.module.scss'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import { useState, useEffect } from 'react'
const NavDesktop = () => {

  const [contactDesktop, setContactDesktop] = useState(false);
  const [linkWidth, setLinkWidth] = useState(0);

  useEffect(() => {
    const link = document.getElementById('contact');
    setLinkWidth(link.offsetWidth);
    console.log(linkWidth);
  },[linkWidth]);



  const handleClick = () => {
    
    setContactDesktop(!contactDesktop);
  }

  return (

    
   <>

    <nav className={styles['nav-desktop']}>
      <ul className={styles["nav-desktop__link-list"]}>
        <Contact contactDesktop={contactDesktop} setContactDesktop={setContactDesktop} />
        <li><Link className={styles["nav-desktop__link"]} to = "/">Accueil</Link></li>
        <button onClick={() => handleClick()} ><li id='contact' style={{minWidth: contactDesktop ? `${linkWidth}px` : "auto"}} className={`${styles["nav-desktop__link"]} ${contactDesktop && styles["nav-desktop__link--active"]}`}>{contactDesktop ? "Fermer" : "Contactez-moi"}</li></button>
        <li ><Link  className={styles["nav-desktop__link"]} to = "/clients">Clients satisfaits</Link></li>
        
      </ul>
    </nav>


</>
  )
}

export default NavDesktop
