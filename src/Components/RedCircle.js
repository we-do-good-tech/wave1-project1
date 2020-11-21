import React , {Component} from 'react';
import redball from '../imgs/redball.png';
import './styles/RedCircle.css'

const RedCircle =({x,y})=>{

		return(
  <img className="ball" src={redball} style={{position: 'absolute',bottom:`${y}%`,left:`${x}%`,width:'1.1vw'}} />
			);


}
export default RedCircle;