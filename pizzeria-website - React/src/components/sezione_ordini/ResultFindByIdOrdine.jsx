import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CustomContext } from "../Contexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


function ResultFindByIdOrdine () {

    const history = useHistory();
    const ammContext = useContext(CustomContext);
    const [ordine, setOrdine]= useState({})

    useEffect(() => {
        
        // Verifico il ruolo al mounting
        const ruoloContext = ammContext.ruolo;
        
    
        if (ruoloContext !== "AMMINISTRATORE") {
          // reindirizzo se il ruolo non è amministratore
          history.push('/');
        }
    }, [ammContext.ruolo, history]);

    useEffect(() => { 
        findByIdOrdine()
      }, [])

    const tornaIndietro = (route) => {
        history.push(route);
      };
      

      const findByIdOrdine = async () => {  
 
    
        if (ammContext.id !== null && ammContext.id !== undefined) {
        try {
          const findResponse = await axios.get(`http://localhost:8080/PizzeriaREST/rest/ordineRest/findByIdOrdine/${ammContext.id}`,{ headers: { "Content-Type": "application/json" } });
          
          
          if (findResponse?.status === 200) {
            
            setOrdine(findResponse?.data)
                    
          }
        } catch (exception) {
          alert("Si è verificato un errore");
        
      }}}
    
     
      console.log(ordine)



    return(

        <>

        <br/>

        <div>
        <button className="button" onClick={() => tornaIndietro("/findByIdOrdine")}>
        <FontAwesomeIcon icon= {faArrowLeft} /></button>
        </div>

        <br/>
        
        <div>
        <table id= "tabellaSerie">
            <thead>
          <tr> 
            <th >ID </th>             
            <th >NUMERO_ORDINE </th> 
            <th >STATO_ORDINE </th>            
            <th >TIPO_CONSEGNA</th>
            <th >TIPO_PAGAMENTO</th>
            
          </tr>
          </thead>
          <tbody>
            <tr >
              <td >{ordine.id}</td>
              <td >{ordine.numero}</td>
              <td >{ordine.statoOrdine}</td>
              <td >{ordine.tipoConsegna}</td>
              <td >{ordine.tipoPagamento}</td> 
              
                                  
            </tr>
            </tbody>
       

          
        </table>
        </div>
        
        </>
    )
}

export default ResultFindByIdOrdine