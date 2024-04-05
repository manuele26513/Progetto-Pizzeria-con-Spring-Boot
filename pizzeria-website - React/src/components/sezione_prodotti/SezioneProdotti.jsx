import { Link } from "react-router-dom"
import { useEffect, useContext } from "react";
import { CustomContext } from "../Contexts";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function SezioneProdotti(){
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
              <Link to="/insertProdotto" className="App-link"> Inserisci un nuovo prodotto</Link>
            </h6>
            </div>

        <br/>

            <div>
            <h6>
              <Link to="/findAllProdotto" className="App-link"> Visualizza tutti i prodotti</Link>
            </h6>
            </div>

            <br/>

            <div>
            <h6>
              <Link to="/deleteProdotto" className="App-link"> Elimina un prodotto</Link>
            </h6>
            </div>
            <br/>

            <div>
            <h6>
              <Link to="/updateProdotto" className="App-link"> Modifica un prodotto</Link>
            </h6>
            </div>
            <br/>

            <div>
            <h6>
              <Link to="/findByIdProdotto" className="App-link"> Cerca un prodotto tramite id</Link>
            </h6>
            </div>
            <br/>
            

            
        
        </>
        
    )
}

export default SezioneProdotti