import React from "react";
import './Profil.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '..//navbarre/Navbarre';
export default class Profil extends React.Component{

    render(){
        return(
            <div className="Page_Normale"> 
               <h1>Profil</h1>
               <Navbarre/>
           </div>
        );
    }


}