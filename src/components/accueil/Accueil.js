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
                <div className="Page_Normale"> 
                    <img src={bibo} className="Bibo_accueil" alt="bibo" /> 
                </div>
                <Navbarre/>
            </div>
        );
    }


}