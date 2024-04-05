import { useContext} from "react";
import { CustomContext } from "./Contexts";
import { useHistory, Link } from "react-router-dom";



function OrdineUtente() {
  
    
    const userContext = useContext(CustomContext);

  const history = useHistory();

  

  const getListaProdotti = async (route) => {
    history.push(route);
  }

 

  return (
    <>
    <br/>
      
      
      <div>
        <h4>
          Benvenuto/a {userContext.ruolo} {userContext.nome} {userContext.cognome}
        </h4>
      </div>
      <div>
        <br/>
        <br/>
        
        <button className="button button-green border-radius-50" type="button" onClick={() => getListaProdotti("/listaProdotti")}>Effettua un ordine</button>
      </div>

     
     
    </>
  );
}

export default OrdineUtente;
