import axios from "axios"
import { useState, useEffect, useContext} from "react";
import { CustomContext } from "../Contexts";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function FindAllClientiOrdini(){

    const [listaClientiOrdini, setListaClientiOrdini] = useState([{listaOrdini: []}])
    const ammContext = useContext(CustomContext);
    const history = useHistory();

    const tornaIndietro = (route) => {
      history.push(route);
    };

    useEffect(() => { 
        findAllClientiOrdini()
    }, []);

    useEffect(() => {
        
        // Verifico il ruolo al mounting
        const ruoloContext = ammContext.ruolo;
        
    
        if (ruoloContext !== "AMMINISTRATORE") {
          // reindirizzo se il ruolo non è amministratore
          history.push('/');
        }
    }, [ammContext.ruolo, history]);

    const findAllClientiOrdini  = async () => {
        try {
            const listResponse = await axios.get("http://localhost:8090/rest/utente/findAll", { headers: { "Content-Type": "application/json" } });
            console.log(listResponse)
            if (listResponse?.status === 200) {  
              
                setListaClientiOrdini(listResponse?.data)     
              
            }
          } catch (exception) {
            alert("Si è verificato un errore");
          }
    }


return(

    <>

<br/>

<div>
<button className="button" onClick={() => tornaIndietro("/sezioneClienti")}>
<FontAwesomeIcon icon= {faArrowLeft} /></button>
</div>
<br/>

<div>
    <br/>
        <table id= "tabellaSerie">
          <tr> 
            <th >ID_CLIENTE </th>           
            <th >NOME_CLIENTE</th>
            <th >COGNOME_CLIENTE</th>
            <th >EMAIL_CLIENTE</th>
            <th >PASSWORD_CLIENTE</th> 
            <th >RUOLO</th>          
            <th >ID_ORDINE </th>           
            <th >CODICE_ORDINE</th>
            <th >STATO_ORDINE</th>
            <th >TIPO_CONSEGNA</th>
            <th >TIPO_PAGAMENTO</th>
            
          </tr>

          {listaClientiOrdini.map((clienteOrdine) => (
            clienteOrdine.listaOrdini.map((ordine) =>(

          
            <tr>
               
               <td>{clienteOrdine.id}</td>
                <td>{clienteOrdine.nome}</td>
                <td>{clienteOrdine.cognome}</td>
                <td>{clienteOrdine.email}</td>
                <td>{clienteOrdine.password}</td>
                <td>{clienteOrdine.ruolo}</td>
                
                <td>{ordine.id}</td>
                <td>{ordine.codice}</td>
                <td>{ordine.statoOrdine}</td>
                <td>{ordine.tipoConsegna}</td>
                <td>{ordine.tipoPagamento}</td>       
            </tr>
            ))
          ))}
          
        </table>

        
    </div>
    
    </>
)
}

export default FindAllClientiOrdini