import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./Table.css";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CustomContext } from "./components/Contexts";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import OrdineUtente from "./components/OrdineUtente";
import HomeAmministratore from "./components/HomeAmministratore";
import Prodotto from "./components/Prodotto";
import Carrello from "./components/Carrello";
import SezioneOrdini from "./components/sezione_ordini/SezioneOrdini";
import FindAllOrdini from "./components/sezione_ordini/FindAllOrdini";
import SezioneProdotti from "./components/sezione_prodotti/SezioneProdotti";
import FindAllProdotto from "./components/sezione_prodotti/FindAllProdotto";
import InsertProdotto from "./components/sezione_prodotti/InsertProdotto";
import SezioneClienti from "./components/sezione_clienti/SezioneClienti";
import FindAllClientiOrdini from "./components/sezione_clienti/FindAllClientiOrdini";
import DeleteCliente from "./components/sezione_clienti/DeleteCliente";
import DeleteProdotto from "./components/sezione_prodotti/DeleteProdotto";
import DeleteOrdine from "./components/sezione_ordini/DeleteOrdine";
import UpdateProdotto from "./components/sezione_prodotti/UpdateProdotto";
import UpdateOrdine from "./components/sezione_ordini/UpdateOrdine";
import FindByIdProdotto from "./components/sezione_prodotti/FindByIdProdotto";
import Pagamento from "./components/Pagamento";
import ResultFindByIdProdotto from "./components/sezione_prodotti/ResultFindByIdProdotto";
import FindByIdOrdine from "./components/sezione_ordini/FindByIdOrdine";
import ResultFindByIdOrdine from "./components/sezione_ordini/ResultFindByIdOrdine";
import FindByIdClienteOrdine from "./components/sezione_clienti/FindByIdClienteOrdine";
import ResultFindByIdClienteOrdine from "./components/sezione_clienti/ResultFindByIdClienteOrdine";
import RiepilogoOrdine from "./components/RiepilogoOrdine";
import UpdateCodiceOrdine from "./components/sezione_ordini/UpdateCodiceOrdine";





function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [ruolo, setRuolo] = useState("");
  const [listaCarrello, setListaCarrello] = useState([])
  const [listaProdotti, setListaProdotti] = useState([])
  const [id, setId] = useState(0)
  const[tipoConsegnaRiepilogo, setTipoConsegnaRiepilogo] = useState([])
  const[tipoPagamentoRiepilogo, setTipoPagamentoRiepilogo] = useState([])
  
  

  

  const contesto = { email, setEmail, password, setPassword, nome, setNome, cognome, setCognome, 
                    ruolo, setRuolo, listaCarrello, setListaCarrello, listaProdotti, setListaProdotti, 
                      id, setId, tipoConsegnaRiepilogo, setTipoConsegnaRiepilogo,tipoPagamentoRiepilogo, setTipoPagamentoRiepilogo };
  return (
    <>
      <CustomContext.Provider value={contesto}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <Header />
            </header>

            <div className="App-body">
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>

                <Route exact path="/login">
                  <Login />
                </Route>

                <Route exact path="/register">
                  <Register />
                </Route>

                <Route exact path="/ordineUtente">
                  <OrdineUtente />
                </Route>

                <Route exact path="/listaProdotti">
                  <Prodotto />
                </Route>

                <Route exact path="/carrello">
                  <Carrello />
                </Route>

                <Route exact path="/amm">
                  <HomeAmministratore />
                </Route>

                <Route exact path="/sezioneOrdini">
                  <SezioneOrdini />
                </Route>

                <Route exact path="/findAllOrdini">
                  <FindAllOrdini />
                </Route>

                

                <Route exact path="/sezioneProdotti">
                  <SezioneProdotti />
                </Route>

                <Route exact path="/findAllProdotto">
                  <FindAllProdotto />
                </Route>

                <Route exact path="/insertProdotto">
                  <InsertProdotto />
                </Route>

                <Route exact path="/sezioneClienti">
                  <SezioneClienti />
                </Route>


                <Route exact path="/findAllClientiOrdini">
                  <FindAllClientiOrdini />
                </Route>

                <Route exact path="/deleteCliente">
                  <DeleteCliente />
                </Route>

                <Route exact path="/deleteProdotto">
                  <DeleteProdotto />
                </Route>

                <Route exact path="/deleteOrdine">
                  <DeleteOrdine />
                </Route>

              
                <Route exact path="/updateProdotto">
                  <UpdateProdotto />
                </Route>

                <Route exact path="/updateOrdine">
                  <UpdateOrdine />
                </Route>

                <Route exact path="/updateCodiceOrdine">
                  <UpdateCodiceOrdine />
                </Route>

                <Route exact path="/findByIdProdotto">
                  <FindByIdProdotto />
                </Route>

                <Route exact path="/pagamento">
                  <Pagamento />
                </Route>

                <Route exact path="/resultFindByIdProdotto">
                  <ResultFindByIdProdotto />
                </Route>

                <Route exact path="/findByIdOrdine">
                  <FindByIdOrdine />
                </Route>

                <Route exact path="/resultFindByIdOrdine">
                  <ResultFindByIdOrdine />
                </Route>

                <Route exact path="/resultFindByIdClienteOrdine">
                  <ResultFindByIdClienteOrdine />
                </Route>

                <Route exact path="/findByIdClienteOrdine">
                  <FindByIdClienteOrdine />
                </Route>

                <Route exact path="/riepilogo">
                  <RiepilogoOrdine />
                </Route>

                
             
              </Switch>     
            </div>

            <div className="App-footer">
              <h3>Developed by Manuele Alboni</h3>
            </div>
          </div>
        </BrowserRouter>
      </CustomContext.Provider>
    </>
  );
}

export default App;
