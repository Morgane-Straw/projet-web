import React from "react";
import './Donnees.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '..//navbarre/Navbarre';

export default class Donnees extends React.Component{

    render(){
        return(
            <div className="Page_Normale"> 
               <h1 className="titre">Données</h1>
               <Navbarre/>
            </div>
        );
    }


}