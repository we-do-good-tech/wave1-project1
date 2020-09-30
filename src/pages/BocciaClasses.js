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
				this.setState({active:6})
			}
			else{
				this.setState({active:parseInt(this.state.active)-1})
			}
		}
		else if(evt.target.value==2){
			if(this.state.active==6){
				this.setState({active:1})
			}
			else{
				this.setState({active:parseInt(this.state.active)+1})
			}
		}		
	}

	render(){

	let GetDivButton=()=>{
		if(this.state.active==1)
			{
				return(
					<div id="BocciaClassesMainButtonDiv">



					</div>
				);
			}
			if(this.state.active==2)
			{
				return(
					<div id="BocciaClassesMainButtonDiv">
						<button onClick={this.handleclick} value='2'  className="BocciaClassesMainButton BocciaClassesMainButtonActive">BC1</button>
						<button onClick={this.handleclick} value='3'  className="BocciaClassesMainButton">BC2</button>
						<button onClick={this.handleclick} value='4'  className="BocciaClassesMainButton">BC3</button>	
						<button onClick={this.handleclick} value='5'  className="BocciaClassesMainButton">BC4</button>
						<button onClick={this.handleclick} value='6'  className="BocciaClassesMainButton">BC5</button>
					</div>
				);
			}

			if(this.state.active==3)
				{
					return(
						<div id="BocciaClassesMainButtonDiv">
							<button onClick={this.handleclick} value='2' className="BocciaClassesMainButton">BC1</button>
							<button onClick={this.handleclick} value='3'  className="BocciaClassesMainButton BocciaClassesMainButtonActive">BC2</button>
							<button onClick={this.handleclick} value='4'  className="BocciaClassesMainButton">BC3</button>	
							<button onClick={this.handleclick} value='5'  className="BocciaClassesMainButton">BC4</button>
							<button onClick={this.handleclick} value='6'  className="BocciaClassesMainButton">BC5</button>
						</div>
					);
				}
			if(this.state.active==4)
				{
					return(
						<div id="BocciaClassesMainButtonDiv">
							<button onClick={this.handleclick} value='2'  className="BocciaClassesMainButton">BC1</button>
							<button onClick={this.handleclick} value='3'  className="BocciaClassesMainButton">BC2</button>
							<button onClick={this.handleclick} value='4'  className="BocciaClassesMainButton BocciaClassesMainButtonActive">BC3</button>	
							<button onClick={this.handleclick} value='5'  className="BocciaClassesMainButton">BC4</button>
							<button onClick={this.handleclick} value='6'  className="BocciaClassesMainButton">BC5</button>
						</div>
					);
				}	
			if(this.state.active==5)
				{
					return(
						<div id="BocciaClassesMainButtonDiv">
							<button onClick={this.handleclick} value='2'  className="BocciaClassesMainButton">BC1</button>
							<button onClick={this.handleclick} value='3'  className="BocciaClassesMainButton">BC2</button>
							<button onClick={this.handleclick} value='4'  className="BocciaClassesMainButton">BC3</button>	
							<button onClick={this.handleclick} value='5'  className="BocciaClassesMainButton BocciaClassesMainButtonActive">BC4</button>
							<button onClick={this.handleclick} value='6'  className="BocciaClassesMainButton">BC5</button>
						</div>
					);
				}	
			if(this.state.active==6)
				{
					return(
						<div id="BocciaClassesMainButtonDiv">
							<button onClick={this.handleclick} value='2'  className="BocciaClassesMainButton">BC1</button>
							<button onClick={this.handleclick} value='3'  className="BocciaClassesMainButton">BC2</button>
							<button onClick={this.handleclick} value='4'  className="BocciaClassesMainButton">BC3</button>	
							<button onClick={this.handleclick} value='5'  className="BocciaClassesMainButton">BC4</button>
							<button onClick={this.handleclick} value='6'  className="BocciaClassesMainButton BocciaClassesMainButtonActive">BC5</button>
						</div>
					);
				}	
	}

	let GetDivContent=()=>{
		if(this.state.active==1)
			{
				return(
					<div id="BocciaClassesFirstContentDiv">
								<h1> סיווגים   </h1>
								<h2>הסיווג במשחק מחולק ל5 סיווגים: BC1, BC2, BC3, BC4, BC5 כאשר כל סיווג מתייחס לרמת מוגבלות שונה </h2>	
								<h2> הסיווג משפיע על קטגוריית המשחק</h2>	
								<div id="BocciaClasses_ClassesDiv">
									<button onClick={this.handleclick} value='2'  className="BocciaClassesMainButton">BC1</button>
									<button onClick={this.handleclick} value='3'  className="BocciaClassesMainButton">BC2</button>
									<button onClick={this.handleclick} value='4'  className="BocciaClassesMainButton">BC3</button>	
									<button onClick={this.handleclick} value='5'  className="BocciaClassesMainButton">BC4</button>
									<button onClick={this.handleclick} value='6'  className="BocciaClassesMainButton">BC5</button>
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



		return(
			<body>
				 <div className="nav">
		          <ul className="navlist">
		            <a href="./#/"><li className="navtabs">צרו קשר</li></a>
		            <a href="./#/"><li className="navtabs">אודות הארגון</li></a>
		            <a href="./#/WhatIsBoccia"><li className="hometab">⌂</li></a>
		          </ul>
		        </div>

				<div className="sidenavbar" >
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
					<div id="FrontBackButtonsDiv">
						<div className="FronBackButtonSection">
							<button value="1" onClick={this.handlearrow} className="FrontBackButtons">
								🡺
							</button>
							<p>אחורה</p>
						</div>
						<div className="FronBackButtonSection">
							<button value="2" onClick={this.handlearrow} className="FrontBackButtons">
								🢀
							</button>
							<p>קדימה</p>
						</div>
					</div>
				</div>
				
			</body>


		)

	}
}

export default BocciaClasses;