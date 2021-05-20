import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '..//navbarre/Navbarre';
import sun_logo from '../../sun.png';
import './Accueil.css';
import bibo from '../../Bibo.png';
import Humeur from "../data/Humeur.js";
import Sos from "../sos/Sos.js";
import user_stress from '../data/user_stress';
import user_stats from '../data/user_stats';
import {now} from  "../data/Humeur.js";

export default class Accueil extends React.Component{
    constructor(props) {
        super(props);
    
    
        this.state = {
            stress: get_Stress(),
            relax:get_Relax()
          }
      }

    render(){
        return(
            <div>
                {!this.state.stress?<div  id= 'Accueil' className="Page_Normale Page_centree"> 
                    <img src={bibo} className="Bibo_accueil" alt="bibo" /> 
                    <p className="Text_Bonjour">Bonjour</p>
                    
                    <div className="Humeur">
                        <Humeur/>
                       
                    </div>
                </div> :
                <div  id="Sos" className="Sos"><Sos/></div>}
                <Navbarre/>
            </div>
        );

    }


}

  function get_Stress(){
        const user=1
        const id=now()+' '+user;
        const hr = user_stress.map((user_stress)=>{
            for (var i in user_stress.dataId ){
            if(id==user_stress.dataId[i]){
                return(user_stress.HR[i]);
            }
            }
            
        }).reduce((a, b) => a + b, 0);
    const stress_threshold = user_stats.map((user_stats)=>{

        for (var i in user_stats.userId ){
            if(user==user_stats.userId[i]){
                
                            return(user_stats.stress_threshold[i]);
            }
        }
        
        }).reduce((a, b) => a + b, 0);   
        return(hr>stress_threshold);
  }
  function get_Relax(){
    const user=1
    const id=now()+' '+user;
    const hr = user_stress.map((user_stress)=>{
        for (var i in user_stress.dataId ){
        if(id==user_stress.dataId[i]){
            return(user_stress.HR[i]);
        }
        }
        
    }).reduce((a, b) => a + b, 0);
    const relaxation_threshold = user_stats.map((user_stats)=>{

        for (var i in user_stats.userId ){
            if(user==user_stats.userId[i]){
                            return(user_stats.relaxation_threshold[i]);
            }
        }
        
    }).reduce((a, b) => a + b, 0);   

    return(hr<relaxation_threshold);
}