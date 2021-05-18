import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '..//navbarre/Navbarre';

export default class Donnees extends React.Component{

    render(){
        return(
            <div className="Donnees"> 
               <h1>Donnees</h1>
               <Navbarre/>
            </div>
        );
    }


}