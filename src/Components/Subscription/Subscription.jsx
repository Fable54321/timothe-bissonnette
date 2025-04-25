import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import styles from './Subscription.module.css'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

console.log(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Subscription = () => {

    const handleCheckout = async () => {
        const stripe = await stripePromise;


        try {
            const response = await axios.post('https://backend.tb-technologies.ca/stripe/create-checkout-session');
            const sessionId = response.data.id;


            const result = await stripe.redirectToCheckout({
                sessionId: sessionId,
            });

            if (result.error) {
                console.error(result.error.message);
            }
        } catch (error) {
            console.error('Error during chekout session creation',error); 
        }
        
    }



  return (
    <section className={styles['subscription']} aria-labelledby="Plan de base">
      <h2 id="détails du plan" className="sr-only">Détails du plan </h2>
      <h2 className={styles['subscription__title']}>Plan de base</h2>
      <ul className={styles['subscription__list']}>
        <li className={styles['subscription__list__item']}>Hébergement du cloud sur AWS</li>
        <li className={styles['subscription__list__item']}>Envoi de courriels via un relai smtp</li>
        <li className={styles['subscription__list__item']}>Achat du domaine si nécessaire</li>
        <li className={styles['subscription__list__item']}>hébergement sur Netlify</li>
        
      </ul>
      <p className={styles['subscription__price']}>25$/mois</p>
      <button className={styles['subscription__button']} onClick={handleCheckout}>Souscrire</button>
    </section>
  )
}

export default Subscription
