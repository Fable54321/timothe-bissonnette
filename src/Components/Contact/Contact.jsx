import styles from './Contact.module.css'
import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [files, setFiles] = useState([])
  const [errors, setErrors] = useState({})

  const handleNameChange = (e) => {
    setName(e.target.value)
    validateName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    validateEmail(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
    validatePhone(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
    validateMessage(e.target.value)
  }

  const handleFilesChange = (e) => {
    setFiles(e.target.files)
    validateFiles(e.target.files)
  }

  const validateName = (name) => {
    const regex = /^[a-zA-ZÀ-ÿ -]{2,45}$/
    if (!regex.test(name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Entrez un nom valide',
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: '',
      }))
    }
  }

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!regex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'L\'adresse email est invalide.',
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }))
    }
  }

  const validatePhone = (phone) => {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/
    if (!regex.test(phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Le numéro de téléphone est invalide.',
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: '',
      }))
    }
  }

  const validateMessage = (message) => {
    const regex = /^[\s\S]{10,500}$/
    if (!regex.test(message)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Le message doit contenir entre 10 et 500 caractères.',
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: '',
      }))
    }
  }

  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(errors).every((error) => error === '')) {
      // Send the form data to the server
      console.log('Form data is valid and will be sent to the server.')
    } else {
      console.log('Form data is invalid.')
    }
  }

  return (
    <section className={styles["contact"]}>
      <form className={styles["contact__form"]} onSubmit={handleSubmit}>
        <div className={styles["contact__form--group"]}>
          <label htmlFor="name">Nom *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Votre nom"
            required
            className={styles["contact__form--input"]}
          />
          {errors.name && <p className={styles["contact__error"]}>{errors.name}</p>}
        </div>

        <div className={styles["contact__form--group"]}>
          <label htmlFor="email">Adresse email *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Votre adresse email"
            required
            className={styles["contact__form--input"]}
          />
          {errors.email && <p className={styles["contact__error"]}>{errors.email}</p>}
        </div>

        <div className={styles["contact__form--group"]}>
          <label htmlFor="phone">Numéro de téléphone </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Votre numéro de téléphone"
            
            className={styles["contact__form--input"]}
          />
          {errors.phone && <p className={styles["contact__error"]}>{errors.phone}</p>}
        </div>

        <div className={styles["contact__form--group"]}>
          <label htmlFor="message">Message *</label>
          <textarea
            className={styles["contact__form--textarea"]}
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Votre message"
            required
          />
          {errors.message && <p className={styles["contact__error"]}>{errors.message}</p>}
        </div>

        <div className={styles["contact__form--group"]}>
          <label className={styles["contact__form--files"]} htmlFor="files">Joindre un fichier </label>
          <input
            type="file"
            id="files"
            multiple
            onChange={handleFilesChange}
            className={styles["contact__form--input"]}
            style={{display: "none"}}
          />
          {errors.files && <p className={styles["contact__error"]}>{errors.files}</p>}
        </div>

        <button type="submit" className={styles["contact__form__submit-button"]}>
          Envoyer
        </button>
      </form>
    </section>
  )
}

export default Contact

