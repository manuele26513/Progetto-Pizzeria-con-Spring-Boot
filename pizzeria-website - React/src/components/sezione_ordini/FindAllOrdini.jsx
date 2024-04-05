import axios from "axios"
import { useState, useEffect, useContext} from "react";
import { CustomContext } from "../Contexts";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function FindAllOrdini(){

    const [listaOrdini, setListaOrdini] = useState([])
    const ammContext = useContext(CustomContext);
    const history = useHistory();

    const tornaIndietro = (route) => {
      history.push(route);
    };

    useEffect(() => { 
        findAllOrdini()
    }, []);

    useEffect(() => {
        
      // Verifico il ruolo al mounting
      const ruoloContext = ammContext.ruolo;
      
  
      if (ruoloContext !== "AMMINISTRATORE") {
        // reindirizzo se il ruolo non è amministratore
        history.push('/');
      }
  }, [ammContext.ruolo, history]);

    const findAllOrdini  = async () => {
        try {
            const listResponse = await axios.get("http://localhost:8090/rest/ordine/findAll", { headers: { "Content-Type": "application/json" } });
            if (listResponse?.status === 200) {  
                setListaOrdini(listResponse?.data)     
              
            }
          } catch (exception) {
            alert("Si è verificato un errore");
          }
    }


return(

    <>

<br/>

<div>
<button className="button" onClick={() => tornaIndietro("/sezioneOrdini")}>
<FontAwesomeIcon icon= {faArrowLeft} /></button>
</div>
<br/>


<div>
    <br/>
        <table id= "tabellaSerie">
          <tr>            
            <th >ID </th>           
            <th >CODICE</th>
            <th >STATO ORDINE</th>
            <th >TIPO CONSEGNA</th>
            <th >TIPO PAGAMENTO</th>
          </tr>

          {listaOrdini.map((ordine) => (
            <tr >
              <td >{ordine.id}</td>
              <td >{ordine.codice}</td>
              <td >{ordine.statoOrdine}</td>
              <td >{ordine.tipoConsegna}</td> 
              <td >{ordine.tipoPagamento}</td> 
                                  
            </tr>

          ))}
        </table>

        
    </div>
    
    </>
)
}

export default FindAllOrdini