import { useHistory } from "react-router-dom";
import {useState, useEffect, useContext } from "react";
import axios from "axios";
import { CustomContext } from "./Contexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function Prodotto () {

    
    const carrelloContext = useContext(CustomContext)
    const [numProdottiCarrello, setNumProdottiCarrello] = useState(0)
    
    

    const history = useHistory();

    const tornaIndietro = (route) => {
        history.push(route);
    };

    
    useEffect(() => { 
        findAllProdotto()
    }, []);

    
    const findAllProdotto  = async () => {
        try {
            const listResponse = await axios.get("http://localhost:8090/rest/prodotto/findAll", { headers: { "Content-Type": "application/json" } });
            if (listResponse?.status === 200) {  
              carrelloContext.setListaProdotti(listResponse?.data)     
              
            }
          } catch (exception) {
            alert("Si è verificato un errore");
          }
    }

    
    const aggiungiAlCarrello = (prodottoId) => {

      const prodottoDaAggiungere = carrelloContext.listaProdotti.find((prodotto) => prodotto.id === prodottoId);
      carrelloContext.listaCarrello.push({id: prodottoDaAggiungere.id, nome: prodottoDaAggiungere.nome, prezzo: prodottoDaAggiungere.prezzo, tipoProdotto: prodottoDaAggiungere.tipoProdotto, descrizione: prodottoDaAggiungere.descrizione, quantita: 1})

      setNumProdottiCarrello(carrelloContext.listaCarrello.length)
     
      // Aggiungo una classe al pulsante per avviare l'animazione
    const button = document.getElementById(`aggiungiBtn_${prodottoId}`);
    button.classList.add("rimbalza");

    // Rimuovo la classe dopo un breve ritardo per consentire la ripetizione dell'animazione
    setTimeout(() => {
      button.classList.remove("rimbalza");
    }, 300);
  };
     
    

    const goToCarrello = (route) => {

      history.push(route)



    }

    
    

    return(
        <>
        <br/>
        <div>
            <button className="button" onClick={() => tornaIndietro("/ordineUtente")}>
            <FontAwesomeIcon icon= {faArrowLeft} /></button>
         
        </div>
        <br/>
        <br/>

        <div>
        <table id= "tabellaSerie">
          <tr>            
            <th >Nome </th>           
            <th >Prezzo</th>
            <th >Tipo prodotto</th>
            <th >Descrizione</th>
            { <th >Aggiungi</th> }
          </tr>

          {carrelloContext.listaProdotti.map((prodotto, index) => (
            <tr key={index}>
              <td >{prodotto.nome}</td>
              <td >{prodotto.prezzo}</td>
              <td >{prodotto.tipoProdotto}</td>
              <td >{prodotto.descrizione}</td> 
              { <td> { <button id={`aggiungiBtn_${prodotto.id}`} onClick={() => aggiungiAlCarrello(prodotto.id)}>
              <FontAwesomeIcon icon={faPlus} />  
              </button> }</td>}        
              
            </tr>

          ))}
        </table>

       
        
      </div>

        <br />
          <button onClick={() => goToCarrello("/carrello")}>
            <FontAwesomeIcon icon={faShoppingCart} />  {" "}
            {numProdottiCarrello > 0 && <span className="badge">{numProdottiCarrello}</span>}
            </button>
        <br />

        

        
           
        </>

    )
}

export default Prodotto