import axios from "axios"
import { useContext, useState, useEffect } from "react";
import { CustomContext } from "../Contexts";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function DeleteProdotto(){

    const ammContext = useContext(CustomContext);
    const history = useHistory();
    const [id, setId] = useState("");

  useEffect(() => {
        
    // Verifico il ruolo al mounting
    const ruoloContext = ammContext.ruolo;
    

    if (ruoloContext !== "AMMINISTRATORE") {
      // reindirizzo se il ruolo non è amministratore
      history.push('/');
    }
}, [ammContext.ruolo, history]);

const deleteProdotto = async () => {  
    try {
      const deleteResponse = await axios.delete(`http://localhost:8090/rest/prodotto/delete/${id}`,{ headers: { "Content-Type": "application/json" } });

      
      if (deleteResponse?.status === 200) {
        alert("Prodotto eliminato correttamente")        
      }
    } catch (exception) {
      alert("Si è verificato un errore");
    
  }}

  const tornaIndietro = (route) => {
    history.push(route);
  };




return(

<>

<br/>

<div>
  <button className="button" onClick={() => tornaIndietro("/sezioneProdotti")}>
  <FontAwesomeIcon icon= {faArrowLeft} /></button>
</div>
  <br/>
        
        <div>
        <label>ID PRODOTTO</label>
        <input type="number" name="id" value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        <br />
        <button className="button button-green border-radius-50" type="button" onClick={() => deleteProdotto()}>
          Elimina
        </button>
        </div>


</>

)
}

export default DeleteProdotto