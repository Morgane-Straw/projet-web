import React from "react";
import './Profil.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '../navbarre/Navbarre';
import photo_profil from '../../asset/photo_profil.png';
import InformationsPerso from '../informationsPerso/InformationsPerso';
import {Route, Link} from 'react-router-dom';

export default class Profil extends React.Component{

 

    render(){
        return(
            <div className="Page_Normale Page_Profil">
                <p className="Text_Profil">Profil</p>
                <div className="Infos_Perso">
                    <img src={photo_profil} className="Photo_Profil" alt="photo_profil" />
                    <p className="Nom_Prenom">Nom Prénom</p>
                    <p className="Mail">adressemail@gmail.com</p>
                </div> 
                <div className="Gerer_Profil">
                    <div className="Box_Profil Infos_Compte">
                        <p className = "Text_InfosTitre Text_InfosPerso">Mon compte</p>
                        <Link to="/informationsPerso"><p className = "Text_InfosPerso ">Mes informations personnelles</p></Link>
                        <p className = "Text_InfosPerso Text_Centre">Changer de mot de passe</p>
                        <p className = "Text_InfosPerso">Mes préférences</p>
                    </div> 
                    <div className="Box_Profil Infos_paramètre">
                        <p className = "Text_InfosTitre Text_Param">Mon compte</p>
                        <p className = "Text_Param ">Notifications et rappels</p> 
                        <p className = "Text_Param Text_Centre2">Langue</p> 
                        <p className = "Text_Param ">Support</p> 
                    </div> 
                    <div className="Box_Profil Infos_Compte">
                        <p className = "Text_InfosTitre Text_InfosPerso">Mon compte</p>
                        <p className = "Text_InfosPerso ">Mes informations personnelles</p>
                        <p className = "Text_InfosPerso Text_Centre">Mes informations personnelles</p>
                        <p className = "Text_InfosPerso">Mes informations personnelles</p>
                    </div> 
                </div>
               <Navbarre/>
           </div>
        );
    }


}