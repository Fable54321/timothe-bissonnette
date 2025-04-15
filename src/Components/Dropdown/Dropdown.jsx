import styles from './Dropdown.module.css'
 import { useState } from 'react'
import close from '../../assets/images/close.png'
import PropTypes from 'prop-types'
import Contact from '../Contact/Contact'

const Dropdown = ({ setPull, scrollY,setDisplay }) => {

    

    const handleClick = () => {

      setTimeout(()=> {
        setDisplay(true)
      },700)

      setPull(false);
    }

    const [trigger, setTrigger] = useState(false);
    const [contactOn, setContactOn] = useState(false);

    const openContact = () => {
      if(!trigger) {
        setTrigger(true);
        setTimeout(() => {
          setContactOn(true);
        },2000)
      }
      else {
        setContactOn(false);
        setTimeout(() => {
          setTrigger(false);
        },2000)
      }
    }

  return (
    <nav style={{ top: `${scrollY + 1}px` }} className={styles["dropdown"]}>
      <div className={styles["dropdown--wrapper"]}>
        <button onClick={() => handleClick()} className={styles["dropdown__close--button"]}><img src={close} alt='close' className={styles["dropdown__close"]} /></button>
        <ul className={styles["dropdown__list"]}>
          <li className={`
          ${styles["dropdown__list__item"]} 
          ${styles["dropdown__list__item--1"]} 
          ${trigger ? styles["dropdown__list__item--1--active"] : ''}
          ${contactOn ? styles["item--off"] : ''}`}
          >
            Accueil</li>

          <li className={`
          ${styles["dropdown__list__item"]} 
          ${styles["dropdown__list__item--2"]} 
          ${trigger ? styles["dropdown__list__item--2--active"] : ''}
          ${contactOn ? styles["item--off"] : ''}`}
          >Services</li>
          <li className={`
          ${styles["dropdown__list__item"]} 
          ${styles["dropdown__list__item--3"]} 
          ${trigger ? styles["dropdown__list__item--3--active"] : ''}
          ${contactOn ? styles["item--off"] : ''}`}
          >Tarifs</li>
          <li onClick={()=> openContact()} className={`
          ${styles["dropdown__list__item"]} 
          ${styles["dropdown__list__item--4"]} 
          ${trigger ? styles["dropdown__list__item--4--active"] : ''}
          ${contactOn ? styles["item--off"] : ''}`}
          >Contact</li>
        </ul>
        <div style ={{display: contactOn ? 'block' : 'none'}} className={styles["dropdown__contact"]}>
          <Contact />
        </div>
      </div>
    </nav>
  );
}

Dropdown.propTypes ={
  setPull: PropTypes.func,
  scrollY: PropTypes.number,
  display: PropTypes.bool,
  setDisplay: PropTypes.func
}

export default Dropdown
