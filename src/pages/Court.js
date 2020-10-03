import React, {Component} from 'react';
import './styles/Court.css';

class Court extends Component {
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
				this.setState({active:8})
			}
			else{
				this.setState({active:parseInt(this.state.active)-1})
			}
		}
		else if(evt.target.value==2){
			if(this.state.active==8){
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
					<div id="CourtMainButtonDiv">
						<button className="CourtMainButton CourtMainButtonActive rightcurved"><p>קופסאות שחקן</p></button>
						<button className="CourtMainButton"><p>קו הזריקה</p></button>
						<button className="CourtMainButton"><p>קו ה-V</p></button>	
						<button className="CourtMainButton"><p>אזור המשחק</p></button>
						<button className="CourtMainButton"><p>נקודת הפלוס</p></button>
						<button className="CourtMainButton"><p>ריבוע המטרה</p></button>
						<button className="CourtMainButton leftcurved"><p>תרגול</p></button>
					</div>
				);
			}

			if(this.state.active==3)
				{
					return(
						<div id="CourtMainButtonDiv">
							<button className="CourtMainButton rightcurved"><p>קופסאות שחקן</p></button>
							<button className="CourtMainButton CourtMainButtonActive"><p>קו הזריקה</p></button>
							<button className="CourtMainButton"><p>קו ה-V</p></button>	
							<button className="CourtMainButton"><p>אזור המשחק</p></button>
							<button className="CourtMainButton"><p>נקודת הפלוס</p></button>
							<button className="CourtMainButton"><p>ריבוע המטרה</p></button>
							<button className="CourtMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}
			if(this.state.active==4)
				{
					return(
						<div id="CourtMainButtonDiv">
							<button className="CourtMainButton rightcurved"><p>קופסאות שחקן</p></button>
							<button className="CourtMainButton"><p>קו הזריקה</p></button>
							<button className="CourtMainButton CourtMainButtonActive"><p>קו ה-V</p></button>	
							<button className="CourtMainButton"><p>אזור המשחק</p></button>
							<button className="CourtMainButton"><p>נקודת הפלוס</p></button>
							<button className="CourtMainButton"><p>ריבוע המטרה</p></button>
							<button className="CourtMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}	
			if(this.state.active==5)
				{
					return(
						<div id="CourtMainButtonDiv">
							<button className="CourtMainButton rightcurved"><p>קופסאות שחקן</p></button>
							<button className="CourtMainButton"><p>קו הזריקה</p></button>
							<button className="CourtMainButton"><p>קו ה-V</p></button>	
							<button className="CourtMainButton CourtMainButtonActive "><p>אזור המשחק</p></button>
							<button className="CourtMainButton"><p>נקודת הפלוס</p></button>
							<button className="CourtMainButton"><p>ריבוע המטרה</p></button>
							<button className="CourtMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}	
			if(this.state.active==6)
				{
					return(
						<div id="CourtMainButtonDiv">
							<button className="CourtMainButton rightcurved"><p>קופסאות שחקן</p></button>
							<button className="CourtMainButton"><p>קו הזריקה</p></button>
							<button className="CourtMainButton"><p>קו ה-V</p></button>	
							<button className="CourtMainButton"><p>אזור המשחק</p></button>
							<button className="CourtMainButton CourtMainButtonActive"><p>נקודת הפלוס</p></button>
							<button className="CourtMainButton"><p>ריבוע המטרה</p></button>
							<button className="CourtMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}	
			if(this.state.active==7)
				{
					return(
						<div id="CourtMainButtonDiv">
							<button className="CourtMainButton rightcurved"><p>קופסאות שחקן</p></button>
							<button className="CourtMainButton"><p>קו הזריקה</p></button>
							<button className="CourtMainButton"><p>קו ה-V</p></button>	
							<button className="CourtMainButton"><p>אזור המשחק</p></button>
							<button className="CourtMainButton"><p>נקודת הפלוס</p></button>
							<button className="CourtMainButton CourtMainButtonActive"><p>ריבוע המטרה</p></button>
							<button className="CourtMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}		

			if(this.state.active==8)
				{
					return(
						<div id="CourtMainButtonDiv">
							<button className="CourtMainButton rightcurved"><p>קופסאות שחקן</p></button>
							<button className="CourtMainButton"><p>קו הזריקה</p></button>
							<button className="CourtMainButton"><p>קו ה-V</p></button>	
							<button className="CourtMainButton"><p>אזור המשחק</p></button>
							<button className="CourtMainButton"><p>נקודת הפלוס</p></button>
							<button className="CourtMainButton"><p>ריבוע המטרה</p></button>
							<button className="CourtMainButton CourtMainButtonActive leftcurved"><p>תרגול</p></button>
						</div>
					);
				}			
	}

	let GetDivContent=()=>{
		if(this.state.active==1)
			{
				return(
					<div id="CourtContentDivFirstState">
						<p>הסבר ממש קצר של גג שתי שורות</p>
						<p>הסבר ממש קצר של גג שתי שורות</p>
						<div id="CourtContentDivFirstStatePage">
								<button className="CourtFirstStatePageButton" onClick={this.handleclick} value="2">01<br/>קופסאות שחקן</button>
								<button className="CourtFirstStatePageButton" onClick={this.handleclick} value="3">02<br/>קו הזריקה</button>
								<button className="CourtFirstStatePageButton" onClick={this.handleclick} value="4">03<br/>קו ה-V</button>
								<button className="CourtFirstStatePageButton" onClick={this.handleclick} value="5">04<br/>אזור המשחק</button>
								<button className="CourtFirstStatePageButton" onClick={this.handleclick} value="6">05<br/>נקודת הפלוס</button>
								<button className="CourtFirstStatePageButton" onClick={this.handleclick} value="7">06<br/>ריבוע המטרה</button>	
								<button className="CourtFirstStatePageButton" onClick={this.handleclick} value="8">07<br/>תרגול</button>			
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
						<div id="CourtContentDiv">
									<p id="CourtContentText">
									2
									</p>						
						</div>
					)
				}
			if(this.state.active==4)
				{
					return(
						<div id="CourtContentDiv">
									<p id="CourtContentText">
									3
									</p>						
						</div>
					)				
				}	
			if(this.state.active==5)
				{
					return(
						<div id="CourtContentDiv">
									<p id="CourtContentText">
									4
									</p>						
						</div>
					)				
				}	
			if(this.state.active==6)
				{
					return(
						<div id="CourtContentDiv">
									<p id="CourtContentText">
									5
									</p>						
						</div>
					)				
				}	
			if(this.state.active==7)
				{
					return(
						<div id="CourtContentDiv">
									<p id="CourtContentText">
									6
									</p>						
						</div>
					)				
				}

			if(this.state.active==8)
				{
					return(
						<div id="CourtContentDiv">
									<p id="CourtContentText">
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
	         	<p className="activesidenavtabs sidenavtabs"> <a href="./#/Court">מגרש</a></p>
	         	<p className="sidenavtabs"> <a href="./#/Gear">ציוד</a></p>
		       	<p className="sidenavtabs"> <a href="./#/Rules">חוקה ושיפוט</a></p>
	         	<p className="sidenavtabs"> <a href="./#/Roles">תפקידים</a></p>
	          	<p className="sidenavtabs"> <a href="./#/">אסטרטגיה</a></p> 
	 		 	<p className="sidenavtabs"> <a href="./#/">אתגר אימון </a></p>
		 		<p className="sidenavtabs"> <a href="./#/"> צור קשר </a></p> 
			</div>
			<div id="CourtMain">	
				{GetDivButton()}
				{GetDivContent()}
				{GetDivFrontBack()}
			</div>
		</div>
		)

	}
}

export default Court;