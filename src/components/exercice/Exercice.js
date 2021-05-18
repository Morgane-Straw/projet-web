import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '../navbarre/Navbarre';


export default class Exercice extends React.Component{

    render(){
        return(
            <div className="Exercice"> 
               <h1>Exercices</h1>
               <Navbarre/>
            </div>
        );
    }


}