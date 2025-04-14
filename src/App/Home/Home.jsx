import PropTypes from "prop-types"
import NavBar from "./NavBar/NavBar"
import styles from './Home.module.css'
import cloud from '../../assets/images/cloud.png'
import vscode from '../../assets/images/vscode-alt.png'
import lowPrice from '../../assets/images/low-price.png'


const Home = ({ pull, setPull }) => {

  

  return (
    <>
      <NavBar pull={pull} setPull={setPull} />
      <main className={styles["home"]}>
      <div className={styles["home__section--wrapper"]}>
           <h2 className={styles["home__section__title"]}>Service à la hauteur de vos besoins</h2>
           <img className={styles["home__section__img"]} src={vscode} alt="vs code" />
           <p className={styles["home__section__description"]}>En tant que développeur web passioné, je propose un service entièrement sur mesure. Que vous ayez une idée précise ou simplement une vision à affiner, je vous accompagne à chaque étape pour donner vie à un projet qui vous ressemble. Mon objectif : créer des solutions adaptées, efficaces et parfaitement alignées avec vos besoins.</p>
          </div>
        
          <div className={styles["home__section--wrapper"]}>
           <h2 className={styles["home__section__title"]}>Infrastructure Cloud Fiable avec AWS</h2>
           <img className={styles["home__section__img"]} src={cloud} alt="Cloud" />
           <p className={styles["home__section__description"]}>J’utilise Amazon Web Services (AWS), notamment Elastic Beanstalk pour le déploiement automatisé et la gestion de sites web performants, 
            ainsi que Simple Email Service (SES) pour l’envoi sécurisé de courriels via un serveur et un relais SMTP personnalisés. 
            Cette approche garantit une infrastructure robuste, extensible et conforme aux bonnes pratiques de livraison d’e-mails.</p>
          </div>

          <div className={styles["home__section--wrapper"]}>
           <h2 className={styles["home__section__title"]}>Oubliez les surplus incompréhensibles</h2>
           <img className={styles["home__section__img"]} src={lowPrice} alt="" />
           <p className={styles["home__section__description"]}>Je propose des tarifs compétitifs, transparents et adaptés à chaque projet. Vous payez uniquement pour ce dont vous avez réellement besoin, sans frais cachés ni options inutiles. Mon objectif : vous offrir un service de qualité au juste prix.</p>
          </div>
          
        
      </main>
    </>
  );
 
}
Home.propTypes = {
  pull: PropTypes.bool.isRequired,
  setPull: PropTypes.func.isRequired,
}

export default Home
