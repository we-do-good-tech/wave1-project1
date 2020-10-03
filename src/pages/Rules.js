import React, {Component} from 'react';
import './styles/Gear.css';

class Gear extends Component {
	constructor(){
		super();
		this.state = {  
			active:1
	  	}

	}

	handleclick=(evt)=>{
		this.setState({active:evt.target.value});
			console.log(this.state.active)
	}
	handlearrow=(evt)=>{
		if(evt.target.value==1){
			if(this.state.active==1){
				this.setState({active:5})
			}
			else{
				this.setState({active:parseInt(this.state.active)-1})
			}
		}
		else if(evt.target.value==2){
			if(this.state.active==5){
				this.setState({active:1})
			}
			else{
				this.setState({active:parseInt(this.state.active)+1})
			}
		}		
	}

	render(){

	let GetDivButton=()=>{
			if(this.state.active==2)
			{
				return(
					<div id="GearMainButtonDiv">
						<button className="GearMainButton GearMainButtonActive rightcurved"><p>חוק אחד</p></button>
						<button className="GearMainButton"><p>חוק שני</p></button>
						<button className="GearMainButton"><p>חוק שלישי</p></button>	
						<button className="GearMainButton leftcurved"><p>תרגול</p></button>
					</div>
				);
			}

			if(this.state.active==3)
				{
					return(
						<div id="GearMainButtonDiv">
							<button className="GearMainButton rightcurved"><p>חוק אחד</p></button>
							<button className="GearMainButton GearMainButtonActive"><p>חוק שני</p></button>
							<button className="GearMainButton"><p>חוק שלישי</p></button>	
							<button className="GearMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}
			if(this.state.active==4)
				{
					return(
						<div id="GearMainButtonDiv">
							<button className="GearMainButton rightcurved"><p>חוק אחד</p></button>
							<button className="GearMainButton"><p>חוק שני</p></button>
							<button className="GearMainButton GearMainButtonActive"><p>חוק שלישי</p></button>	
							<button className="GearMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}	
			if(this.state.active==5)
				{
					return(
						<div id="GearMainButtonDiv">
							<button className="GearMainButton rightcurved"><p>חוק אחד</p></button>
							<button className="GearMainButton"><p>חוק שני</p></button>
							<button className="GearMainButton"><p>חוק שלישי</p></button>								
							<button className="GearMainButton GearMainButtonActive leftcurved"><p>תרגול</p></button>
						</div>
					);
				}	

	}

	let GetDivContent=()=>{
		if(this.state.active==1)
			{
				return(
					<div id="GearContentDivFirstState">
						<p>הסבר ממש קצר של גג שתי שורות</p>
						<p>הסבר ממש קצר של גג שתי שורות</p>
						<div id="GearContentDivFirstStatePage">
								<button className="GearFirstStatePageButton" onClick={this.handleclick} value="2">01<br/>חוק אחד</button>
								<button className="GearFirstStatePageButton" onClick={this.handleclick} value="3">02<br/>חוק שני</button>
								<button className="GearFirstStatePageButton" onClick={this.handleclick} value="4">03<br/>חוק שלישי</button>
								<button className="GearFirstStatePageButton" onClick={this.handleclick} value="5">04<br/> תרגול </button>
							
						</div>
					</div>
				)
			}
			if(this.state.active==2)
				{
					return(
						<div id="BocciaClassesContentDiv">
									<p id="BocciaClassesContentText">
									1
									</p>						
						</div>
					)
				}
			if(this.state.active==3)
				{
					return(
						<div id="GearContentDiv">
									<p id="GearContentText">
									2
									</p>						
						</div>
					)
				}
			if(this.state.active==4)
				{
					return(
						<div id="GearContentDiv">
									<p id="GearContentText">
									3
									</p>						
						</div>
					)				
				}	
			if(this.state.active==5)
				{
					return(
						<div id="GearContentDiv">
									<p id="GearContentText">
									4
									</p>						
						</div>
					)				
				}			
	}

	let GetDivFrontBack=()=>{
		if(this.state.active!=1){
			return(
				<div>
					<div id="BackButton">
						<button value="1" onClick={this.handlearrow} className="FrontBackButtons">
							🡺  הקודם
						</button>
					</div>
					<div id="FrontButton">
						<button value="2" onClick={this.handlearrow} className="FrontBackButtons">
							הבא 🢀
						</button>
					</div>		
			</div>
			);
		}
}

	return(
		<div>
			<div className="sidenavbar" >
				<p className="sidenavtabs"> <a href="./#/WhatIsBoccia">LOGO</a></p>
	        	<p className="sidenavtabs"> <a href="./#/WhatIsBoccia">ארגון הבוצ'ה</a></p>
	        	<p className="sidenavtabs"> <a href="./#/BocciaClasses">סיווגים</a></p>
	         	<p className="sidenavtabs"> <a href="./#/Court">מגרש</a></p>
	         	<p className="sidenavtabs"> <a href="./#/Gear">ציוד</a></p>
		       	<p className="activesidenavtabs sidenavtabs"> <a href="./#/Rules">חוקה ושיפוט</a></p>
	         	<p className="sidenavtabs"> <a href="./#/Roles">תפקידים</a></p>
	          	<p className="sidenavtabs"> <a href="./#/">אסטרטגיה</a></p> 
	 		 	<p className="sidenavtabs"> <a href="./#/">אתגר אימון </a></p>
		 		<p className="sidenavtabs"> <a href="./#/"> צור קשר </a></p> 
			</div>
			<div id="GearMain">	
				{GetDivButton()}
				{GetDivContent()}
				{GetDivFrontBack()}
			</div>
		</div>
		)

	}
}

export default Gear;