import React from "react";
import Stress from "./Stress"
import Navbarre from '..//navbarre/Navbarre';

export default class Data extends React.Component{
    render(){
        return(<div>
            <div className="Data"> 
              <Stress/>
              
           </div>
            <Navbarre/>
           </div>
        );
    }


}

