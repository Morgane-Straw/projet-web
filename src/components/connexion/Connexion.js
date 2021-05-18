import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import ConnexionForm from "./ConnexionForm"
import './Connexion.css';

export default class Connexion extends React.Component{

    render(){
        return(
            <div className="Connexion"> 
               <h1 className="Text_connexion">Connexion</h1>
                <ConnexionForm />
            </div>
        );
    }


}