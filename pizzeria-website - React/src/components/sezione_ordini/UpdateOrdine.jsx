
import axios from "axios";
import { useState, useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import { CustomContext } from "../Contexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function UpdateOrdine() {
  const ammContext = useContext(CustomContext);
  
  const [id, setId] = useState("");
  const [statoOrdine, setStatoOrdine] = useState("");
 

  

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
  

  const updateOrdine = async () => {  
    try {
      const updateResponse = await axios.put("http://localhost:8090/rest/ordine/updateStatoOrdine", {id, statoOrdine},{ headers: { "Content-Type": "application/json" } });

      
      if (updateResponse?.status === 200) {
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

        


        <label>Stato ordine </label>
        <select value={statoOrdine} onChange={(e) => setStatoOrdine(e.target.value)}>
          <option></option>
          <option value="IN_LAVORAZIONE">In lavorazione</option>
          <option value="IN_CONSEGNA">In consegna</option>
          <option value="IN_ATTESA">In attesa</option>
          <option value="STORICIZZATO">Storicizzato</option>
        </select>
        <br/>
        <br/>

        

        <button className="button button-green border-radius-50" type="button" onClick={() => updateOrdine()}>
          Aggiorna
        </button>
      </div>
    </>
  );
}

export default UpdateOrdine;

