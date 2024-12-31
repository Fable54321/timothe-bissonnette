import styles from './ContactMe.module.css'


const ContactMe = () => {
  return (
    <section className={styles['contact-me__wrapper']}>
      <div className={styles['contact-me__card']}>
        <div className={styles['contact-me__card__inner']}>
          <div className={[styles['contact-me__card__inner__section'], styles['contact-me__card__inner__section--a']].join(' ')}>
          <div className={styles['contact-me__card__inner__title']}>
            <h2 className={styles['contact-me__card__inner__title__text']}>Contact <br/> Me</h2>
            </div>
            <p className={[styles['contact-me__card__inner__contact-info'], styles['font-body']].join(' ')}>
              You can reach me at my email: <br />
              <a href="mailto:timothebissonnette@gmail.com">timothebissonnette@gmail.com</a>
            </p>
            <div className={styles['contact-me__card__decorative-banner']}></div>
          </div>
          <div className={[styles['contact-me__card__inner__section'], styles['contact-me__card__inner__section--b']].join(' ')}>
            <div className={styles['contact-me__card__inner__title']}>
            <h3 className={styles['contact-me__card__inner__title__text']}>My Other <br/> Projects</h3>
            </div>
            <ul className={[styles['contact-me__card__inner__projects-list'], styles['font-body']].join(' ')}>
              <li>
                <a
                  className={styles['contact-me__card__inner__projects-link']}
                  href="https://github.com/Fable54321"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to my github profile"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className={styles['contact-me__card__inner__projects-link']}
                  href="https://app.netlify.com/teams/fable54321/sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to my netlify profile"
                >
                  Netlify
                </a>
              </li>
            </ul>
            <div className={styles['contact-me__card__decorative-banner']}></div>
          </div>
          <div className={[styles['contact-me__card__inner__section'], styles['contact-me__card__inner__section--c']].join(' ')}>
            <div className={styles['contact-me__card__inner__title']}>
            <h3 className={styles['contact-me__card__inner__title__text']}>Some Of My <br/> Skills:</h3>
            </div>
            <ul className={[styles['contact-me__card__inner__skills-list'], styles['font-body']].join(' ')} >
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe

