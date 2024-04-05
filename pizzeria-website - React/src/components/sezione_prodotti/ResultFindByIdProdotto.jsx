import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CustomContext } from "../Contexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


function ResultFindByIdProdotto () {

    const history = useHistory();
    const ammContext = useContext(CustomContext);
    const [prodotto, setProdotto]= useState({})

    useEffect(() => {
        
        // Verifico il ruolo al mounting
        const ruoloContext = ammContext.ruolo;
        
    
        if (ruoloContext !== "AMMINISTRATORE") {
          // reindirizzo se il ruolo non è amministratore
          history.push('/');
        }
    }, [ammContext.ruolo, history]);

    useEffect(() => { 
        findByIdProdotto()
      }, [])

    const tornaIndietro = (route) => {
        history.push(route);
      };
      

      const findByIdProdotto = async () => {  
 
    
        if (ammContext.id !== null && ammContext.id !== undefined) {
        try {
          const findResponse = await axios.get(`http://localhost:8090/rest/prodotto/findById/${ammContext.id}`,{ headers: { "Content-Type": "application/json" } });
          
          
          if (findResponse?.status === 200) {
            
            setProdotto(findResponse?.data)
                    
          }
        } catch (exception) {
          alert("Si è verificato un errore");
        
      }}}
    
     
      console.log(prodotto)



    return(

        <>

        <br/>

        <div>
        <button className="button" onClick={() => tornaIndietro("/findByIdProdotto")}>
        <FontAwesomeIcon icon= {faArrowLeft} /></button>
        </div>

        <br/>
        
        <div>
        <table id= "tabellaSerie">
            <thead>
          <tr> 
            <th >ID </th>             
            <th >NOME </th> 
            <th >CODICE_PRODOTTO </th>            
            <th >PREZZO</th>
            <th >TIPO_PRODOTTO</th>
            <th >DESCRIZIONE</th>
          </tr>
          </thead>
          <tbody>
            <tr >
              <td >{prodotto.id}</td>
              <td >{prodotto.nome}</td>
              <td >{prodotto.codice}</td>
              <td >{prodotto.prezzo}</td>
              <td >{prodotto.tipoProdotto}</td> 
              <td >{prodotto.descrizione}</td> 
                                  
            </tr>
            </tbody>
       

          
        </table>
        </div>
        
        </>
    )
}

export default ResultFindByIdProdotto