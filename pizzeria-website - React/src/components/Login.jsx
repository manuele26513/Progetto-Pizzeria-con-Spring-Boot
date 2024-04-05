import { useHistory} from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { CustomContext } from "./Contexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(CustomContext);

  const history = useHistory();

  const backToHomepage = (route) => {
    history.push(route);
  };

  const validazioneLogin = () => {
    // Validazione dell'email con RegExp
    const emailRegex = /^[^\s@]+@[^\s@]+\.(it|com|org|net)\b$/;
    if (!emailRegex.test(email)) {
      alert("Inserisci un'email valida.");
      return false;
    }

    // Validazione della password (lunghezza minima 6 caratteri)
    if (password.length < 6) {
      alert("La password deve contenere almeno 6 caratteri.");
      return false;
    }

    return true;
  };

  const getLogin = async () => {

    if(validazioneLogin()){
    try {
      const loginResponse = await axios.post("http://localhost:8090/rest/utente/login", { email, password },{ headers: { "Content-Type": "application/json" } });

      //controlli sulla login
      if (loginResponse?.status === 200) {
        //login ok
        userContext.setNome(loginResponse?.data?.nome);
        userContext.setCognome(loginResponse?.data?.cognome);
        userContext.setRuolo(loginResponse?.data?.ruolo)
        //reindirizzo in base al ruolo
        if (loginResponse?.data?.ruolo === "CLIENTE") {
          history.push("/ordineUtente");
        } else {
          history.push("/amm"); 
        }
      
        
      }
    } catch (exception) {
      alert("Utente non registrato. Puoi procedere con la registrazione");
    }
  }}

  return (
    <>
      <div>
        <button className="button" onClick={() => backToHomepage("/")}>
        <FontAwesomeIcon icon= {faArrowLeft} /></button>
        
      </div>
      <br />

      <div>
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />

        <label> Password</label>
        <input type="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />

        <button className="button button-green border-radius-50" type="button" onClick={() => getLogin("/ordineUtente")}>
          Login now
        </button>
      </div>
    </>
  );
}

export default Login;
