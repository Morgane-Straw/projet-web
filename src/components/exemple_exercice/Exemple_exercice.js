import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '../navbarre/Navbarre';



export default class Exemple_exercice extends React.Component{

    render(){
        return(
            <div className="Page_Normale"> 
               <h1>Exemple exercice</h1>
               <Navbarre/>
            </div>
        );
    }


}