import React from "react";
import Parse from 'parse';

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
        //console.log(results.toString());
        const object = results[0];
           /*
      //const Time = object.get("Time")
      return object.get("Value")
      const field1 = object.get("field1")
      const userId = object.get("userId")
      const dataId = object.get("dataId")
      if (typeof document !== 'undefined')
      document.write(`Utilisateur found: ${JSON.stringify(Time)}`);
      document.write(`Utilisateur found: ${JSON.stringify(Value)}`);
      document.write(`Utilisateur found: ${JSON.stringify(field1)}`);
      document.write(`Utilisateur found: ${JSON.stringify(userId)}`);
      document.write(`Utilisateur found: ${JSON.stringify(dataId)}`);
      console.log('Utilisateur found:', Time);
      console.log('Utilisateur found:', Value);
      console.log('Utilisateur found:', field1);
      console.log('Utilisateur found:', userId);
      console.log('Utilisateur found:', dataId);*/
      var hr=document.getElementById('hr');
      hr.innerHTML=object.get("HR");
      //hr.style.visibility='hidden';
      //console.log(hr.innerHTML);
      //console.log(now());
      
    }, (error) => {
      if (typeof document !== 'undefined') document.write(`Error while fetching Utilisateur: ${JSON.stringify(error)}`);
      console.error('Error while fetching Utilisateur', error);
    });
    
}

export default class HR extends React.Component{
  render(){
   return(<div id="hr">{get_HR()}</div>);
}
}