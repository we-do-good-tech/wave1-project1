import React, {Component} from 'react';
import './styles/WhatIsBoccia.css';

class WhatIsBoccia extends Component {
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
				this.setState({active:4})
			}
			else{
				this.setState({active:parseInt(this.state.active)-1})
			}
		}
		else if(evt.target.value==2){
			if(this.state.active==4){
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
					<div id="WhatIsMainButtonDiv">
						<button onClick={this.handleclick} value='1' className="WhatIsMainButton WhatIsMainButtonActive"> מה זה בוצ'ה? </button>
						<button onClick={this.handleclick}  value='2' className="WhatIsMainButton">איך משחקים?</button>
						<button onClick={this.handleclick}  value='3' className="WhatIsMainButton">למי זה מיועד?</button>
						<button onClick={this.handleclick}  value='4' className="WhatIsMainButton">נבחרת ישראל</button>	
					</div>
				);
			}
			if(this.state.active==2)
			{
				return(
					<div id="WhatIsMainButtonDiv">
						<button onClick={this.handleclick} value='1'  className="WhatIsMainButton"> מה זה בוצ'ה? </button>
						<button onClick={this.handleclick} value='2'  className="WhatIsMainButton WhatIsMainButtonActive">איך משחקים?</button>
						<button onClick={this.handleclick} value='3'  className="WhatIsMainButton">למי זה מיועד?</button>
						<button onClick={this.handleclick} value='4'  className="WhatIsMainButton">נבחרת ישראל</button>	
					</div>
				);
			}

			if(this.state.active==3)
				{
					return(
						<div id="WhatIsMainButtonDiv">
							<button onClick={this.handleclick} value='1' className="WhatIsMainButton"> מה זה בוצ'ה? </button>
							<button onClick={this.handleclick} value='2'  className="WhatIsMainButton">איך משחקים?</button>
							<button onClick={this.handleclick} value='3'  className="WhatIsMainButton WhatIsMainButtonActive">למי זה מיועד?</button>
							<button onClick={this.handleclick} value='4'  className="WhatIsMainButton">נבחרת ישראל</button>	
						</div>
					);
				}
			if(this.state.active==4)
				{
					return(
						<div id="WhatIsMainButtonDiv">
							<button onClick={this.handleclick} value='1'  className="WhatIsMainButton"> מה זה בוצ'ה? </button>
							<button onClick={this.handleclick} value='2'  className="WhatIsMainButton">איך משחקים?</button>
							<button onClick={this.handleclick} value='3'  className="WhatIsMainButton">למי זה מיועד?</button>
							<button onClick={this.handleclick} value='4'  className="WhatIsMainButton WhatIsMainButtonActive">נבחרת ישראל</button>	
						</div>
					);
				}	
	}

	let GetDivContent=()=>{
	



		if(this.state.active==1)
			{
				return(
					<div id="WhatIsContentDiv">
								<p id="WhatIsContentText">בוצ'ה הינו משחק פראלימפי המשלב מיומנות ואסטרטגיה, כאשר המטרה היא לקרב כמה שיותר כדורים אל המטרה.</p>						
					</div>
				)
			}
			if(this.state.active==2)
			{
				return(
					<div id="WhatIsContentDiv">
								<p id="WhatIsContentText">
								איך משחקים? <br/>
								שני צדדים מתחרים אחד נגד השני, כיחידים, זוגות או קבוצות של שלושה שחקנים. <br/>
								לצד אחד יש שישה כדורים אדומים, ולצד השני שישה כדורים כחולים.<br/>
								הקבוצה האדומה מניעה את הכדור הלבן, "הג'ק", אל עבר המגרש ולאחר מכן זורקת את הכדור האדום הראשון שלה.<br/>
								אחר כך זורקת הקבוצה הכחולה את הכדור הכחול הראשון שלה, במטרה להתקרב כמה שיותר לכדור הלבן. <br/>
								הקבוצה צוברת נקודות בהתאם למידת הקרבה של כדורי השחקנים לכדור הלבן.
								</p>						
					</div>
				)
			}

			if(this.state.active==3)
				{
					return(
						<div id="WhatIsContentDiv">
									<p id="WhatIsContentText">3</p>						
						</div>
					)
				}
			if(this.state.active==4)
				{
					return(
						<div id="WhatIsContentDiv">
									<p id="WhatIsContentText">4</p>						
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
		           <p className="activesidenavtabs sidenavtabs"> <a href="./#/WhatIsBoccia">מה זה בוצ'ה</a></p>
		           <p className="sidenavtabs"> <a href="./#/BocciaClasses">סיווגים</a></p>
		           <p className="sidenavtabs"> <a href="./#/">מגרש</a></p>
		           <p className="sidenavtabs"> <a href="./#/">ציוד</a></p>
		           <p className="sidenavtabs"> <a href="./#/">חוקה ושיפוט</a></p>
		           <p className="sidenavtabs"> <a href="./#/">תפקידים</a></p>
		           <p className="sidenavtabs"> <a href="./#/">אסטרטגיה</a></p> 
		 		   <p className="sidenavtabs"> <a href="./#/">אתגר אימון לשחקנים</a></p> 
				</div>
				<div id="WhatIsMain">	
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

export default WhatIsBoccia;