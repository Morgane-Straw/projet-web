import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '../navbarre/Navbarre';
import sunset_image from '../../asset/sunset.jpg';
import arbre_image from '../../asset/arbre.jpg';
import ocean_image from '../../asset/ocean.jpg';
import prairie_image from '../../asset/prairie.jpg';


import './Exercice.css';

export default class Exercice extends React.Component{

    render(){
        return(
            <div className="Page_Normale"> 
               <h1 className="Text_Exercice">Exercices</h1>
               <div className="Type_Exercice">
                    <p className="Text_Type"> Par type</p>
               </div>

               <div className="Images_Exercice">
               <img src={arbre_image} className="Sunset_Image" alt="sunset_image" />
               <img src={sunset_image} className="Sunset_Image" alt="sunset_image" />
               <img src={sunset_image} className="Sunset_Image" alt="sunset_image" />
               </div>
         
               <div className="Type_Exercice">
                    <p className="Text_Type"> Par durée</p>
               </div>
         

               <div className="Images_Exercice2">
               <img src={prairie_image} className="Sunset_Image" alt="prairie_image" />
               <img src={ocean_image} className="Sunset_Image" alt="ocean_image" />
               <img src={sunset_image} className="Sunset_Image" alt="sunset_image" />
               </div>
               <Navbarre/>
            </div>
        );
    }


}