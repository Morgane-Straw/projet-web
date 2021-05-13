import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class InscriptionForm extends React.Component{
    render(){
        return(
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Adresse mail:</Form.Label>
                <Form.Control type="email" placeholder="Addresse mail" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Mot de passe :</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirmation :</Form.Label>
                <Form.Control type="password" placeholder="Confirmation de mot de passe" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Valider
            </Button>
            </Form>
        );
        }
    }