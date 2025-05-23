import styles from './Dropdown.module.scss'
 import { useEffect, useState } from 'react'
import close from '../../assets/images/close.png'
import PropTypes from 'prop-types'

import ContactMobile from '../ContactMobile/ContactMobile'
import { Link, useLocation } from 'react-router-dom'



const Dropdown = ({ setPull,setDisplay, setMainDisplay }) => {

    const location = useLocation();

    useEffect(() => {
      setMainDisplay(true);
      setPull(false);
      setDisplay(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location])

    const handleClick = () => {

      if(contactOn){
        setContactOn(false);
        setTrigger(false);
      }
      else{
      setMainDisplay(true);

      setTimeout(()=> {
        setDisplay(true)
      },700)

      setPull(false);
    }
    }

    const [trigger, setTrigger] = useState(false);
    const [contactOn, setContactOn] = useState(false);

    const openContact = () => {
      if(!trigger) {
        setTrigger(true);
        setTimeout(() => {
          setContactOn(true);
        },1100)
      }
      else {
        setContactOn(false);
        setTimeout(() => {
          setTrigger(false);
        },1100)
      }
    }

  return (
    <nav  className={styles["dropdown"]}>
      <div className={styles["dropdown--wrapper"]}>
        <button onClick={() => handleClick()} className={styles["dropdown__close--button"]}><img src={close} alt='close' className={styles["dropdown__close"]} /></button>
        <ul className={styles["dropdown__list"]}>
          <li className={`
          ${styles["dropdown__list__item"]} 
          ${styles["dropdown__list__item--1"]} 
          ${trigger ? styles["dropdown__list__item--1--active"] : ''}
          ${contactOn ? styles["item--off"] : ''}`}
          >
           <Link className={styles["dropdown__list__item__link"]} to = "/" >Accueil </Link></li>

          <li className={`
          ${styles["dropdown__list__item"]} 
          ${styles["dropdown__list__item--2"]} 
          ${trigger ? styles["dropdown__list__item--2--active"] : ''}
          ${contactOn ? styles["item--off"] : ''}`}
          ><Link className={styles["dropdown__list__item__link"]} to = "/clients">Clients satisfaits</Link></li>
         
          <li onClick={()=> openContact()} className={`
          ${styles["dropdown__list__item"]} 
          ${styles["dropdown__list__item--4"]} 
          ${trigger ? styles["dropdown__list__item--4--active"] : ''}
          ${contactOn ? styles["item--off"] : ''}`}
          >Contact</li>
        </ul>
        <div style ={{display: contactOn ? 'block' : 'none'}} className={styles["dropdown__contact"]}>
          <ContactMobile />
        </div>
      </div>
    </nav>
  );
}

Dropdown.propTypes ={
  setPull: PropTypes.func,
  scrollY: PropTypes.number,
  display: PropTypes.bool,
  setDisplay: PropTypes.func,
  setMainDisplay: PropTypes.func
}

export default Dropdown
