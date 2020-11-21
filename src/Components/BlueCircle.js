import React , {Component} from 'react';
import blueball from '../imgs/blueball.png';


const BlueCircle =({x,y})=>{

		return(
  <img className="ball" src={blueball} style={{position: 'absolute',bottom:`${y}%`,left:`${x}%`,width:'1.15vw'}} />
			);


}
export default BlueCircle;