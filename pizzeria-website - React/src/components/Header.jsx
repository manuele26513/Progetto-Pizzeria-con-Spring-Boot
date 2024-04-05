import { useHistory, useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const history = useHistory();
  const location = useLocation();
 

  const goToLogin = (route) => {
    history.push(route);
  };

  const goToRegister = (route) => {
    history.push(route);
  };

  const logOut = (route) => {
    history.push(route);
  };

  return (
    <>
    <br/>
      
      {location.pathname === 
        "/" &&(
          <div>
            <button className="button button-green border-radius-50" type="button" onClick={() => goToLogin("/login")}>
              Login
            </button>
            <br />
            <button className="button button-green border-radius-50" type="button" onClick={() => goToRegister("/register")}>
              Register
            </button>
            <br />
            <br />
          </div>
        )}
      
      
      {location.pathname ===
        "/login" &&(
          <div>
            <h3>Login</h3><br/>
            <h6>Non sei registrato? 
              <Link className="App-link" to="/register"> Registrati</Link>
            </h6>
            <br/>
          </div>
        )}

      
      {location.pathname ===
        "/register" &&(
          <div>
            <h3>Registrazione</h3><br/>
            <h6>Sei già registrato? effettua la
            <Link className="App-link" to="/login"> login</Link>
            </h6>
            <br/>
          </div>
        )}

      
      {location.pathname ===
        "/ordineUtente" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>
        )}

      {location.pathname ===
        "/listaProdotti" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>
        )}

      {location.pathname ===
        "/carrello" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>
        )}

        {location.pathname ===
        "/pagamento" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>
          )}

      {location.pathname ===
        "/amm" &&(
          <div>
          <button className="button" onClick={() => logOut("/")}>
          <FontAwesomeIcon icon= {faSignOutAlt} />
           Logout </button>
           </div>

          
        )}

      {location.pathname ===
        "/sezioneOrdini" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>

          )}

      {location.pathname ===
        "/findAllOrdini" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>

          )}


      {location.pathname ===
        "/findAllProdotto" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>

          )}

      {location.pathname ===
        "/insertProdotto" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>

          )}

      {location.pathname ===
        "/sezioneClienti" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>

          )}

      {location.pathname ===
        "/findAllClientiOrdini" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>
          )}

      {location.pathname ===
        "/deleteCliente" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>

          )}

      {location.pathname ===
        "/deleteProdotto" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>

          

          )}

      {location.pathname ===
        "/deleteOrdine" &&(
          <div>
          <button className="button" onClick={() => logOut("/")}>
          <FontAwesomeIcon icon= {faSignOutAlt} />
           Logout </button>
      </div>

          )}


            {location.pathname ===
        "/sezioneProdotti" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>

          )}


      {location.pathname ===
        "/updateProdotto" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>

          )}

      {location.pathname ===
        "/updateOrdine" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>

          )}

      {location.pathname ===
        "/updateCodiceOrdine" &&(
          <div>
        <button className="button" onClick={() => logOut("/")}>
        <FontAwesomeIcon icon= {faSignOutAlt} />
         Logout </button>
    </div>

          )}

      

        {location.pathname ===
        "/findByIdProdotto" &&(
          <div>
          <button className="button" onClick={() => logOut("/")}>
          <FontAwesomeIcon icon= {faSignOutAlt} />
           Logout </button>
      </div>

          )}

        {location.pathname ===
        "/resultFindByIdProdotto" &&(
          <div>
          <button className="button" onClick={() => logOut("/")}>
          <FontAwesomeIcon icon= {faSignOutAlt} />
           Logout </button>
      </div>

          )}

    {location.pathname ===
        "/resultFindByIdOrdine" &&(
          <div>
          <button className="button" onClick={() => logOut("/")}>
          <FontAwesomeIcon icon= {faSignOutAlt} />
           Logout </button>
      </div>

          )}

      {location.pathname ===
        "/findByIdOrdine" &&(
          <div>
          <button className="button" onClick={() => logOut("/")}>
          <FontAwesomeIcon icon= {faSignOutAlt} />
           Logout </button>
      </div>

          )}

{location.pathname ===
        "/findByIdClienteOrdine" &&(
          <div>
          <button className="button" onClick={() => logOut("/")}>
          <FontAwesomeIcon icon= {faSignOutAlt} />
           Logout </button>
      </div>

          )}

{location.pathname ===
        "/resultFindByIdClienteOrdine" &&(
          <div>
          <button className="button" onClick={() => logOut("/")}>
          <FontAwesomeIcon icon= {faSignOutAlt} />
           Logout </button>
      </div>

          )}

{location.pathname ===
        "/riepilogo" &&(
          <div>
          <button className="button" onClick={() => logOut("/")}>
          <FontAwesomeIcon icon= {faSignOutAlt} />
           Logout </button>
      </div>

          )}




      
    </>
  );
}

export default Header;


