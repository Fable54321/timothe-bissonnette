import { useRef } from "react"
import styles from './Signature.module.css'
import SignatureCanvas from "react-signature-canvas"
import PropTypes from "prop-types";


const Signature = ({ onSave }) => {

    const sigCanvas = useRef();

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
        <SignatureCanvas 
          ref={sigCanvas}
          penColor="black"
          canvasProps={{ width: Math.min(window.innerWidth*0.97, 500), height: 160, className: styles.signatureCanvas }}
        />
        <div className={styles['signatureContainer__buttons']}>
          <button onClick={handleClear}>Effacer</button>
          <button onClick={handleSave}>Soumettre la signature</button>
        </div>
      </div>
    );
  };

  Signature.propTypes = {
    onSave: PropTypes.func.isRequired,
  };

export default Signature
