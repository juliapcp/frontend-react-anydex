import './App.css';
import { BrowserRouter, Navigate, Route, Routes as Switch } from "react-router-dom";
import { Suspense } from "react";
import Login from './pages/login';

function App() {
  const renderLoader = () => <div className="loader"></div>;
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={renderLoader()}>
          <Switch>
            <Route path="/login" element={ <Login />}/>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
