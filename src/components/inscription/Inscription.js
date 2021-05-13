import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import InscriptionForm from "./InscriptionForm";
export default class Inscription extends React.Component{

    render(){
        return(
            <div className="Inscription"> 
               <h1>Inscription</h1>
               <InscriptionForm/>
           </div>
        );
    }
}