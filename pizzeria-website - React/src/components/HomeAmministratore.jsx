import { useContext, useEffect} from "react";
import { CustomContext } from "./Contexts";
import { useHistory } from "react-router-dom";




function HomeAmministratore(){

    const history = useHistory();

    const ammContext = useContext(CustomContext);

    
    
      
      useEffect(() => {
        
        // Verifico il ruolo al mounting
        const ruoloContext = ammContext.ruolo;
        
    
        if (ruoloContext !== "AMMINISTRATORE") {
          // reindirizzo se il ruolo non è amministratore
          history.push('/');
        }
    }, [ammContext.ruolo, history]);

    const vaiAgliOrdini = (route) => {
      history.push(route);
    };

    const vaiAiClienti = (route) => {
      history.push(route);
    };

    const vaiAiProdotti = (route) => {
      history.push(route);
    };
  
    



    return(
    <>
    <br/>

    <div>
        <h4>
          Benvenuto/a {ammContext.ruolo} {ammContext.nome} {ammContext.cognome}
        </h4>
      </div>
    <br/>
    <br/>

    <div>
        <button className="button button-green border-radius-50" type="button" onClick={() => vaiAgliOrdini("/sezioneOrdini")}>Sezione Ordini</button>
    </div>

    <div>
        <button className="button button-green border-radius-50" type="button" onClick={() => vaiAiClienti("/sezioneClienti")}>Sezione Clienti</button>
    </div>

    <div>
        <button className="button button-green border-radius-50" type="button" onClick={() => vaiAiProdotti("/sezioneProdotti")}>Sezione prodotti</button>
    </div>
    <br/>
    
    

    


    </>

    )
}

export default HomeAmministratore