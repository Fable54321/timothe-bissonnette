import styles from './Confirmation.module.css'
import PropTypes from 'prop-types'

const Confirmation = ( { setConfirmed } ) => {
  return (
    <aside className={styles['confirmation']}>
      <button className={styles['confirmation__close']} onClick={() => setConfirmed(false)}>X</button>  
      <h3 className={styles['confirmation__title']}>Le courriel a bien été envoyé</h3>

    </aside>
  )
}

Confirmation.propTypes = {
 setConfirmed : PropTypes.func,
}

export default Confirmation
