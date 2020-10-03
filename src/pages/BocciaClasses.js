import React, {Component} from 'react';
import './styles/BocciaClasses.css';

class BocciaClasses extends Component {
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
					<div id="BocciaClassesMainButtonDiv">
						<button className="BocciaClassesMainButton BocciaClassesMainButtonActive rightcurved"><p>סיווג BC1</p></button>
						<button className="BocciaClassesMainButton"><p>סיווג BC2</p></button>
						<button className="BocciaClassesMainButton"><p>סיווג BC3</p></button>	
						<button className="BocciaClassesMainButton"><p>סיווג BC4</p></button>
						<button className="BocciaClassesMainButton"><p>סיווג BC5</p></button>
						<button className="BocciaClassesMainButton leftcurved"><p>תרגול</p></button>
					</div>
				);
			}

			if(this.state.active==3)
				{
					return(
						<div id="BocciaClassesMainButtonDiv">
							<button className="BocciaClassesMainButton rightcurved"><p>סיווג BC1</p></button>
							<button className="BocciaClassesMainButton BocciaClassesMainButtonActive"><p>סיווג BC2</p></button>
							<button className="BocciaClassesMainButton"><p>סיווג BC3</p></button>	
							<button className="BocciaClassesMainButton"><p>סיווג BC4</p></button>
							<button className="BocciaClassesMainButton"><p>סיווג BC5</p></button>
							<button className="BocciaClassesMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}
			if(this.state.active==4)
				{
					return(
						<div id="BocciaClassesMainButtonDiv">
							<button className="BocciaClassesMainButton rightcurved"><p>סיווג BC1</p></button>
							<button className="BocciaClassesMainButton"><p>סיווג BC2</p></button>
							<button className="BocciaClassesMainButton BocciaClassesMainButtonActive"><p>סיווג BC3</p></button>	
							<button className="BocciaClassesMainButton"><p>סיווג BC4</p></button>
							<button className="BocciaClassesMainButton"><p>סיווג BC5</p></button>
							<button className="BocciaClassesMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}	
			if(this.state.active==5)
				{
					return(
						<div id="BocciaClassesMainButtonDiv">
							<button className="BocciaClassesMainButton rightcurved"><p>סיווג BC1</p></button>
							<button className="BocciaClassesMainButton"><p>סיווג BC2</p></button>
							<button className="BocciaClassesMainButton"><p>סיווג BC3</p></button>	
							<button className="BocciaClassesMainButton BocciaClassesMainButtonActive"><p>סיווג BC4</p></button>
							<button className="BocciaClassesMainButton"><p>סיווג BC5</p></button>
							<button className="BocciaClassesMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}	
			if(this.state.active==6)
				{
					return(
						<div id="BocciaClassesMainButtonDiv">
							<button className="BocciaClassesMainButton rightcurved"><p>סיווג BC1</p></button>
							<button className="BocciaClassesMainButton"><p>סיווג BC2</p></button>
							<button className="BocciaClassesMainButton"><p>סיווג BC3</p></button>	
							<button className="BocciaClassesMainButton"><p>סיווג BC4</p></button>
							<button className="BocciaClassesMainButton BocciaClassesMainButtonActive"><p>סיווג BC5</p></button>
							<button className="BocciaClassesMainButton leftcurved"><p>תרגול</p></button>
						</div>
					);
				}	
			if(this.state.active==7)
				{
					return(
						<div id="BocciaClassesMainButtonDiv">
							<button className="BocciaClassesMainButton rightcurved"><p>סיווג BC1</p></button>
							<button className="BocciaClassesMainButton"><p>סיווג BC2</p></button>
							<button className="BocciaClassesMainButton"><p>סיווג BC3</p></button>	
							<button className="BocciaClassesMainButton"><p>סיווג BC4</p></button>
							<button className="BocciaClassesMainButton"><p>סיווג BC5</p></button>
							<button className="BocciaClassesMainButton BocciaClassesMainButtonActive leftcurved"><p>תרגול</p></button>
						</div>
					);
				}		
	}

	let GetDivContent=()=>{
		if(this.state.active==1)
			{
				return(
					<div id="BocciaClassesContentDivFirstState">
						<p>הסבר ממש קצר של גג שתי שורות</p>
						<p>הסבר ממש קצר של גג שתי שורות</p>
						<div id="BocciaClassesContentDivFirstStatePage">
								<button className="BocciaClassesFirstStatePageButton" onClick={this.handleclick} value="2">01<br/>סיווג BC1</button>
								<button className="BocciaClassesFirstStatePageButton" onClick={this.handleclick} value="3">02<br/>סיווג BC2</button>
								<button className="BocciaClassesFirstStatePageButton" onClick={this.handleclick} value="4">03<br/>סיווג BC3</button>
								<button className="BocciaClassesFirstStatePageButton" onClick={this.handleclick} value="5">04<br/>סיווג BC4</button>
								<button className="BocciaClassesFirstStatePageButton" onClick={this.handleclick} value="6">05<br/>סיווג BC5</button>
								<button className="BocciaClassesFirstStatePageButton" onClick={this.handleclick} value="7">06<br/>תרגול</button>			
						</div>
					</div>
				)
			}
			if(this.state.active==2)
			{
				return(
					<div id="BocciaClassesContentDiv">
								<p id="BocciaClassesContentText">
								BC1
								</p>						
					</div>
				)
			}

			if(this.state.active==3)
				{
					return(
						<div id="BocciaClassesContentDiv">
									<p id="BocciaClassesContentText">
									BC2
									</p>						
						</div>
					)
				}
			if(this.state.active==4)
				{
					return(
						<div id="BocciaClassesContentDiv">
									<p id="BocciaClassesContentText">
									BC3
									</p>						
						</div>
					)				
				}	
			if(this.state.active==5)
				{
					return(
						<div id="BocciaClassesContentDiv">
									<p id="BocciaClassesContentText">
									BC4
									</p>						
						</div>
					)				
				}	
			if(this.state.active==6)
				{
					return(
						<div id="BocciaClassesContentDiv">
									<p id="BocciaClassesContentText">
									BC5
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
		<body>
			<div className="sidenavbar" >
				<p className="sidenavtabs"> <a href="./#/WhatIsBoccia">LOGO</a></p>
	        	<p className="sidenavtabs"> <a href="./#/WhatIsBoccia">מה זה בוצ'ה</a></p>
	        	<p className="activesidenavtabs sidenavtabs"> <a href="./#/BocciaClasses">סיווגים</a></p>
	         	<p className="sidenavtabs"> <a href="./#/">מגרש</a></p>
	         	<p className="sidenavtabs"> <a href="./#/">ציוד</a></p>
		       	<p className="sidenavtabs"> <a href="./#/">חוקה ושיפוט</a></p>
	         	<p className="sidenavtabs"> <a href="./#/">תפקידים</a></p>
	          	<p className="sidenavtabs"> <a href="./#/">אסטרטגיה</a></p> 
	 		 	<p className="sidenavtabs"> <a href="./#/">אתגר אימון לשחקנים</a></p> 
			</div>
			<div id="BocciaClassesMain">	
				{GetDivButton()}
				{GetDivContent()}
				{GetDivFrontBack()}
			</div>
				
			</body>


		)

	}
}

export default BocciaClasses;