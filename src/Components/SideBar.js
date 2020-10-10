import React, {Component} from 'react';
import './styles/SideBar.css';

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
			<p className={getClass(0)}> <a href="./#/WhatIsBoccia">LOGO</a></p>,
		    <p className={getClass(1)}> <a href="./#/WhatIsBoccia">מה זה בוצ'ה</a></p>,
		    <p className={getClass(2)}> <a href="./#/BocciaClasses">סיווג</a></p>,
		    <p className={getClass(3)}> <a href="./#/Court">מגרש</a></p>,
		    <p className={getClass(4)}> <a href="./#/Gear">ציוד</a></p>,
		    <p className={getClass(5)}> <a href="./#/Rules">חוקה ושיפוט</a></p>,
		    <p className={getClass(6)}> <a href="./#/Roles">תפקידים</a></p>,
		    <p className={getClass(7)}> <a href="./#/">אסטרטגיה</a></p> ,
		 	<p className={getClass(8)}> <a href="./#/">אתגר אימון </a></p>,
		 	<p className={getClass(9)}> <a href="./#/"> צור קשר </a></p> 
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