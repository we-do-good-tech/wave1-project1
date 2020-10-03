import React, {Component} from 'react';
import './styles/Roles.css';

class Roles extends Component {
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
				this.setState({active:7})
			}
			else{
				this.setState({active:parseInt(this.state.active)-1})
			}
		}
		else if(evt.target.value==2){
			if(this.state.active==7){
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
					<div id="RolesMainButtonDiv">
						<button className="RolesMainButton RolesMainButtonActive rightcurved"><p>שחקן</p></button>
						<button className="RolesMainButton"><p>קפטן</p></button>
						<button className="RolesMainButton"><p>שופט</p></button>	
						<button className="RolesMainButton"><p>עוזר ספורט</p></button>
						<button className="RolesMainButton"><p>מאמן</p></button>
						
						<button className="RolesMainButton leftcurved"><p>תרגול</p></button>
					</div>
				);
			}

			if(this.state.active==3)
				{
					return(
						<div id="RolesMainButtonDiv">
							<button className="RolesMainButton rightcurved"><p>שחקן</p></button>
							<button className="RolesMainButton RolesMainButtonActive"><p>קפטן</p></button>
							<button className="RolesMainButton"><p>שופט</p></button>	
							<button className="RolesMainButton"><p>עוזר ספורט</p></button>
							<button className="RolesMainButton"><p>מאמן</p></button>
							
							<button className="RolesMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}
			if(this.state.active==4)
				{
					return(
						<div id="RolesMainButtonDiv">
							<button className="RolesMainButton rightcurved"><p>שחקן</p></button>
							<button className="RolesMainButton"><p>קפטן</p></button>
							<button className="RolesMainButton RolesMainButtonActive"><p>שופט</p></button>	
							<button className="RolesMainButton"><p>עוזר ספורט</p></button>
							<button className="RolesMainButton"><p>מאמן</p></button>
							
							<button className="RolesMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}	
			if(this.state.active==5)
				{
					return(
						<div id="RolesMainButtonDiv">
							<button className="RolesMainButton rightcurved"><p>שחקן</p></button>
							<button className="RolesMainButton"><p>קפטן</p></button>
							<button className="RolesMainButton"><p>שופט</p></button>	
							<button className="RolesMainButton RolesMainButtonActive "><p>עוזר ספורט</p></button>
							<button className="RolesMainButton"><p>מאמן</p></button>
							
							<button className="RolesMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}	
			if(this.state.active==6)
				{
					return(
						<div id="RolesMainButtonDiv">
							<button className="RolesMainButton rightcurved"><p>שחקן</p></button>
							<button className="RolesMainButton"><p>קפטן</p></button>
							<button className="RolesMainButton"><p>שופט</p></button>	
							<button className="RolesMainButton"><p>עוזר ספורט</p></button>
							<button className="RolesMainButton RolesMainButtonActive"><p>מאמן</p></button>
							
							<button className="RolesMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}	
			if(this.state.active==7)
				{
					return(
						<div id="RolesMainButtonDiv">
							<button className="RolesMainButton rightcurved"><p>שחקן</p></button>
							<button className="RolesMainButton"><p>קפטן</p></button>
							<button className="RolesMainButton"><p>שופט</p></button>	
							<button className="RolesMainButton"><p>עוזר ספורט</p></button>
							<button className="RolesMainButton"><p>מאמן</p></button>
							<button className="RolesMainButton RolesMainButtonActive leftcurved"><p>תרגול</p></button>
						</div>
					);
				}		
		
	}

	let GetDivContent=()=>{
		if(this.state.active==1)
			{
				return(
					<div id="RolesContentDivFirstState">
						<p>הסבר ממש קצר של גג שתי שורות</p>
						<p>הסבר ממש קצר של גג שתי שורות</p>
						<div id="RolesContentDivFirstStatePage">
								<button className="RolesFirstStatePageButton" onClick={this.handleclick} value="2">01<br/>שחקן</button>
								<button className="RolesFirstStatePageButton" onClick={this.handleclick} value="3">02<br/>קפטן</button>
								<button className="RolesFirstStatePageButton" onClick={this.handleclick} value="4">03<br/>שופט</button>
								<button className="RolesFirstStatePageButton" onClick={this.handleclick} value="5">04<br/>עוזר ספורט</button>
								<button className="RolesFirstStatePageButton" onClick={this.handleclick} value="6">05<br/>מאמן</button>
								<button className="RolesFirstStatePageButton" onClick={this.handleclick} value="7">06<br/>תרגול</button>			
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
						<div id="RolesContentDiv">
									<p id="RolesContentText">
									2
									</p>						
						</div>
					)
				}
			if(this.state.active==4)
				{
					return(
						<div id="RolesContentDiv">
									<p id="RolesContentText">
									3
									</p>						
						</div>
					)				
				}	
			if(this.state.active==5)
				{
					return(
						<div id="RolesContentDiv">
									<p id="RolesContentText">
									4
									</p>						
						</div>
					)				
				}	
			if(this.state.active==6)
				{
					return(
						<div id="RolesContentDiv">
									<p id="RolesContentText">
									5
									</p>						
						</div>
					)				
				}	
			if(this.state.active==7)
				{
					return(
						<div id="RolesContentDiv">
									<p id="RolesContentText">
									6
									</p>						
						</div>
					)				
				}

			if(this.state.active==8)
				{
					return(
						<div id="RolesContentDiv">
									<p id="RolesContentText">
									7
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
		       	<p className="sidenavtabs"> <a href="./#/Rules">חוקה ושיפוט</a></p>
	         	<p className="activesidenavtabs sidenavtabs"> <a href="./#/Roles">תפקידים</a></p>
	          	<p className="sidenavtabs"> <a href="./#/">אסטרטגיה</a></p> 
	 		 	<p className="sidenavtabs"> <a href="./#/">אתגר אימון </a></p>
		 		<p className="sidenavtabs"> <a href="./#/"> צור קשר </a></p> 
			</div>
			<div id="RolesMain">	
				{GetDivButton()}
				{GetDivContent()}
				{GetDivFrontBack()}
			</div>
		</div>
		)

	}
}

export default Roles;