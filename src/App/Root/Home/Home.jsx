
import cloud from '../../../assets/images/cloud.png'
import vscode from "../../../assets/images/vscode-alt.png";
import lowPrice from '../../../assets/images/low-price.png'
import responsive from '../../../assets/images/responsive.png'
import styles from '../Home/Home.module.scss'

const Home = () => {
  return (
   <section className={styles["home"]}>
         <div className={`${styles["home__section--wrapper"]} ${styles["home__section--wrapper--1"]}`}>
              <h2 className={styles["home__section__title"]}>Service à la hauteur de vos besoins</h2>
              <img className={styles["home__section__img"]} src={vscode} alt="vs code" />
              <p className={styles["home__section__description"]}>En tant que développeur web passioné, je propose un service entièrement sur mesure. Que vous ayez une idée précise ou simplement une vision à affiner, je vous accompagne à chaque étape pour donner vie à un projet qui vous ressemble. Mon objectif : créer des solutions adaptées, efficaces et parfaitement alignées avec vos besoins.</p>
             </div>
           
             <div className={`${styles["home__section--wrapper"]} ${styles["home__section--wrapper--2"]}`}>
              <h2 className={styles["home__section__title"]}>Infrastructure Cloud Fiable avec AWS</h2>
              <img className={styles["home__section__img"]} src={cloud} alt="Cloud" />
              <p className={styles["home__section__description"]}>J’utilise Amazon Web Services (AWS), notamment Elastic Beanstalk pour le déploiement automatisé et la gestion de sites web performants, 
               ainsi que Simple Email Service (SES) pour l’envoi sécurisé de courriels via un serveur et un relais SMTP personnalisés. 
               Cette approche garantit une infrastructure robuste, extensible et conforme aux bonnes pratiques de livraison d’e-mails.</p>
             </div>
   
             <div className={`${styles["home__section--wrapper"]} ${styles["home__section--wrapper--3"]}`}>
              <h2 className={styles["home__section__title"]}>Oubliez les surplus incompréhensibles</h2>
              <img className={styles["home__section__img"]} src={lowPrice} alt="" />
              <p className={styles["home__section__description"]}>Je propose des tarifs compétitifs, transparents et adaptés à chaque projet. Vous payez uniquement pour ce dont vous avez réellement besoin, sans frais cachés ni options inutiles. Mon objectif : vous offrir un service de qualité au juste prix. Forfait à prix fixe disponible avec frais mensuels moindre</p>
             </div>
   
             <div className={`${styles["home__section--wrapper"]} ${styles["home__section--wrapper--4"]}`}>
              <h2 className={styles["home__section__title"]}>Un design<br/> qui s’adapte </h2>
              <img className={styles["home__section__img"]} src={responsive} alt="responsive" />
              <p className={styles["home__section__description"]}>Plus de la moiti&eacute; du trafic web provient des appareils mobiles. C&rsquo;est pourquoi je con&ccedil;ois chaque site avec une approche &laquo;&nbsp;mobile-first&nbsp;&raquo; et une conception adaptative.
   
   Concrètement, cela signifie que votre site sera aussi fluide et esthétique sur un smartphone que sur un ordinateur de bureau. 
   
    </p>
             </div>
             
           
         </section>
  )
}

export default Home
