import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CustomContext } from "../Contexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


function ResultFindByIdClienteOrdine () {

    const history = useHistory();
    const ammContext = useContext(CustomContext);
    const [cliente, setCliente]= useState({listaOrdini: []})

    useEffect(() => {
        
        // Verifico il ruolo al mounting
        const ruoloContext = ammContext.ruolo;
        
    
        if (ruoloContext !== "AMMINISTRATORE") {
          // reindirizzo se il ruolo non è amministratore
          history.push('/');
        }
    }, [ammContext.ruolo, history]);

    useEffect(() => { 
        findByIdClienteOrdine()
      }, [])

    const tornaIndietro = (route) => {
        history.push(route);
      };
      

      const findByIdClienteOrdine = async () => {  
 
    
        if (ammContext.id !== null && ammContext.id !== undefined) {
        try {
          const findResponse = await axios.get(`http://localhost:8090/rest/utente/findById/${ammContext.id}`,{ headers: { "Content-Type": "application/json" } });
          
          console.log(findResponse)
          if (findResponse?.status === 200) {
            
            setCliente(findResponse?.data)
                    
          }
        } catch (exception) {
          alert("Si è verificato un errore");
        
      }}}
    
     
      console.log(cliente)



    return(

        <>

        <br/>

        <div>
        <button className="button" onClick={() => tornaIndietro("/findByIdClienteOrdine")}>
        <FontAwesomeIcon icon= {faArrowLeft} /></button>
        </div>

        <br/>
        
        <div>
        <table id= "tabellaSerie">
            <thead>
          <tr> 
            
            <th >ID_CLIENTE </th>             
            <th >NOME_CLIENTE </th> 
            <th >COGNOME_CLIENTE </th>            
            <th >EMAIL_CLIENTE</th>
            <th >PASSWORD_CLIENTE</th>
            <th >RUOLO_CLIENTE</th>

            <th >ID_ORDINE </th>             
            <th >CODICE_ORDINE </th> 
            <th >STATO_ORDINE </th>            
            <th >TIPO_CONSEGNA</th>
            <th >TIPO_PAGAMENTO</th>

            
          </tr>
          </thead>
          <tbody>
          
          {cliente.listaOrdini.map((ordine, index) => (
             <tr key={index} > 
              <td>{cliente.id}</td>
              <td >{cliente.nome}</td>
              <td >{cliente.cognome}</td>
              <td >{cliente.email}</td>
              <td >{cliente.password}</td>
              <td >{cliente.ruolo}</td>
                                     
              <td >{ordine.id}</td>
              <td >{ordine.codice}</td>
              <td >{ordine.statoOrdine}</td>
              <td >{ordine.tipoConsegna}</td>
              <td >{ordine.tipoPagamento}</td>                 
            </tr>
          ))}
            </tbody>
       

          
        </table>
        </div>
        
        </>
    )
}

export default ResultFindByIdClienteOrdine