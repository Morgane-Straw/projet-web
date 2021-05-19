import React from "react";
import './Home.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import bibo from '../../Bibo.png';


export default class Home extends React.Component{


    render(){
        return(
            <div>
            <div className="Fond_Bleu">  
                    <img src={bibo} className="logo-bibo" alt="bibo" />
                    <p className="text_bienvenue">Bienvenue</p>
                    <Link to="/connexion"><button className="Button Bouton_connexion">Se connecter</button></Link>
                    <br/><Link to="/inscription"><button className="Button Bouton_inscription">S'inscrire</button></Link>
            </div>   
            </div>
        );
    }


}