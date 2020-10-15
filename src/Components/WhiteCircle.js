import React , {Component} from 'react';
import whiteball from '../imgs/whiteball.png';


const WhiteCircle =({x,y})=>{

		return(
				<img className="ball" src={whiteball} style={{position: 'absolute',bottom:`${y}%`,left:`${x}%`,width:'1.2vw'}}/>
			);


}
export default WhiteCircle;