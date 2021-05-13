import React from "react";
import './Button.css';
import './Home.css';

import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import bibo from "../../assets/bibo.png";
export default class Home extends React.Component{

    render(){
        return(
            <div className="Home"> 
                <div className="top-login">
                    <img src={bibo} className="logo" alt="logo" />
                    <p className="bienvenue">Bienvenue</p>
                </div>
                <Button className="Button btn btn-blue"><span className= "white-text">Se connecter</span></Button>
                <br/><button className="Button btn btn-light-gray"><span className= "blue-text">S'inscrire</span></button>
                <div className="footer btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-light">Left</button>
                <button type="button" className="btn btn-light">Middle</button>
                <button type="button" className="btn btn-light">Right</button>
                <button type="button" className="btn btn-lightk">Right</button>
                <button type="button" className="btn btn-light">Right</button>
                </div>
            
           </div>
        );
    }


}