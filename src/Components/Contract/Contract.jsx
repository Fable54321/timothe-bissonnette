import Signature from "../Signature/Signature"
import { useState, useEffect } from "react"
import styles from "./Contract.module.scss"

import { Outlet, useLocation } from "react-router-dom";


const Contract = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [contract, setContract] = useState('');
    const [contractHtml, setContractHtml] = useState('');

    const location = useLocation();
  const pathName = location.pathname;

 

  

  useEffect(() => {
    let contractElement;

    switch (pathName) {
      case '/contrat/tb--001':
        contractElement = document.getElementById('contrat-tb--001');
        break;
      case '/contrat/maintenance--001':
        contractElement = document.getElementById('maintenance--001');
        break;
      default:
        console.log('No contract element found for the given path');
        return;
    }

    if (contractElement) {
      setContractHtml(contractElement.innerHTML);
    }
  }, [pathName]);


  console.log(contractHtml);

    const generateContractHash = async () => {
      
       

      
    
      
      // Encode the HTML string into a buffer
      const encoder = new TextEncoder();
      const data = encoder.encode(contractHtml);
      
      // Hash the buffer using SHA-256
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);  
      const hashArray = Array.from(new Uint8Array(hashBuffer));  // Convert buffer to byte array
      const contractHash = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');  // Convert byte array to hex string
    
      return contractHash;
    };
   

    const prestataire = "Timothé Bissonnette, Tb Technologies";


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

          

          if(!contractHtml) {
            alert('Contenu du contrat manquant');
            return;
          }


        const contractHash = await generateContractHash();

        const res = await fetch('https://single-instance.tb-technologies.ca/signature/save-signature', {
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
            contractHash: contractHash,
            contractHtml: contractHtml,
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
        <>
        
        <section className={styles["contract"]}>
        <Outlet context={{ prestataire }} />
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
                    {pathName === '/contrat/tb--001' && <option value="contrat-tb--001">contrat-tb--001</option>}
                    {pathName === '/contrat/maintenance--001' && <option value="maintenance--001">maintenance--001</option>}
                    
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
        </>
      );
    };
    

export default Contract
