import styles from "./MonthlyContract.module.css";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

const MonthlyContract = ( ) => {

const { prestataire } = useOutletContext();

    return (
      <section id="maintenance--001" className={styles["monthly-contract"]}>
        <h2 className={styles["monthly-contract__title"]} >Contrat Maintenance--001</h2>
        <p className={styles["monthly-contract__prestataire"]} >Prestataire : {prestataire}</p>
        <h3>Forfait mensuel à 25$CAD</h3>
        <ul className={styles["monthly-contract__list"]}>
        <article>
          <h3>1. Objet du contrat</h3>
          <p className={styles["monthly-contract__list__content"]}>
            Le présent contrat a pour objet la prestation de services de maintenance technique
            et d&apos;hébergement d&apos;un site web préalablement développé.
          </p>
        </article>
  
        <article>
          <h3>2. Services inclus dans le forfait mensuel</h3>
          <ul className={styles["monthly-contract__list__content"]}>
            <li>Hébergement frontend sur Netlify (avec CDN).</li>
            <li>Backend/API via AWS Elastic Beanstalk.</li>
            <li>Relai SMTP avec SendPulse (limite 500 e-mails/mois).</li>
            
            <li>1 mise à jour mineure/mois incluse (texte, image, lien ou bug léger &lt; 30min).</li>
            <li>Surveillance des certificats SSL et erreurs critiques.</li>
            <li>Mises à jour de sécurité serveur.</li>
            
          </ul>
        </article>
  
        <article>
          <h3>3. Services exclus ou facturés en supplément</h3>
          <ul className={styles["monthly-contract__list__content"]}>
            <li>Développement ou ajout de fonctionnalités.</li>
            <li>Refonte graphique ou design.</li>
            <li>Intégration de nouveaux services.</li>
            <li>Débogage complexe (&gt; 30min).</li>
            <li>Migrations ou refontes majeures.</li>
            
          </ul>
        </article>
  
        <article>
          <h3>4. Durée et résiliation</h3>
          <p className={styles["monthly-contract__list__content"]}>
            Contrat mensuel reconductible automatiquement. Résiliable avec un préavis de 14 jours.
            Aucun remboursement pour un mois entamé.
          </p>
        </article>
  
        <article>
          <h3>5. Paiement</h3>
          <p className={styles["monthly-contract__list__content"]}>
            Montant : 25$ CAD/mois, perçu automatiquement via la plateforme Stripe™ .
            Suspension des services en cas de non-paiement après 7 jours.
          </p>
        </article>
  
        <article>
          <h3>6. Responsabilités</h3>
          <p className={styles["monthly-contract__list__content"]}>
            Le prestataire n’est pas responsable des interruptions causées par les fournisseurs
            ou cas de force majeure. Le prestataire peut inclure l&apos;achat du domaine si nécessaire (.ca ou .com), mais dans 
            le cas contraire, le client est responsable de l&apos;achat et la conservation du domaine.
          </p>
        </article>
  
       
        </ul>
      </section>
    );
  };
  
MonthlyContract.propTypes = {
  prestataire: PropTypes.string.isRequired,
};

export default MonthlyContract
