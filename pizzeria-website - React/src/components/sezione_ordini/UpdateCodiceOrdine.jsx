import axios from "axios";
import { useState, useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import { CustomContext } from "../Contexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function UpdateCodiceOrdine() {
  const ammContext = useContext(CustomContext);
  
  const [id, setId] = useState("");
  const [codice, setCodice] = useState("");
 

  

  const history = useHistory();

  useEffect(() => {
        
    // Verifico il ruolo al mounting
    const ruoloContext = ammContext.ruolo;
    

    if (ruoloContext !== "AMMINISTRATORE") {
      // reindirizzo se il ruolo non è amministratore
      history.push('/');
    }
}, [ammContext.ruolo, history]);

  const tornaIndietro = (route) => {
    history.push(route);
  };
  

  const updateCodice = async () => {  
    try {
      const updateResponse = await axios.put("http://localhost:8090/rest/ordine/updateCodice", {id, codice},{ headers: { "Content-Type": "application/json" } });

      
      if (updateResponse?.status === 201) {
        alert("Ordine modificato correttamente")        
      }
    } catch (exception) {
      alert("Si è verificato un errore");
    
  }}

  return (
    <>
      
      <br/>

        <div>
        <button className="button" onClick={() => tornaIndietro("/sezioneOrdini")}>
        <FontAwesomeIcon icon= {faArrowLeft} /></button>
        </div>
        <br/>
       

      <div>
        <label>Id</label>
        <input type="number" name="id" value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        <br/>

        


        <label>Codice ordine </label>
        <input type="text" name="codice" value={codice} onChange={(e) => setCodice(e.target.value)}/>
        <br/>
        <br/>

        

        <button className="button button-green border-radius-50" type="button" onClick={() => updateCodice()}>
          Aggiorna
        </button>
      </div>
    </>
  );
}

export default UpdateCodiceOrdine;