import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '../navbarre/Navbarre';
import './Aide.css'


export default class Aide extends React.Component{

    render(){
        return(
            <div className="Page_Normale"> 
               <h1 className='titre'>Recevoir de l'aide</h1>
               <Navbarre/>
            </div>
        );
    }


}