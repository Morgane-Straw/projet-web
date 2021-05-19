import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '..//navbarre/Navbarre';
import './Accueil.css';
import bibo from '../../Bibo.png';

export default class Accueil extends React.Component{

    render(){
        return(
            <div>
                <div className="Page_Normale Page_centree"> 
                    <img src={bibo} className="Bibo_accueil" alt="bibo" /> 
                    <p className="Text_Bonjour">Bonjour</p>
                    <p className="Text_Humeur">Comment allez-vous aujourd'hui ?</p>
                    <div className="Humeur">
                     blabla
                    </div>
                </div>
                <Navbarre/>
            </div>
        );
    }


}