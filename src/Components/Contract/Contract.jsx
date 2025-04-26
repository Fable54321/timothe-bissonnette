import Signature from "../Signature/Signature"
import { useState } from "react"
import styles from "./Contract.module.css"
import Contract__1 from "./Contract--1/Contract--1";

const Contract = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [contract, setContract] = useState('');


   

    const handleSignatureSave = async (signatureDataUrl) => {


      
       
        if (!name.trim()) {
            alert('Veuillez entrer votre nom.');
            return;
          }
        
          if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
            alert('Veuillez entrer un courriel valide.');
            return;
          }

          if (!contract) {
            alert('Veuillez sélectionner le contrat.');
            return;
          }
        
          if (!agreed) {
            alert('Vous devez consentir à la signature digitale.');
            return;
          }
        
          if (!signatureDataUrl) {
            alert('Signature invalide. Veuillez signer.');
            return;
          }

        const res = await fetch('https://backend.tb-technologies.ca/signature/save-signature', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            signature: signatureDataUrl,
            fullName: name, // You should get this from a form
            email: email,  // Also from a form
            agreed: agreed,
            contract: contract,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
          }),
        });
    
        if (res.ok) {
          alert('Signature saved!');
        } else {
          alert('Failed to save signature.');
        }
      };
    
      return (
        <section className={styles["contract"]}>
            <Contract__1 />
          <h2 className={styles["contract__title"]}>Signature du contrat</h2>
          
          <form className={styles["contract__form"]}>
            <label>
              Prénom et Nom:
              <input className={styles["contract__form__input"]} type="text" name="fullName" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Courriel:
              <input className={styles["contract__form__input"]} type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                La sélection suivante confirme que vous adhérez bien au contrat montré ci-dessus:
                <select name="contract" onChange={(e) => setContract(e.target.value)}>
                    <option value="">Sélectionnez un contrat</option>
                    <option value="contrat-tb--001">contrat-tb--001</option>
                    
                </select>
            </label>
            <label className={styles["contract__form__checkbox"]} >
            
            Je {name}, consens à la signature digitale du contrat suivant : {contract} .
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
            </label>
          </form>
          <p className={styles["contract__date"]}>signature en date du {new Date().toLocaleDateString()}</p>
          <Signature onSave={handleSignatureSave} />
          
        </section>
      );
    };
    

export default Contract
