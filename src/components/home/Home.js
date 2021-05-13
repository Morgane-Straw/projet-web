import React from "react";
import './Home.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';

export default class Home extends React.Component{


    render(){
        return(
            <div className="Home"> 
                <h1>Nom de l'appli</h1>
                <p>Bienvenue</p>
                <Link to="/connexion"><Button className="Button btn btn-secondary">Se connecter</Button></Link>
                <br/><Link to="/inscription"><button className="Button btn btn-secondary">S'inscrire</button></Link>
            
           </div>
        );
    }


}