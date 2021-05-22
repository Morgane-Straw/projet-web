import React from "react";
import Parse from 'parse';
import "./Humeur.css"
import"../accueil/Accueil.css"
import user_stress from './user_stress';
import user_stats from './user_stats';
import normal_img from '../../asset/normal_img.png';
import relaxation_img from '../../asset/relaxation_img.png';
import stress_img from '../../asset/stress_img.png';



export function now(){
    const time = new Date(Date.now());
    var time_str = time.getDate()+'/'+(time.getMonth()+1)+'/'+time.getFullYear()+' '+time.getHours()+':'+time.getMinutes()
    //10/4/2021 9:22:00 PM
    return time_str
  }
  


export default class Humeur extends React.Component{
  constructor(props) {
    super(props);
    this.state = { hr: 0 };
    
  }
    render(){
        return(
          <div id="Humeur">
          <img id='img-humeur' className="Img_Humeur"></img>
          <div id='txt-humeur' className="Text_Humeur_2"></div>
          </div>

        );
    }
    componentDidMount(){
      show_stressLvl();
    }

}


function show_stressLvl()
{
  Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
  Parse.initialize(
    'Uxrn1se1WkRL8vnnfKkMQvfuccXD7Ar7fKNTcyN2', // This is your Application ID
    'nrYhcWChbWblkQcKB3aYMLjVhZbkP4tw1aVAVHeh' // This is your Javascript key
  );
  const user=1
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
      const relaxation_threshold = object2.get("relaxation_threshold")
      const stress = HR>stress_threshold;
      const relax = HR<relaxation_threshold;
      if (typeof document !== 'undefined'){
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
      console.log('stress threshold:', stress_threshold);
      console.log('relaxation threshold:', relaxation_threshold);
      console.log('stress:', stress);
      console.log('relax:', relax);

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
