import React from "react";
import './Sos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Link} from 'react-router-dom';
import Navbarre from '../navbarre/Navbarre';
import stress_img from '../../asset/stress_img.png';


export default class Sos extends React.Component{

    render(){
        return(
            <div className="Page_Normale"> 
               <img src={stress_img} className="Sos_img"></img>
            <div className="Texte-sos"> Vous semblez angoissé...</div>
            <div><Link to="/exempleexercice"><button className="Button_SOS faire-exercice" >Faire un exercice</button></Link></div>
            <div><Link to="/en_parler" ><button className="Button_SOS en-parler">En parler</button></Link></div>

            <div><Link to="/aide"><button className="Button_SOS recevoir-aide">Recevoir de l'aide</button></Link></div>
           <Navbarre/>
            </div>
        );
    }


}