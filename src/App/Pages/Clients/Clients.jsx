import styles from './Clients.module.css'
import tim from '../../../assets/images/tim--mod.png'
import timD from '../../../assets/images/tim--mod.png'
import jb from '../../../assets/images/jb-concept--1.png'
import alpine from '../../../assets/images/alpine.png'
import { useMediaQuery } from 'react-responsive'
import Animation from '../../../Components/Animation/Animation'




const Clients = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 62.5em)' });



  

 

  return (
    <section className={styles['clients']}>
      

      <article className={`${styles['clients__banner']} ${styles['clients__banner--1']}`}>
        <h2 className={styles['clients__banner__title']}>Joignez-vous à d&apos;autres !</h2>
        
        <Animation style={{display: 'none'}}  />
        
      
        <img id='tim' className={styles['clients__banner__img']} src={isMobile ? tim : timD} alt="" />
        
         </article>
         
         <div className={styles['clients__banner--container']}>
         <article className={`${styles['clients__banner']} ${styles['clients__banner--2']}`}>
         <a href="https://jb-concept.ca/" target="_blank" rel="noreferrer" >   
        <h2 className={`${styles['clients__banner--2__title']} `}>Jb Concept inc.</h2>
        </a>
        <div className={styles['clients__banner--2__img--wrapper']}>
          <img className={`${styles['clients__banner--2__img']} `} src={jb} alt="" />
        </div>
        
         </article>
         <article className={`${styles['clients__banner']} ${styles['clients__banner--2']}`}>
         <a href="https://alpine-aluminium.netlify.app/" target="_blank" rel="noreferrer" >   
        <h2 className={`${styles['clients__banner--2__title']} `}>Alpine aluminium inc.</h2>
        </a>
        <div className={styles['clients__banner--2__img--wrapper']}>
          <img className={`${styles['clients__banner--2__img']} `} src={alpine} alt="" />
        </div>
        
         </article>
         </div>
    </section>
  )
}

export default Clients
