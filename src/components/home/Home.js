import React from "react";
import './Home.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Home extends React.Component{

    render(){
        return(
            <div className="Home"> 
                <h1>Nom de l'appli</h1>
                <p>Bienvenue</p>
                <Button className="Button btn btn-secondary">Se connecter</Button>
                <br/><button className="Button btn btn-secondary">S'inscrire</button>
            
                <div className="footer btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-light">Left</button>
                <button type="button" class="btn btn-light">Middle</button>
                <button type="button" class="btn btn-light">Right</button>
                <button type="button" class="btn btn-lightk">Right</button>
                <button type="button" class="btn btn-light">Right</button>
                </div>
            
           </div>
        );
    }


}