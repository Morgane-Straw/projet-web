import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Profil from './components/profil/Profil';
import Connexion from './components/connexion/Connexion';
import Inscription from './components/inscription/Inscription';
import Data from './components/data/Data';
import Exercice from './components/exercice/Exercice';
import Donnees from './components/donnees/Donnees';
import Accueil from './components/accueil/Accueil';
import Navbarre from './components/navbarre/Navbarre';
import SOS from './components/sos/Sos';
import Exemple_exercice from './components/exemple_exercice/Exemple_exercice';
import En_parler from './components/en_parler/En_parler';
import reportWebVitals from './reportWebVitals';
import {Route, Link} from 'react-router-dom';
import Aide from './components/aide/Aide';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component= {Home}/>
      <Route exact path="/profil" component= {Profil}/>
      <Route exact path="/connexion" component= {Connexion}/>
      <Route exact path="/inscription" component= {Inscription}/>
      <Route exact path="/data" component= {Data}/>
      <Route exact path="/exercice" component= {Exercice}/>
      <Route exact path="/en_parler" component= {En_parler}/>
      <Route exact path="/donnees" component= {Donnees}/>
      <Route exact path="/accueil" component= {Accueil}/>
      <Route exact path="/sos" component= {SOS}/>
      <Route exact path="/exempleexercice" component= {Exemple_exercice}/>
      <Route exact path="/aide" component= {Aide}/>
    </div>
  );
}

export default App;
