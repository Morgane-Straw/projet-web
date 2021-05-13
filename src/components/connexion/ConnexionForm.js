import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class ConnexionForm extends React.Component{
    render(){
        return(
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Adresse mail :</Form.Label>
                <Form.Control type="email" placeholder="Adresse mail" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Mot de passe :</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Se souvenir de moi" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        );
        }
    }