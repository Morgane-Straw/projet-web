import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Link} from 'react-router-dom';

export default class Navbarre extends React.Component{

    render(){
        return(
            <div className="Navbarre"> 
                <footer>
                    <div className="footer" role="group" aria-label="Basic example">
                    <Link to="/accueil"><button type="button" className="btn btn-light">Accueil</button></Link>
                    <Link to="/exercice"><button type="button" className="btn btn-light">Exercices</button></Link>
                    <button type="button" className="btn btn-light">SOS</button>
                    <Link to="/donnees"><button type="button" className="btn btn-light">Données</button></Link>
                    <Link to="/profil"><button type="button" className="btn btn-light">Profil</button></Link>
                    </div>
                </footer>
            </div>
        );
    }


}