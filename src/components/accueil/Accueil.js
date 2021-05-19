import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '..//navbarre/Navbarre';
import sun_logo from '../../sun.png';
import './Accueil.css';
import bibo from '../../Bibo.png';
import Humeur from "../data/Humeur.js"

export default class Accueil extends React.Component{

    render(){
        return(
            <div>
                <div className="Page_Normale Page_centree"> 
                    <img src={bibo} className="Bibo_accueil" alt="bibo" /> 
                    <p className="Text_Bonjour">Bonjour</p>
                    
                    <div className="Humeur">
                        <Humeur/>
                       
                    </div>
                </div>
                <Navbarre/>
            </div>
        );
    }


}
/*<p className="Text_Humeur">Comment allez-vous aujourd'hui ?</p>
                    <img src={sun_logo} className="Sun_Logo" alt="sun_logo" />*/