import { useOutletContext } from "react-router-dom";
import styles from "./Contract--1.module.scss";

const Contract__1 = () => {

  const { prestataire } = useOutletContext();

  return (
    <section id="contrat-tb--001" className={styles["contract__1"]}>
      <h2 className={styles["contract__1__title"]}>contrat-tb--001</h2>
      <p className={styles["contract__1__prestataire"]}>Prestataire : {prestataire}</p>
      <ul className={styles["contract__1__list"]}>
        <li className={styles["contract__1__list__item"]}>
          <h3>
            <span>1. </span>Objet du contrat
          </h3>
          <p className={styles["contract__1__list__item__content"]}>
            Le présent contrat a pour objet la conception, le développement et
            la livraison d&apos;un site web pour le Client par le Prestataire,
            selon les modalités suivantes.
          </p>
        </li>
        <li className={styles["contract__1__list__item"]}>
          <h3>
            <span>2. </span>Description des prestations incluses{" "}
          </h3>
          <ul className={styles["contract__1__list__item__content"]}>
            <li>
              <strong>En-tête et pied de page personnalisés :</strong>
              <ul>
                <li>
                  <strong>En-tête :</strong> logo/nom de l&apos;entreprise et
                  barre de navigation principale.
                </li>
                <li>
                  <strong>Pied de page :</strong> nom de l&apos;entreprise,
                  liens de navigation, icônes de réseaux sociaux.
                </li>
              </ul>
            </li>
            <li>
              <strong>Contenu du site :</strong>
              <ul>
                <li>
                  Jusqu&apos;à 6 pages incluses (exemples : Accueil, À propos,
                  Contact, Produits, Services).
                </li>
                <li>
                  Chaque page comprend conception graphique, intégration du
                  contenu et programmation.
                </li>
              </ul>
            </li>
            <li>
              <strong>Page communicante avec serveur :</strong>
              <ul>
                <li>
                  Une (1) page (ex : formulaire de contact) interagissant avec
                  un serveur est incluse.
                </li>
                <li>
                  <strong>Frais additionnels :</strong> pour toute page
                  communicante supplémentaire, des frais fixes ainsi qu&apos;une
                  majoration du coût d&apos;hébergement mensuel seront
                  appliqués.
                </li>
              </ul>
            </li>
            <li>
              <strong>Conception complète :</strong>
              <ul>
                <li>
                  Le Prestataire est responsable de l&apos;ensemble de la
                  conception, programmation et design.
                </li>
                <li>Aucun frais additionnel pour ces services.</li>
              </ul>
            </li>
            <li>
              <strong>Page d&apos;accueil :</strong>
              <ul>
                <li>Comprend jusqu&apos;à 8 sections.</li>
                <li>
                  Une section peut contenir un titre, jusqu&apos;à six (6)
                  images ou vidéos, et un texte descriptif.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={styles["contract__1__list__item"]}>
          <h3>
            <span>3. </span>Prix et modalités de paiement
          </h3>
          <ul className={styles["contract__1__list__item__content"]}>
            <li>
              <strong>Prix fixe total :</strong> 3000 $ CAD (taxes en sus si
              applicables).
            </li>
            <li>
              <strong>Dépôt initial :</strong> 900 $ CAD, exigible à la
              signature du contrat avant le début des travaux.
            </li>
            <li>
              <strong>Solde restant :</strong> payable à la livraison du site et
              avant la mise en ligne finale.
            </li>
          </ul>
        </li>
        <li className={styles["contract__1__list__item"]}>
          <h3>
            <span>4. </span>Délais de livraison
          </h3>
          <p className={styles["contract__1__list__item__content"]}>
            Le Prestataire s&apos;engage à livrer le site dans un délai
            raisonnable, déterminé lors de la planification initiale avec le
            Client. Le délai est sujet à modification selon la réactivité du
            Client pour la transmission du contenu et les validations
            nécessaires.
          </p>
        </li>
        <li className={styles["contract__1__list__item"]}>
          <h3>
            <span>5. </span>Limitations et exclusions
          </h3>
          <ul>
            <li>
              <p className={styles["contract__1__list__item__content"]}>
                <strong>Les prestations ne comprennent pas :</strong>{" "}
              </p>
              <ul className={styles["contract__1__list__item__content"]}>
                <li>
                  La rédaction complète du contenu textuel du site (texte fourni
                  par le Client).
                </li>
                <li>
                  L&apos;achat d&apos;images/vidéos payantes (banques
                  d&apos;images libres de droit incluses uniquement).
                </li>
              </ul>
            </li>
            <li className={styles["contract__1__list__item"]}>
              <h3>6. Communication</h3>
              <p className={styles["contract__1__list__item__content"]}>
                Toutes les communications relatives aux modifications ou aux
                demandes de changement du site web doivent être transmises par
                courriel. En cas de conversation téléphonique, le Prestataire
                s&apos;engage à envoyer un courriel récapitulatif des
                changements demandés. Le Client devra répondre à ce courriel
                pour confirmer les modifications. Aucune modification ne sera
                considérée comme acceptée ou prise en charge sans une
                confirmation écrite par courriel de la part du Client. Cette
                procédure vise à garantir la clarté et la traçabilité des
                demandes.{" "}
              </p>
            </li>
          </ul>
        </li>
        <li className={styles["contract__1__list__item"]}>
          <h3>
            <span>7. </span>Résiliation
          </h3>
          <p className={styles["contract__1__list__item__content"]}>
            En cas d&apos;annulation du projet par le Client après signature du
            contrat, le dépôt initial de 900 $ CAD est non remboursable. Le
            Prestataire conserve le droit de facturer les travaux réalisés au
            prorata.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Contract__1;
