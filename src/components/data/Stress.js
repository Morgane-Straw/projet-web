import React from "react";
import Parse from 'parse';
import './Stress.css';
import {mean}  from 'simple-statistics'; 
import {standardDeviation} from 'simple-statistics'; 
import normal_img from '../../asset/normal_img.PNG';
import relaxation_img from '../../asset/relaxation_img.jpg';
import stress_img from '../../asset/stress_img.png';

function now(){
  const time = new Date(Date.now());
  var time_str = time.getDate()+'/'+(time.getMonth()+1)+'/'+time.getFullYear()+' '+time.getHours()+':'+time.getMinutes()
  //10/4/2021 9:22:00 PM
  return time_str
}
function get_HR(){
    
    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
      'Uxrn1se1WkRL8vnnfKkMQvfuccXD7Ar7fKNTcyN2', // This is your Application ID
      'nrYhcWChbWblkQcKB3aYMLjVhZbkP4tw1aVAVHeh' // This is your Javascript key
    );
      
    const user =1;
    const Utilisateur = Parse.Object.extend('Utilisateur');
    const query = new Parse.Query(Utilisateur);
    query.equalTo("dataID", now()+' '+user);
    var value=0;  
    query.find().then((results) => {
        const object = results[0];
      var hr=document.getElementById('hr');
      hr.innerHTML=object.get("HR");
      hr.style.visibility='hidden';
      //console.log(hr.innerHTML);
      //console.log(now());
      
    }, (error) => {
      if (typeof document !== 'undefined') document.write(`Error while fetching Utilisateur: ${JSON.stringify(error)}`);
      console.error('Error while fetching Utilisateur', error);
    });
}
function get_stressLvl(){
    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    Parse.initialize(
      'Uxrn1se1WkRL8vnnfKkMQvfuccXD7Ar7fKNTcyN2', // This is your Application ID
      'nrYhcWChbWblkQcKB3aYMLjVhZbkP4tw1aVAVHeh' // This is your Javascript key
    );
      
    const user =1;
    const Utilisateur = Parse.Object.extend('Utilisateur');
    const query1 = new Parse.Query(Utilisateur);
    var hr=[];
    query1.equalTo("dataID", now()+' '+user);
    query1.find().then((results) => {
        var object = results[0];       
        var target=document.getElementById('hr');
        target.style.visibility='hidden'; 
        target.innerHTML=object.get("HR");
        hr.push(object.get("HR"))
    }, (error) => {
      if (typeof document !== 'undefined') document.write(`Error while fetching Utilisateur: ${JSON.stringify(error)}`);
      console.error('Error while fetching Utilisateur', error);
    });
    Parse.initialize(
      'Uxrn1se1WkRL8vnnfKkMQvfuccXD7Ar7fKNTcyN2', // This is your Application ID
      'nrYhcWChbWblkQcKB3aYMLjVhZbkP4tw1aVAVHeh' // This is your Javascript key
    );
    const User_stats = Parse.Object.extend('User_Stats');
    const query2 = new Parse.Query(User_stats);    
    query2.equalTo("userId", ''+user);
    query2.find().then((results) => {
        var object = results[0];
        var img=document.getElementById('img-stress');
        var txt=document.getElementById('txt-stress');
        var stress_threshold=object.get("stress_threshold");
        var relaxation_threshold=object.get("relaxation_threshold");
        //var hr=parseInt(document.getElementById('hr').innerHTML);
        console.log(hr[0]);
        //console.log(document.getElementById('hr').innerText);
        //console.log(hr+'<?'+stress_threshold);
        var stress=hr[0]>stress_threshold;
        var relax= hr[0]<relaxation_threshold;  
        if (stress){
          img.src=stress_img;
          txt.innerText="Ca n’a pas l’air d’aller...";
        }else{
          if(relax){
            img.src=relaxation_img;
            txt.innerText="Vous avez l’air de bonne humeur !";
          }
        else{
          img.src=relaxation_img;
          txt.innerText="Envie d’un moment de détente ?";
        }}
        
      }, (error) => {
      if (typeof document !== 'undefined') document.write(`Error while fetching Utilisateur: ${JSON.stringify(error)}`);
      console.error('Error while fetching Utilisateur', error);
    });
}

export default class StressLvl extends React.Component{
    
    render(){
        get_stressLvl();
        return(
            <div className='stress_lvl'>
              <div id="hr"></div>
              <img src='' id="img-stress"></img>
              <div id="txt-stress"></div>
            </div> 
        );
    }


}
/*export default class Stressed extends React.Component{
    
  render(){
      get_stressLvl();
      return(
          <img src="tiramisu.png"><\img>
          
      );
  }


}**/
