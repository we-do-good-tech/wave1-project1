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
			PopUpDisplay:'none'
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
								בוצ׳ה (הגייה - BO-CHA) הינו ענף פראלימפי המשלב מיומנויות שונות
								כאשר המטרה היא לקרב כמה שיותר כדורים אל כדור המטרה.
								השם ”בוצ'ה“ נגזר מהמילה הלטינית ”כדור“.
								</p>	<p className="ContentText">
								בוצ'ה הוא ענף המשלב שליטה, דיוק, חשיבה ואסטרטגיה. המשחקים נמשכים ארבעה או ששה משחקונים (בבוצ'ה מערכה נקראת משחקון).
								 שחקנים זורקים או מגלגלים כדורים לעבר המטרה - כדור לבן שנקרא גם כדור "ג'ק". 
								 לכל צד יש שישה כדורים (אדום או כחול), ובכל משחקון, מנסים לצבור כמה שיותר נקודות על ידי זריקת 6 הכדורים והבאתם קרוב ככל הניתן לכדור המטרה. 
								 אם המשחק נמצא בשוויון לאחר שנגמרו כל המשחקונים, משחקים שובר שוויון. ניתן לשחק בוצ'יה ראש בראש (1X1), בזוגות או בקבוצות של שלוש.
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
									בוצ׳ה הוא ענף ספורט המיועד לנשים וגברים בכל הגילאים בעלי פגיעה בארבע גפיים.
									המשחק יועד בתחילה לספורטאים עם שיתוק מוחין (Cerebral Palsy),
									ועם השנים התרחב גם לספורטאים עם ליקויים נוספים שאינם CP,
									כגון ניוון שרירים, פוליו, פגיעות ראש ועוד.
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
									<ul>
									<li> מקום 8 באליפות אירופה 2015.</li>
									<li> מקום 4 באליפות אירופה 2017.</li>
									<li> נדב לוי זכה במדליית כסף באליפויות עולם פתוחות בשנים  <br/> 2015 ו-2017 </li>
									<li> נדב השתתף במשחקים הפראלימפיים בריו 2016 וישתתף בטוקיו.</li>
									</ul>
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