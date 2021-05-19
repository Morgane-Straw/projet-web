import React from "react";
import './Home.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import bibo from './Bibo.png';


export default class Home extends React.Component{


    render(){
        return(
            
            <div className="Home"> 
                <div className="div1">
                    <img src={bibo} className="logo-bibo" alt="bibo" />
                    <p className="text_bienvenue">Bienvenue</p>
                </div>   
                <div className="Home2">
                    <Link to="/connexion"><button className="Button Bouton_connexion">Se connecter</button></Link>
                    <br/><Link to="/inscription"><button className="Button Bouton_inscription">S'inscrire</button></Link>
                </div>
                
           </div>
        );
    }


}