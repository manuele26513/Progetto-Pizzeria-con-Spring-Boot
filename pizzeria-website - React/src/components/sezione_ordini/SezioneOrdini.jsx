import { Link } from "react-router-dom"
import { useEffect, useContext } from "react";
import { CustomContext } from "../Contexts";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function SezioneOrdini(){

  const ammContext = useContext(CustomContext);
  const history = useHistory();

  const tornaIndietro = (route) => {
    history.push(route);
  };

  useEffect(() => {
        
    // Verifico il ruolo al mounting
    const ruoloContext = ammContext.ruolo;
    

    if (ruoloContext !== "AMMINISTRATORE") {
      // reindirizzo se il ruolo non è amministratore
      history.push('/');
    }
}, [ammContext.ruolo, history]);

  


    return(
        <>

        <br/>

        <div>
        <button className="button" onClick={() => tornaIndietro("/amm")}>
        <FontAwesomeIcon icon= {faArrowLeft} /></button>
        </div>
        <br/>
        <br/>
        

        

            <div>
            <h6>
              <Link to="/findAllOrdini" className="App-link"> Visualizza la lista completa degli ordini</Link>
            </h6>
            </div>

        <br/>

            <div>
            <h6>
              <Link to="/deleteOrdine" className="App-link"> Elimina un ordine</Link>
            </h6>
            </div>
            <br/>

            <div>
            <h6>
              <Link to="/updateOrdine" className="App-link"> Modifica lo stato di un ordine</Link>
            </h6>
            </div>
            <br/>

            <div>
            <h6>
              <Link to="/updateCodiceOrdine" className="App-link"> Modifica il codice di un ordine</Link>
            </h6>
            </div>
            <br/>

            <div>
            <h6>
              <Link to="/findByIdOrdine" className="App-link"> Cerca un ordine tramite id</Link>
            </h6>
            </div>
            <br/>

        
        </>
    )
}

export default SezioneOrdini