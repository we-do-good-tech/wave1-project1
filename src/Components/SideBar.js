import React, {Component} from 'react';
import './styles/SideBar.css';
import WhiteLogo from '../imgs/WhiteLogo.png'

class SideBar extends Component {
	constructor({active}){
		super();
		this.state = {  
			active:active
	  	}

	}


	render(){

		const getClass=(number)=>{
			if(number===parseInt(this.state.active))
				return("activesidenavtabs sidenavtabs");
			else
				return("sidenavtabs");
		}


		let pages = [
			<div id="LogoDiv"><a href="./#/Home"><img className="Logo" src={WhiteLogo}/></a></div>,
			<p className={getClass(1)}> <a href="./#/Home">דף הבית</a></p>,
		    <p className={getClass(2)}> <a href="./#/WhatIsBoccia">מה זה  <br/>בוצ'ה?</a></p>,
		    <p className={getClass(3)}> <a href="./#/HowToPlay">איך  <br/>משחקים?</a></p>,
		    <p className={getClass(4)}> <a href="./#/BocciaClasses">סיווג</a></p>,
		    <p className={getClass(5)}> <a href="./#/Rules"> חוקי המשחק </a></p>,
		    <p className={getClass(6)}> <a href="./#/MeetThePlayers"> בוצ'ה בתקשורת </a></p>,
		 	<p className={getClass(7)}> <a href="./#/Contact"> צור קשר </a></p> 
		]
		

		
		return(
			<div>				
				<div className="sidenavbar">
					{pages}
				</div>		
			</div>

		)	
		

	}
}

export default SideBar;