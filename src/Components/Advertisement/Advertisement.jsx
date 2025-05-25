import styles from './Advertisement.module.scss'

const Advertisement = () => {

const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        console.error('Invalid email format');
        alert('Veuillez entrer une adresse email valide.');
        return;
    }

    fetch('https://backend.tb-technologies.ca/offer/interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log('Response from server:', data);
          alert('Merci ! Votre intérêt a bien été enregistré.');
        })
        .catch((err) => {
          alert('Une erreur est survenue.');
          console.error(err);
        });

    console.log('Email submitted:', email);
    // Here you can add your logic to handle the email submission, like sending it to a server
    event.target.reset(); // Reset the form after submission
}


return (


    <section className={styles.Advertisement}>
        <article className={styles.Advertisement__content}>
            <h2 className={styles.Advertisement__title}>Offre à durée limitée</h2>
            <h3 className={styles.Advertisement__subTitle}>L&apos;essentiel web</h3>
            <ul className={styles.Advertisement__list}>
                <li className={styles.Advertisement__item}>
                    Jusqu&apos;à huit pages principales (accueil, à propos, contact,
                    etc...)
                </li>
                <li className={styles.Advertisement__item}>
                    Une proposition 100% personnalisée et personnalisable
                </li>
                <li className={styles.Advertisement__item}>
                    {" "}
                    Programmation côté serveur pour une page contact/soumission incluse
                </li>
                <li className={styles.Advertisement__item}>
                    Que vous sachiez déjà ce que vous voulez pour un processus accéléré,
                    ou que ayez besoin de conseils dans un processus par étape, je
                    m&apos;adapte à vous{" "}
                </li>
                
                <li className={styles.Advertisement__item}>
                    Frais de maintenance et de serveur pour aussi peu que 25$ par mois (aucun frais mensuel avant la livraison du site web)
                </li>
            </ul>

            <p className={styles['Advertisement__price--before']}>4000$</p>
            <p className={styles['Advertisement__price--after']}>2300$ <br/><span>CAD</span></p>
            <form onSubmit={handleSubmit} className={styles.Advertisement__form}>
                <div className={styles.Advertisement__inputGroup}>
                    <h3 className={styles.Advertisement__question}>Ça vous intéresse ?</h3>
                    <div className={styles.Advertisement__inputGroup}>
                        <label className={styles.Advertisement__label} htmlFor="email">Laissez-moi votre courriel<br/><span>(sans engagement)</span></label>
                        <input className={styles.Advertisement__input} type="email" id="email" name="email" />
                    </div>
                </div>
                <button className={styles.Advertisement__button} type="submit">Je suis intéressé</button>
            </form>
        </article>
    </section>
);
}

export default Advertisement
