import ConfirmationMobile from '../ConfirmationMobile/ConfirmationMobile'
import styles from './ContactMobile.module.css'
import { useState } from 'react'


const ContactMobile = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [files, setFiles] = useState([])
  const [errors, setErrors] = useState({})
 const [confirmed, setConfirmed] = useState(false);
  
 


 


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
    
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  
    
  };

  

  const validateName = (name) => {
    const regex = /^[a-zA-ZÀ-ÿ -]{2,45}$/
    if (name === '' || !regex.test(name)) {
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
    if (email === "" || !regex.test(email)) {
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
    const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/
    if ( !regex.test(phone)) {
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
    if (message.length < 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Le message doit contenir au moins 10 caractères.',
      }))
    } else if (message.length > 500) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Le message ne doit pas contenir plus de 500 caractères.',
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
    validateEmail(email)
    validateName(name)
    validatePhone(phone)
    validateMessage(message)

    if (errors.name || errors.email || errors.phone || errors.message || name === '' || email === '' || phone === '' || message === '') {
      return
    }
    else{
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('phone', phone)
      formData.append('message', message)
      if (files) {
        Array.from(files).forEach((file) => {
          formData.append("attachment", file);
        });
      }

      fetch('https://backend.tb-technologies.ca/send-email', {
        method: 'POST',
        body: formData
      })
      .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFiles([]);
      setErrors({});
      setConfirmed(true);
    }
  }

  return (
    <section
    
     className={`
      ${styles["contact"]}
     
    `}>
      <form className={styles["contact__form"]} onSubmit={handleSubmit}>
         <div style = {{display : confirmed ? "block" : "none"}}>
              <ConfirmationMobile setConfirmed={setConfirmed} />
          </div>
        <div className={styles["contact__form--group"]}>
          <label htmlFor="name">Nom *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Votre nom"
            
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
            
          />
          {errors.message && <p className={styles["contact__error"]}>{errors.message}</p>}
        </div>

        <div className={styles["contact__form--group"]}>
          <label htmlFor="files" className={styles["contact__form--files"]}> Joindre un fichier </label>
          <input
            type="file"
            id="files"
            accept="image/*"
            multiple
            onChange={handleFilesChange}
            className={styles["contact__form--input"]}
            style={{display: "none"}}
          />
           
          {errors.files && <p className={styles["contact__error"]}>{errors.files}</p>}
        </div>
        
          <p style={{display: "block"}} >Fichiers joindre : {files.length}</p>
        
        <button type="submit" className={styles["contact__form__submit-button"]}>
          Envoyer
        </button>
      </form>
    </section>
  )
}
  
  



export default ContactMobile
