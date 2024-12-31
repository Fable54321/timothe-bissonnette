import styles from './AboutMe.module.css'
import tim from '../../../assets/Tsim.jpg'

const AboutMe = () => {
  return (
    <section className={styles['about-me__wrapper']}>
      
      <header >
        <h2 className={styles['about-me__title']} aria-label='About Me'>
          <span className={styles['about-me__title--1']}>T</span>
          <span className={styles['about-me__title--2']}>I</span>
          <span className={styles['about-me__title--3']}>M</span>
          <span className={styles['about-me__title--4']}>O</span>
          <span className={styles['about-me__title--5']}>T</span>
          <span className={styles['about-me__title--6']}>H</span>
          <span className={styles['about-me__title--7']}>E</span>
          <br />
          <span className={styles['about-me__title--8']}>B</span>
          <span className={styles['about-me__title--9']}>I</span>
          <span className={styles['about-me__title--10']}>S</span>
          <span className={styles['about-me__title--11']}>S</span>
          <span className={styles['about-me__title--12']}>O</span>
          <span className={styles['about-me__title--13']}>N</span>
          <span className={styles['about-me__title--14']}>N</span>
          <span className={styles['about-me__title--15']}>E</span>
          <span className={styles['about-me__title--16']}>T</span>
          <span className={styles['about-me__title--17']}>T</span>
          <span className={styles['about-me__title--18']}>E</span>
        </h2>
      </header>
      <div className={styles['about-me__cards-wrapper']}>
        <article className={styles['about-me__card--a']}>
          <div className={styles['about-me__card--a__inner']}>
            <img className={styles['about-me__card--a__inner__img']} src={tim} alt="A picture of Timothe Bissonnette"/>
          </div>
        </article>
        <article className={styles['about-me__card--b']}>
          <div className={styles['about-me__card--b__inner']}>
            <div className={styles['about-me__card--b__inner__text__wrapper']}>
              <p className={styles['about-me__card--b__inner__text']}>I&apos;m a young front-end developer who is passionate about always learning more.</p>
            </div>
            <div className={styles['about-me__card--b__inner__text__wrapper']}>
              <p className={styles['about-me__card--b__inner__text']}>I&apos;m currently looking for a job as a web developer and I hope I am what you are looking for.</p>
            </div>
            <button className={styles['about-me__card--b__inner__cta']} aria-label="Contact Timothe Bissonnette">Contact me</button>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutMe
