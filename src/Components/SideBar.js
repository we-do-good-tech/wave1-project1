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
			<a href="./#/WhatIsBoccia" ><img className="Logo" src={WhiteLogo}/></a>,
		    <p className={getClass(1)}> <a href="./#/WhatIsBoccia">מה זה בוצ'ה?</a></p>,
		    <p className={getClass(2)}> <a href="./#/HowToPlay">איך משחקים?</a></p>,
		    <p className={getClass(3)}> <a href="./#/BocciaClasses">סיווג</a></p>,
		    <p className={getClass(4)}> <a href="./#/Rules">חוקים</a></p>,
		    <p className={getClass(5)}> <a href="./#/MeetThePlayers">פגשו את השחקנים</a></p>,
		 	<p className={getClass(6)}> <a href="./#/Contact"> צור קשר </a></p> 
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