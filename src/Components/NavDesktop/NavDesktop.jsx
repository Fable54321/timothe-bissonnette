import styles from './NavDesktop.module.css'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import { useEffect, useState } from 'react'
const NavDesktop = () => {

  const [contactDesktop, setContactDesktop] = useState(false);
  useEffect(() => {console.log(contactDesktop)},[contactDesktop])



  const handleClick = () => {
    
    setContactDesktop(!contactDesktop);
  }

  return (

    
   <>

    <nav className={styles['nav-desktop']}>
      <ul className={styles["nav-desktop__link-list"]}>
        <Contact contactDesktop={contactDesktop} setContactDesktop={setContactDesktop} />
        <li><Link className={styles["nav-desktop__link"]} to = "/home">Accueil</Link></li>
        <button onClick={() => handleClick()} ><li><Link className={`${styles["nav-desktop__link"]} ${contactDesktop && styles["nav-desktop__link--active"]}`} to = "/">Contactez-moi</Link></li></button>
        <li ><Link  className={styles["nav-desktop__link"]} to = "">Clients satisfaits</Link></li>
        
      </ul>
    </nav>


</>
  )
}

export default NavDesktop
