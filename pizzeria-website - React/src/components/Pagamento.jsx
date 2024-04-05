import axios from "axios"
import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState} from "react";
import { CustomContext } from "./Contexts";

function Pagamento() {

  const context = useContext(CustomContext);
    const history = useHistory();
    const [tipoConsegna, setTipoConsegna] =useState("")
    const [tipoPagamento, setTipoPagamento] =useState("")


    const tornaIndietro = (route) => {
        history.push(route);
    };

    const insertOrdine = async () => {  
        try {
          const insertResponse = await axios.post("http://localhost:8090/rest/ordine/insert", {tipoConsegna, tipoPagamento},{ headers: { "Content-Type": "application/json" } });
    
          
          if (insertResponse?.status === 201) {
            context.setTipoConsegnaRiepilogo(tipoConsegna)
            context.setTipoPagamentoRiepilogo(tipoPagamento)
            alert("Ordine confermato")
            history.push("/riepilogo")        
          }
        } catch (exception) {
          alert("Si è verificato un errore");
          history.push("/") 
        
      }}




    return(

<>

    <div>
        <button className="button" onClick={() => tornaIndietro("/carrello")}>
        <FontAwesomeIcon icon= {faArrowLeft} /></button>
        </div>
        <br/>
        <br/>

    <div>
        

        <label>Tipo Consegna </label>
        <select value={context.tipoConsegna} onChange={(e) => setTipoConsegna(e.target.value)}>
          <option></option>
          <option value="TAKE_AWAY">Take away</option>
          <option value="DOMICILIO">Domicilio</option>
        </select>
        <br/>
        <br/>

        <label>Tipo Pagamento </label>
        <select value={context.tipoPagamento} onChange={(e) => setTipoPagamento(e.target.value)}>
          <option></option>
          <option value="CARTA">Carta</option>
          <option value="CONTANTI">Contanti</option>
        </select>
        <br/>
        <br/>
        <button className="button button-green border-radius-50" type="button" onClick={() => insertOrdine()}>
          Conferma
        </button>
      </div>


</>

    )
}

export default Pagamento