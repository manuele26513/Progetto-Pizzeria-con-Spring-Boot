
import { useContext, useEffect } from "react";
import { CustomContext } from "../Contexts";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function FindByIdOrdine(){

    const ammContext = useContext(CustomContext);
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

const byId = (route) => {
  history.push(route);
};


return(

<>

<br/>

<div>
  <button className="button" onClick={() => tornaIndietro("/sezioneOrdini")}>
  <FontAwesomeIcon icon= {faArrowLeft} /></button>
</div>
  <br/>
        
        <div>
        <label>ID ORDINE</label>
        <input type="number" name="id" value={ammContext.id} onChange={(e) => ammContext.setId(Number(e.target.value))} />
        <br />
        <br />
        <button className="button button-green border-radius-50" type="button" onClick={() => byId("/resultFindByIdOrdine")}>
          Cerca
        </button>
        </div>


</>

)
}

export default FindByIdOrdine