import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Link} from 'react-router-dom';



export default class InscriptionForm extends React.Component{
    render(){
        return(
            <div className="Fond_Bleu">     
                 <div className="Formulaire Form_inscription">
                    <h1 className="Text_titre">Inscription</h1>

                    <Form.Group className="formBasicEmail">
                        <Form.Label className="Text">Adresse mail:</Form.Label>
                        <Form.Control className="Entree" type="email" placeholder="Addresse mail" />
                    </Form.Group>

                    <Form.Group className="formBasicPassword">
                        <Form.Label className="Text">Mot de passe :</Form.Label>
                        <Form.Control className="Entree" type="password" placeholder="Mot de passe" />
                    </Form.Group>

                    <Form.Group className="formBasicPassword">
                        <Form.Label className="Text">Confirmation :</Form.Label>
                        <Form.Control className="Entree" type="password" placeholder="Confirmation de mot de passe" />
                    </Form.Group>
                    <Link to="/accueil"><button className="Valider" type="submit">
                        Valider
                    </button></Link>
                    </div>
            
            </div>
        );
        }
    }