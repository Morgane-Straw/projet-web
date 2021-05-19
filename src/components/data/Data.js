import React from "react";
import StressLvl from "./Stress"
import Navbarre from '..//navbarre/Navbarre';

export default class Data extends React.Component{
    render(){
        return(<div>
            <div className="Data"> 
              <StressLvl/>
              
           </div>
            <Navbarre/>
           </div>
        );
    }


}

