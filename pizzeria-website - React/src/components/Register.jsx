import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Register() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ruolo, setRuolo] = useState("");

  const history = useHistory();

  const backToHomepage= (route) => {
    history.push(route);
  };

  const validazioneRegister = () => {
    // Validazione del nome e cognome (deve contenere solo lettere e spazi)
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(nome) || !nameRegex.test(cognome)) {
      alert("Inserisci un nome e cognome validi.");
      return false;
    }

    // Validazione dell'email con RegExp
    const emailRegex = /^[^\s@]+@[^\s@]+\.(it|com|org|net)\b$/;
    if (!emailRegex.test(email)) {
      alert("Inserisci un'email valida.");
      return false;
    }

    // Validazione della password (almeno 6 caratteri)
    if (password.length < 6) {
      alert("La password deve contenere almeno 6 caratteri.");
      return false;
    }
     //Validazione del campo "ruolo"
    if(ruolo !== "CLIENTE" && ruolo !== "AMMINISTRATORE"){
      alert("Il campo 'ruolo' non può essere vuoto. Seleziona l'opzione valida")
      return false;
    } 

    return true;
  };




  const getRegister = async (route) => {
    if(validazioneRegister()){
    try {
      const registerResponse = await axios.post("http://localhost:8090/rest/utente/insert", { nome, cognome, email, password, ruolo }, { headers: { "Content-Type": "application/json" } });
    
      //controlli sulla login
      if (registerResponse?.status === 201) {
        
        history.push(route);
      }
    
    } catch (exception) {
      alert("Utente già registrato. Puoi procedere con la login");
    } 
  }
  };

  return (
    <>
      <div>
        <button className="button" onClick={() => backToHomepage("/")}>
        <FontAwesomeIcon icon= {faArrowLeft} /></button>
        
      </div>
      <br />

      <div>
        <label>Nome</label>
        <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <br />

        <label> Cognome</label>
        <input type="text" name="cognome" value={cognome} onChange={(e) => setCognome(e.target.value)} />
        <br />

        <label>Email</label>
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />

        <label>Password</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />

        <label>Ruolo </label>
        <select value={ruolo} onChange={(e) => setRuolo(e.target.value)}>
          <option></option>
          <option value="CLIENTE">Cliente</option>
          <option value="AMMINISTRATORE">Amministratore</option>
        </select>
        <br />
        <br />

        <button className="button button-green border-radius-50" type="button" onClick={() => getRegister("/login")}>
          Register now
        </button>
      </div>
    </>
  );
}

export default Register;
