import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Link} from 'react-router-dom';
import './Connexion.css';

export default class ConnexionForm extends React.Component{
    render(){
        return(
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="Text">Adresse mail :</Form.Label>
                <Form.Control className="Entree" type="email" placeholder="Adresse mail" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label className="Text">Mot de passe :</Form.Label>
                <Form.Control className="Entree" type="password" placeholder="Mot de passe" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check className="Text2" type="checkbox" label="Se souvenir de moi" />
            </Form.Group>
            <Link to="/accueil"><button className="Valider" type="submit">
                Valider
            </button></Link>
            </Form>
        );
        }
    }