import React from "react";
import Parse from 'parse';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '..//navbarre/Navbarre';
import './Accueil.css';
import bibo from '../../Bibo.png';
import Humeur from "../data/Humeur.js";
import Sos from "../sos/Sos.js";
import {now} from  "../data/Humeur.js";

export default class Accueil extends React.Component{
    constructor(props) {
        super(props);
        // N’appelez pas `this.setState()` ici !
        this.state = { stress: false };
      }
    render(){
        return(
            <div>{!this.state.stress?<div  id= 'Accueil' className="Page_Normale Page_centree"> 
                    <img src={bibo} className="Bibo_accueil" alt="bibo" /> 
                    <p className="Text_Bonjour">Bonjour</p>
                    
                    <div className="Humeur">
                        <Humeur data={this.props.match.params.user}/>
                       
                    </div>
                </div> :
                <div  id="Sos" className="Sos"><Sos/></div>}
                            
            <Navbarre/>
            </div>
        );
    }
    componentDidMount(){
        Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
        Parse.initialize(
          'Uxrn1se1WkRL8vnnfKkMQvfuccXD7Ar7fKNTcyN2', // This is your Application ID
          'nrYhcWChbWblkQcKB3aYMLjVhZbkP4tw1aVAVHeh' // This is your Javascript key
        );
        const user=1;
        console.log(user);
        const id=now()+' '+user;
        const Utilisateur = Parse.Object.extend('Utilisateur');
        const query = new Parse.Query(Utilisateur);
        query.equalTo("dataID", id);
        query.find().then((results) => {
          const object = results[0];
          const HR = object.get("HR")
          const User_Stats = Parse.Object.extend('User_Stats');
          const query2 = new Parse.Query(User_Stats);
          query2.equalTo("userId", ''+user);
          query2.find().then((results) => {
            const object2 = results[0];
      
            const stress_threshold = object2.get("stress_threshold")
      
            const stress = HR>stress_threshold;
      
            if (typeof document !== 'undefined'){

      
              if (stress){
                  this.setState({'stress':'true'});
                }
            console.log('stress threshold:', stress_threshold);
            console.log('stress:', stress);
      
        }}, (error) => {
            if (typeof document !== 'undefined') {
            document.write(`Error while fetching User_Stats: ${JSON.stringify(error)}`);
            console.error('Error while fetching User_Stats', error);
          }
        });
          if (typeof document !== 'undefined'){
          console.log('HR:', HR);
          }
        }, (error) => {
          if (typeof document !== 'undefined') {
          document.write(`Error while fetching Utilisateur: ${JSON.stringify(error)}`);
          console.error('Error while fetching Utilisateur', error);
          }
        });
      
       
    }
}
