import React from "react";
import Parse from 'parse';
import {mean}  from 'simple-statistics'; 
import {standardDeviation} from 'simple-statistics'; 


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
    query1.equalTo("dataID", now()+' '+user);
    var stress_threshold;
    query1.find().then((results) => {
        var object = results[0];        
        var target=document.getElementById('stress');
        target.style.visibility='hidden';
        target.innerHTML=object.get("HR");
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
        var target=document.getElementById('stress');
        var stress_threshold=object.get("stress_threshold");
        var hr=parseInt(target.innerHTML);
        var stress=hr>stress_threshold;   
        if (stress){
          target.innerHTML='<img src="tiramisu.png"><\img>';
        }else{
          target.innerHTML='<img src="tisanes.png"><\img>';
        }
        
        //target.style.visibility='visible';
    }, (error) => {
      if (typeof document !== 'undefined') document.write(`Error while fetching Utilisateur: ${JSON.stringify(error)}`);
      console.error('Error while fetching Utilisateur', error);
    });
}

export default class HR extends React.Component{
    
    render(){
        get_stressLvl();
        return(
            <div id="stress"></div>
            
            
        );
    }


}
