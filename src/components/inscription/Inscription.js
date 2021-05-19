import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import InscriptionForm from "./InscriptionForm";
import './Inscription.css';

export default class Inscription extends React.Component{

    render(){
        return(
            <div className="Inscription"> 
               <InscriptionForm/>
           </div>
        );
    }
}