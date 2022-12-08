import './App.css';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Suspense } from "react";
import Login from './pages/login';
import Flores from './pages/flores';
import IsAuth from './middleware/isAuth';
import Colecionadores from './pages/colecionadores/components/Colecionadores';
import Cadastro from './pages/cadastro';
import AdicionarJardim from './pages/adicionarJardim/components/AdicionarJardim';

function App() {
  const renderLoader = () => <div className="loader"></div>;
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={renderLoader()}>
          <Switch>
            <Route path="/" element={<IsAuth><Flores /></IsAuth> || <Login />} />
            <Route path="/cadastro" element={ <Cadastro />}/>
            <Route path="/login" element={ <Login />}/>
            <Route path="/flores" element={<IsAuth><Flores /></IsAuth>}/>
            <Route path="/colecionadores" element={<IsAuth><Colecionadores /></IsAuth>}/>
            <Route path="/adicionarJardim/:id" element={<IsAuth><AdicionarJardim /></IsAuth>}/>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
