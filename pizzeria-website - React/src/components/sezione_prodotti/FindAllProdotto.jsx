import axios from "axios"
import { useState, useEffect, useContext } from "react";
import { CustomContext } from "../Contexts";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function FindAllProdotto(){

    const [listaProdotti, setListaProdotti] = useState([])
    const ammContext = useContext(CustomContext);
    const history = useHistory();

    useEffect(() => { 
        findAllProdotto()
    }, []);

    useEffect(() => {
        
      // Verifico il ruolo al mounting
      const ruoloContext = ammContext.ruolo;
      
  
      if (ruoloContext !== "AMMINISTRATORE") {
        // reindirizzo se il ruolo non è amministratore
        history.push('/');
      }
  }, [ammContext.ruolo, history]);

    const findAllProdotto  = async () => {
        try {
            const listResponse = await axios.get("http://localhost:8090/rest/prodotto/findAll", { headers: { "Content-Type": "application/json" } });
            if (listResponse?.status === 200) {  
                setListaProdotti(listResponse?.data)     
              
            }
          } catch (exception) {
            alert("Si è verificato un errore");
          }
    }

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
    <br/>
        <table id= "tabellaSerie">
          <tr> 
            <th >ID </th>             
            <th >NOME </th> 
            <th >NUMERO_PRODOTTO </th>            
            <th >PREZZO</th>
            <th >TIPO_PRODOTTO</th>
            <th >DESCRIZIONE</th>
          </tr>

          {listaProdotti.map((prodotto, index) => (
            <tr key={index}>
              <td >{prodotto.id}</td>
              <td >{prodotto.nome}</td>
              <td >{prodotto.numero}</td>
              <td >{prodotto.prezzo}0€</td>
              <td >{prodotto.tipoProdotto}</td> 
              <td >{prodotto.descrizione}</td> 
                                  
            </tr>

          ))}
        </table>

        
    </div>
    
    </>
)
}

export default FindAllProdotto