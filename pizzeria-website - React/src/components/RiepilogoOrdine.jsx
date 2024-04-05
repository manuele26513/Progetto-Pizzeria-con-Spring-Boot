import { CustomContext } from "./Contexts";
import { useContext, useState, useEffect} from "react";

function RiepilogoOrdine() {

  const[somma, setSomma] = useState(0)


    const context = useContext(CustomContext);

    useEffect(() => { 
      let updateSomma = 0
      context.listaCarrello.map((prodotto, index) =>{
        if(prodotto.quantita>=1){
          updateSomma+=prodotto.prezzo*prodotto.quantita

        }



      })

      setSomma(updateSomma)
      
  }, []);





    return(
        <>
        <div>
        <br/>
        <h3>Riepilogo ordine</h3>
        </div>
        
        
<br/>
<div>
  <table id= "tabellaSerie">
   
    <tr>
      <th >Nome</th>
      <th >Prezzo</th>
      <th >Tipo prodotto</th>
      <th >Descrizione</th>
      <th >Quantità</th>
      <th>Tipo Consegna</th>
      <th>Tipo Pagamento</th>
      
      
      
    </tr>

    {context.listaCarrello.map((prodotto, index) => (
      <tr key={index}>
        <td >{prodotto.nome}</td>
        <td >{prodotto.prezzo}0€</td>
        <td >{prodotto.tipoProdotto}</td>
        <td >{prodotto.descrizione}</td> 
        <td>{prodotto.quantita}</td>
        <td >{context.tipoConsegnaRiepilogo}</td>
        <td >{context.tipoPagamentoRiepilogo}</td> 
        
        
       
       
      </tr>
      
    ))}
  </table>

  </div>

  <br/>

  <div>


  <table id= "tabellaSerie">
   
    <tr>
      <th >Totale</th>   
    </tr>

<tr>
  <td>{somma},00€</td>
  </tr>
  </table>

  </div>
  
        
        </>

    )
}

export default RiepilogoOrdine