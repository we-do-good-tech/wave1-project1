import React, {Component,componentDidUpdate} from 'react';
import './styles/WhatIsBoccia.css';
import SideBar from '../Components/SideBar.js';
import ProgressBar from '../Components/ProgressBar.js';
import FirstPageTabs from '../Components/FirstPageTabs.js';
import FrontBack from '../Components/FrontBack.js';
import PopUp from '../Components/PopUp.js';
import WhatIsOne from '../imgs/WhatIsOne.png';
import WhatIsSecond from '../imgs/WhatIsSecond.png';
import WhatIsThird from '../imgs/WhatIsThird.png';
import WhatIsFourth from '../imgs/WhatIsFourth.png';

class WhatIsBoccia extends Component {
	constructor(){
		super();
		this.state = {  
			active:0,
			names:["נעים להכיר", "למי זה מיועד?" , "נבחרת ישראל", ],
			PopUpDisplay:'block'
	  	}
	  	this.handlearrow= this.handlearrow.bind(this);
	  	this.handleclick= this.handleclick.bind(this);

	}

	handleclick=(evt)=>{
		this.setState({active:parseInt(evt.target.value)});
	}

	handlearrow=(evt)=>{
		if(evt==1){
			if(this.state.active==0){
				this.setState({active:this.state.names.length})
			}
			else{
				this.setState({active:parseInt(this.state.active)-1});
			}
		}

		else if(evt==2){ 
			if(this.state.active==this.state.names.length){
				this.setState({active:0})
			}
			else{
				this.setState({active:parseInt(this.state.active)+1})
			}
		}		
	}

	handlebarclick=(val)=>{
		console.log(val);
		this.setState({active:parseInt(val)});
	}

	HandlePopUp=()=>{
		if(this.state.PopUpDisplay==="none")
			this.setState({PopUpDisplay:"block"});
		else if(this.state.PopUpDisplay==="block"){
			this.setState({PopUpDisplay:"none"});
			}
		else{
			this.setState({PopUpDisplay:"none"});
		}	
	}

	render(){



		let GetDivContent= () => {			
			if(this.state.active==0)
			{
				return(
					
						<FirstPageTabs names={this.state.names} onClick={this.handlebarclick}/>
					
				)
			}

			if(this.state.active==1)
			{
				return(
					<div className="ContentDiv">
								<p className="ContentTopic">נעים להכיר</p>
								<p className="ContentText">
								בוצ׳ה (הגייה - BO-CHA) הינו ענף פראלימפי  <br/>המשלב מיומנות שונות,
								כאשר המטרה היא לקרב <br/>כמה שיותר כדורים אל כדור המטרה.  <br/>
								השם ”בוצ'ה“ נגזר מהמילה הלטינית ”כדור“. 
								</p>	<p className="ContentText">
								המשחק יועד בתחילה לספורטאים  <br/>עם שיתוק מוחין (Cerebral Palsy),<br/>
								ועם השנים התרחב גם לספורטאים <br/>עם ליקויים נוספים שאינן CP, <br/>
								כגון ניוון שרירים, פוליו, פגיעות ראש ועוד.
								</p>
								<img className="ContentPic" src={WhatIsOne}/>						
					</div>
				)
			}
			if(this.state.active==2)
			{
				return(
					<div className="ContentDiv">
								<p className="ContentTopic">למי זה מיועד?</p>
								<p className="ContentText">
									בוצ'ה הוא ענף ספורט המיועד לנשים וגברים בכל הגילאים.<br/>
									המשחק תוכנן במקור עבור ספורטאים עם שיתוק מוחין, וכיום<br/>
									כולל גם שחקנים עם מוגבלויות מוטוריות אחרות.
								</p>
								<p className="ContentText">
									השחקנים במשחק משתייכים ל 4 קבוצות <br/>
									על פי סיווג שלהם (קלאסים):<br/>
									BC1, BC2, BC3, BC4<br/>
									כל סיווג מתייחס לרמת מוגבלות שונה.
								</p>
								<img className="ContentPic" src={WhatIsSecond} style={{top:'10vh'}}/>						
					</div>
				)
			}

			if(this.state.active==3)
				{
					return(
						<div className="ContentDiv">
								<p className="ContentTopic">נבחרת ישראל</p>
								<p className="ContentText">
									הנבחרת הלאומית פעילה משנת 2012.
								</p><br/>
								<p className="ContentText">
									<strong style={{'font-size':'1.4vw'}}>הישגים בולטים :</strong><br/>
									-מקום 8 באליפות אירופה 2015.<br/>
									-מקום 4 באליפות 2017.<br/>
									- נדב לוי זכה במדליית כסף באליפויות עולם פתוחות<br/>
									בשנים 2015 ו-2017. <br/>
									-השתתף במשחקים הפאראולימפיים בריו 2016 וישתתף בטוקיו.

									<img className="ContentPic" src={WhatIsThird} style={{top:'3vh'}}/>
									<img className="ContentPic" src={WhatIsFourth} style={{width:'9vw',top:'8em',left:'18vw'}}/>
								</p>						
						</div>
					)
				}

		
	}

		let GetDivFrontBack= () => {
			if(this.state.active===this.state.names.length){
				return(
					<FrontBack last={true} onClick={this.handlearrow}/>
				);
			}
			if(this.state.active!=0){
				return(
					<FrontBack onClick={this.handlearrow}/>
				);
			}
		}
	

		return(
			<div>				
				<SideBar active='1'/>
				<ProgressBar names={this.state.names} active={this.state.active} onClick={this.handlebarclick}/>
				<div id="WhatIsMain">	
					{GetDivContent()}
					{GetDivFrontBack()}					
				</div>
				<PopUp display={this.state.PopUpDisplay} onClick={this.HandlePopUp} level={0}/>
				
			</div>

		)

	}
}

export default WhatIsBoccia;