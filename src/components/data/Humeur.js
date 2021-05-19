import React from "react";
import "./Humeur.css"
import"../accueil/Accueil.css"
import user_stress from './user_stress';
import user_stats from './user_stats';
import normal_img from '../../asset/normal_img.png';
import relaxation_img from '../../asset/relaxation_img.png';
import stress_img from '../../asset/stress_img.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function now(){
    const time = new Date(Date.now());
    var time_str = time.getDate()+'/'+(time.getMonth()+1)+'/'+time.getFullYear()+' '+time.getHours()+':'+time.getMinutes()
    //10/4/2021 9:22:00 PM
    return time_str
  }
  
function show_stressLvl(){
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
    const relaxation_threshold = user_stats.map((user_stats)=>{

        for (var i in user_stats.userId ){
            if(user==user_stats.userId[i]){
                            return(user_stats.relaxation_threshold[i]);
            }
        }
        
    }).reduce((a, b) => a + b, 0);   
    var stress=hr>stress_threshold;
    var relax=hr<relaxation_threshold;

    var img=document.getElementById('img-humeur');
    var txt=document.getElementById('txt-humeur');
    if (stress){
        img.src=stress_img;
        txt.innerText="Ca n’a pas l’air d’aller...";
      }else{
        if(relax){
          img.src=relaxation_img;
          txt.innerText="Vous avez l’air de bonne humeur !";
        }
      else{
        img.src=normal_img;
        txt.innerText="Envie d’un moment de détente ?";
    
    }
      }
      return(hr);
    }

export default class Humeur extends React.Component{
    render(){
        return(
          <div id="Humeur">
          <img id='img-humeur' className="Img_Humeur"></img>
          <div id='txt-humeur' className="Text_Humeur_2"></div>
          </div>

        );
    }
    componentDidMount(){
        console.log(show_stressLvl());
    }
}


/*        if (stress==1){
          img.src=stress_img;
          txt.innerText="Ca n’a pas l’air d’aller...";
        }else{
          if(stress==-1){
            img.src=relaxation_img;
            txt.innerText="Vous avez l’air de bonne humeur !";
          }
        else{
          img.src=relaxation_img;
          txt.innerText="Envie d’un moment de détente ?";
        }}*/ 