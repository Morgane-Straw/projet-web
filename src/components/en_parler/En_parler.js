import React from "react";
import './En_parler.css'
import '../accueil/Accueil.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarre from '../navbarre/Navbarre';
import stress_img from '../../asset/stress_img.png';
import travail from '../../asset/travail.png'
import temps from '../../asset/temps1.png'
import relations from '../../asset/relations.png'
import etudes from '../../asset/etudes.png'
import argent from '../../asset/argent.png'
import autre from '../../asset/autre.png'
import envoyer from '../../asset/envoyer.png'
import user_stats from '../data/user_stats';
import writeFile from 'file-system';
import {Route, Link} from 'react-router-dom';


export default class En_parler extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            causes:''
        }
    }

    render(){
        return(
            <div className="Page_Normale"> 
            <div className ="titre"><h1>Connaissez vous la cause de ce stress ?</h1></div>
            <div id="causes" className="causes">
            <form id="travail" className="cause-stress" href="./En_parler.php">
                <input  type="image" name="submit"  src={travail} className='icone-cause-stress'/>
                <p><label className="texte-cause-stress">Travail</label></p>
                </form>
            <form id="relations" className="cause-stress">
                <input  type="image" name="submit"  src={relations} className='icone-cause-stress'/>
                <p><label className="texte-cause-stress">Relations</label></p>
                </form>
            <form id="temps" className="cause-stress">
            <input  type="image" name="submit"  src={temps} className='icone-cause-stress'/>
            <p><label className="texte-cause-stress">Temps</label></p>
                </form>
            <form id="etudes" className="cause-stress">
            <input  type="image" name="submit"  src={etudes} className='icone-cause-stress'/>
            <p><label className="texte-cause-stress">Etudes</label></p>
                </form>
            <form id="argent" className="cause-stress">
            <input  type="image" name="submit"  src={argent} className='icone-cause-stress'/>
            <p><label className="texte-cause-stress">Argent</label></p>
                </form>
            <form id="autre" className="cause-stress">
            <input  type="image" name="submit"  src={autre} className='icone-cause-stress'/>
            <p><label className="texte-cause-stress">Autre</label></p>
                </form>
            </div>
            <div className="sous-titre"><h2>Voulez-vous m’en dire un peu plus ?</h2></div>
            <form>
            <div class="form-group">
                <textarea class="form-control texte-en-parler texte-cause-stress" id="exampleFormControlTextarea1" rows="3">Vous pouvez parlez du contexte de ce stress, si cela est lié à un lieu, une personne etc...</textarea>
                <input  type="image" name="submit" src={envoyer} className="btn-en-parler"/>
                </div>
            </form>
            <div><Link to="/exempleexercice"><button className="Button-sos Button-sos2">Faire un exercice</button></Link></div>
            <Navbarre/>
            </div>
        );
    }



}