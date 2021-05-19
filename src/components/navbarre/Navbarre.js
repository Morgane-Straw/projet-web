import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Link} from 'react-router-dom';
import home_logo from '../../home.png';
import coeur_logo from '../../coeur.png';
import profil_logo from '../../face.png';
import zen_logo from '../../zen.png';
import sos_logo from '../../sos.png';
import './Navbarre.css';

export default class Navbarre extends React.Component{

    render(){
        return(
            <div className="Navbarre"> 
                <footer>
                <Link to="/accueil"><img src={home_logo} className="Nav_logos" alt="home_logo" /></Link>
                <Link to="/exercice"><img src={zen_logo} className="Nav_logos" alt="home_logo" /></Link>
                <Link to="/sos"><img src={sos_logo} className="Nav_logos SOS" alt="sos_logo" /></Link> 
                <Link to="/donnees"><img src={coeur_logo} className="Nav_logos" alt="home_logo" /></Link>
                <Link to="/profil"><img src={profil_logo} className="Nav_logos" alt="home_logo" /></Link>
                
                </footer>
            </div>
        );
    }


}