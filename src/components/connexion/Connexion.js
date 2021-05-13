import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import ConnexionForm from "./ConnexionForm"
export default class Connexion extends React.Component{

    render(){
        return(
            <div className="Connexion"> 
               <h1>Connexion</h1>
                <ConnexionForm />
            </div>
        );
    }


}