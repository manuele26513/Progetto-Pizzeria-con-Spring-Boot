
import axios from "axios";
import { useState, useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import { CustomContext } from "../Contexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function InsertProdotto() {
  const ammContext = useContext(CustomContext);
  const [nome, setNome] = useState("");
  const [codice, setCodice] = useState("");
  const [prezzo, setPrezzo] = useState("");
  const [tipoProdotto, setTipoProdotto] = useState("");
  const [descrizione, setDescrizione] = useState("");

  const history = useHistory();

  useEffect(() => {
        
    // Verifico il ruolo al mounting
    const ruoloContext = ammContext.ruolo;
    

    if (ruoloContext !== "AMMINISTRATORE") {
      // reindirizzo se il ruolo non è amministratore
      history.push('/');
    }
}, [ammContext.ruolo, history]);

  const tornaIndietro = (route) => {
    history.push(route);
  };
  

  const insertProdotto = async () => {  
    try {
      const insertResponse = await axios.post("http://localhost:8090/rest/prodotto/insertOrUpdate", {nome, codice, prezzo, tipoProdotto, descrizione},{ headers: { "Content-Type": "application/json" } });

      
      if (insertResponse?.status === 201) {
        alert("Prodotto inserito correttamente")        
      }
    } catch (exception) {
      alert("Si è verificato un errore");
    
  }}

  return (
    <>
      
      <br/>

<div>
  <button className="button" onClick={() => tornaIndietro("/sezioneProdotti")}>
  <FontAwesomeIcon icon= {faArrowLeft} /></button>
</div>
  <br/>

      <div>
        <label>Nome</label>
        <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <br />

        <label>Codice</label>
        <input type="text" name="codice" value={codice} onChange={(e) => setCodice(e.target.value)} />
        <br />
        <br />

        <label>Prezzo</label>
        <input type="number" name="prezzo" value={prezzo} onChange={(e) => setPrezzo(e.target.value)} />
        <br />
        <br />

        <label>Tipo Prodotto </label>
        <select value={tipoProdotto} onChange={(e) => setTipoProdotto(e.target.value)}>
          <option></option>
          <option value="PIZZA_BIANCA">Pizza bianca</option>
          <option value="PIZZA_ROSSA">Pizza rossa</option>
          <option value="ROSTICCERIA">Rosticceria</option>
        </select>
        <br/>
        <br/>

        <label>Descrizione</label>
        <input type="text" name="descrizione" value={descrizione} onChange={(e) => setDescrizione(e.target.value)} />
        <br />
        <br />

        <button className="button button-green border-radius-50" type="button" onClick={() => insertProdotto()}>
          Inserisci
        </button>
      </div>
    </>
  );
}

export default InsertProdotto;