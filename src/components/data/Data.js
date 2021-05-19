import React from "react";
import Stress from "./Stress.js"
import Navbarre from '..//navbarre/Navbarre';

export default class Data extends React.Component{
    render(){
        return(<div>
            <div className="Data"> 
            <div className='stress2'>


            </div> 
              <Stress/>
              
           </div>
            <Navbarre/>
           </div>
        );
    }


}

