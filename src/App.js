import './App.css';
import Home from './components/home/Home';
import Profil from './components/profil/Profil';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component= {Home}/>
      <Route exact path="/profil" component= {Profil}/>
    </div>
  );
}

export default App;
