import { useRef, useState, useEffect } from "react"
import styles from './Signature.module.css'
import SignatureCanvas from "react-signature-canvas"
import PropTypes from "prop-types";


const Signature = ({ onSave }) => {

    const sigCanvas = useRef();
    
    const [canvasWidth, setCanvasWidth] = useState(window.innerWidth * 0.9);


    useEffect(() => {
      const handleResize = () => {
        setCanvasWidth(window.innerWidth * 0.9);
      };
  
      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize); // for phones
  
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientationchange", handleResize);
      };
    }, []);

    const handleClear = () => {
      sigCanvas.current.clear();
    };
  
    

    const handleSave = () => {
      if (sigCanvas.current.isEmpty()) {
        alert("Please sign before saving!");
        return;
      }
    
      
      const dataURL = sigCanvas.current.toDataURL('image/png');
      console.log(dataURL);
        onSave(dataURL);
     
      
      
    };
  
    return (


      <div className={styles.signatureContainer}>
      
      <p>Sur appareil mobile, il est grandement préférable de tourner votre appareil en mode paysage</p>
     
        
     
        <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <h3>Signez ci-dessous</h3>
          <SignatureCanvas
            ref={sigCanvas}
            penColor="black"
            canvasProps={{
              width: canvasWidth,
              height: 250,
              className: styles.signatureCanvas
            }}
          />
          <div className={styles.signatureContainer__buttons}>
            <button onClick={handleClear}>Effacer</button>
           
            <button onClick={handleSave}>Soumettre</button>
          </div>
        </div>
      </div>
       
      </div>
    );
  };

  Signature.propTypes = {
    onSave: PropTypes.func.isRequired,
  };

export default Signature
