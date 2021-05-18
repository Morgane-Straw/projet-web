import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '..//navbarre/Navbarre';

export default class Accueil extends React.Component{

    render(){
        return(
            <div className="Accueil"> 
               <h1>Accueil</h1>
               <Navbarre/>
            </div>
        );
    }


}