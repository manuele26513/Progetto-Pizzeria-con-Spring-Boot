import { useHistory } from "react-router-dom";
import { CustomContext } from "./Contexts";
import { useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Carrello () {

  const history = useHistory();
  const carrelloContext = useContext(CustomContext);
  
  

  const tornaIndietro = (route) => {
    history.push(route);
  };

  const svuotaCarrello = () => {

    carrelloContext.setListaCarrello([])

   
  };

  const incrementa = (prodottoId) => {

    const prodottoDaIncrementare = [...carrelloContext.listaCarrello]
    prodottoDaIncrementare.map((prodotto) =>{
      if(prodotto.id === prodottoId){
        prodottoDaIncrementare.splice(0,1,{id: prodotto.id, nome: prodotto.nome, prezzo: prodotto.prezzo, 
          tipoProdotto: prodotto.tipoProdotto, descrizione: prodotto.descrizione, quantita: (prodotto.quantita+1)})
        }
    })
    carrelloContext.setListaCarrello(prodottoDaIncrementare)

   
  };

  const decrementa = (prodottoId) => {

    const prodottoDaDecrementare = [...carrelloContext.listaCarrello]
    prodottoDaDecrementare.map((prodotto) =>{
      if(prodotto.id === prodottoId){
        prodottoDaDecrementare.splice(0,1,{id: prodotto.id, nome: prodotto.nome, prezzo: prodotto.prezzo, 
          tipoProdotto: prodotto.tipoProdotto, descrizione: prodotto.descrizione, quantita: (prodotto.quantita-1)})
          if(prodotto.quantita===1){
            prodottoDaDecrementare.splice(0,1,)
          }
        }
        
    })
    carrelloContext.setListaCarrello(prodottoDaDecrementare)

   

   
  };

  

    return(
<>

        <div>
        <button className="button" onClick={() => tornaIndietro("/listaProdotti")}>
        <FontAwesomeIcon icon= {faArrowLeft} /></button>
        </div>

<br/>
        {carrelloContext.listaCarrello.length > 0 &&(
        <div>
        <button className="button button-green border-radius-50" type="button" onClick={() => svuotaCarrello()}>Svuota il carrello</button>
        </div>
        )}
        <br/>


  {carrelloContext.listaCarrello.length > 0 &&(
    <div>
  <table id= "tabellaSerie">
    <tr>
      <th >Nome</th>
      <th >Prezzo</th>
      <th >Tipo prodotto</th>
      <th >Descrizione</th>
      <th >Quantità</th>
      
          
    </tr>

    {carrelloContext.listaCarrello.map((prodotto, index) => (
      <tr key={index}>
        <td >{prodotto.nome}</td>
        <td >{prodotto.prezzo}0€</td>
        <td >{prodotto.tipoProdotto}</td>
        <td >{prodotto.descrizione}</td> 
        
       
       <button className="button border-radius-50" type="button" onClick={() => incrementa(prodotto.id)}>+</button>
      <button className="button border-radius-50" type="button" onClick={() => decrementa(prodotto.id)}>-</button>
      <br/>
      <span className="badge">{prodotto.quantita}</span>
        
        <br/>
       
      </tr>
    ))}
  </table>
  </div>
    )}
  
  <br/>
         {carrelloContext.listaCarrello.length > 0 &&(
        <div>
        <button className="button button-green border-radius-50" type="button" onClick={() => tornaIndietro("/pagamento")}>Conferma e paga</button>
        </div>
         )}

      {carrelloContext.listaCarrello.length <= 0 &&(
        <div>
        <h3>CARRELLO VUOTO</h3>
        </div>
         )}

         

       
        
        
        
        
        </>


    )


}

export default Carrello