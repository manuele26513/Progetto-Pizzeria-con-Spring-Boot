import { Link } from "react-router-dom"
import { useEffect, useContext } from "react";
import { CustomContext } from "../Contexts";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function SezioneClienti(){
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
              <Link to="/findAllClientiOrdini" className="App-link"> Visualizza tutti i clienti con gli ordini effettuati</Link>
            </h6>
            </div>

            <br/>

            <div>
            <h6>
              <Link to="/deleteCliente" className="App-link"> Elimina un cliente</Link>
            </h6>
            </div>
            <br/>

            <div>
            <h6>
              <Link to="/findByIdClienteOrdine" className="App-link"> Cerca un cliente con ordine associato tramite id</Link>
            </h6>
            </div>
            <br/>

            
        
        </>
    )
}

export default SezioneClienti