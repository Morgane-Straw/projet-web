import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '../navbarre/Navbarre';
import sunset_image from '../../sunset.jpg';
import './Exercice.css';

export default class Exercice extends React.Component{

    render(){
        return(
            <div className="Page_Normale"> 
               <h1>Exercices</h1>
               <div className="Images_Exercice">
               <img src={sunset_image} className="Sunset_Image" alt="sunset_image" />
               <img src={sunset_image} className="Sunset_Image" alt="sunset_image" />
               </div>


               <div className="Images_Exercice">
               <img src={sunset_image} className="Sunset_Image" alt="sunset_image" />
               <img src={sunset_image} className="Sunset_Image" alt="sunset_image" />
               </div>
               <Navbarre/>
            </div>
        );
    }


}