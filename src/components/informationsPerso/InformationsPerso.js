import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '../navbarre/Navbarre';



export default class InformationsPerso extends React.Component{

    constructor(props){
        super(props);

        this.state={
            nom: "Nom",
            prenom: "Prénom",
            mail: "mail"
            
        };
    }


    render(){
        return(
            <div className="Page_Normale"> 
               <h1>InformationsPerso</h1>
               <input type="text" value={this.state.nom} onChange= {e=> this.setState({nom : e.target.value})}></input>
                <p>{this.state.nom}</p>
                <input type="text" value={this.state.prenom} onChange= {e=> this.setState({prenom : e.target.value})}></input>
                 <p>{this.state.prenom}</p>
                 <input type="text" value={this.state.mail} onChange= {e=> this.setState({mail : e.target.value})}></input>
                 <p>{this.state.mail}</p>
               <Navbarre/>
            </div>
        );
    }


}
