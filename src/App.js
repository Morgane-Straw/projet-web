import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Profil from './components/profil/Profil';
import Connexion from './components/connexion/Connexion';
import Inscription from './components/inscription/Inscription';
import Data from './components/data/Data';
import reportWebVitals from './reportWebVitals';

import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component= {Home}/>
      <Route exact path="/profil" component= {Profil}/>
      <Route exact path="/connexion" component= {Connexion}/>
      <Route exact path="/inscription" component= {Inscription}/>
      <Route exact path="/data" component= {Data}/>
      <footer>
      <div className="footer" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-light">Accueil</button>
                <button type="button" class="btn btn-light">Exercices</button>
                <button type="button" class="btn btn-light">Données</button>
                <button type="button" class="btn btn-light">Profil</button>
                </div>
      </footer>

    </div>
  );
}

export default App;
