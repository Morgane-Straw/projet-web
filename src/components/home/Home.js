import React from "react";
import './Home.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';


export default class Home extends React.Component{


    render(){
        return(
            <div className="Home"> 
                <h1>Nom de l'appli</h1>
                <p className="Bienvenue">Bienvenue</p>
                <Link to="/connexion"><button className="Button Bouton_connexion">Se connecter</button></Link>
                <br/><Link to="/inscription"><button className="Button Bouton_inscription">S'inscrire</button></Link>
            
           </div>
        );
    }


}