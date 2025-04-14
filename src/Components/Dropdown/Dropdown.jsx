import styles from './Dropdown.module.css'
import { useState, useEffect } from 'react'
import close from '../../assets/images/close.png'
import PropTypes from 'prop-types'

const Dropdown = ({ setPull }) => {

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

    const handleClick = () => {
      setPull(false);
    }

  return (
    <nav style={{ top: `${scrollY + 1}px` }} className={styles["dropdown"]}>
      <div className={styles["dropdown--wrapper"]}>
        <button onClick={() => handleClick()} className={styles["dropdown__close--button"]}><img src={close} alt='close' className={styles["dropdown__close"]} /></button>
      </div>
    </nav>
  );
}

Dropdown.propTypes ={
  setPull: PropTypes.func
}

export default Dropdown
