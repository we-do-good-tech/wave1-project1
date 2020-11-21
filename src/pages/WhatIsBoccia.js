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
import BlueLogo from '../imgs/BlueLogo.png';
import W1 from '../imgs/icons/W1.png';
import W2 from '../imgs/icons/W2.png';

class WhatIsBoccia extends Component {
	constructor(){
		super();
		this.state = {  
			active:0,
			names:["נעים להכיר", "למי זה מיועד?" ,  ],
			PopUpDisplay:'none',
			explanation: true
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
		const GetDivContent= () => {			
			if(this.state.active==0)
			{
				return(			
  <FirstPageTabs names={this.state.names} icons={[W1,W2]} onClick={this.handlebarclick} />					
				)
			}

			if(this.state.active==1)
			{
				return(
  <div className="ContentDiv">
    <p className="ContentTopic">נעים להכיר</p>
    <p className="ContentText" style={{width:'42vw'}}>
      בוצ׳ה (הגייה - BO-CHA) הינו ענף פראלימפי המשלב מיומנויות שונות.
      מטרת המשחק היא לקרב כמה שיותר כדורים אל כדור המטרה. 
      {' '}
      <br />
      השם ”בוצ'ה“ נגזר מהמילה הלטינית ”כדור“.
    </p>	
    {' '}
    <p className="ContentText" style={{width:'42vw'}}>
      בוצ'ה הוא ענף המשלב שליטה, דיוק, חשיבה ואסטרטגיה. המשחקים נמשכים ארבעה או שישה משחקונים (בבוצ'ה מערכה נקראת "משחקון").
      השחקנים זורקים או מגלגלים כדורים לעבר כדור המטרה הלבן. 
      {' '}
      <br />
      לכל צד יש שישה כדורים (אדום או כחול), ובכל משחקון, מנסים לצבור כמה שיותר נקודות על ידי זריקת ששת הכדורים והבאתם קרוב ככל הניתן לכדור המטרה. 
      אם בתום כל המשחקונים, המשחק מסתיים בשיוויון, משחקים שובר שוויון. ניתן לשחק בוצ'ה אחד על אחד (יחידים),
      <br />
      {' '}
      שניים מול שניים (זוגות), או  שלושה מול שלושה (קבוצתי).
    </p>
    <img className="ContentPic" src={WhatIsOne} style={{width:'28vw',left:'3vw',top:0}} />						
  </div>
				)
			}
			if(this.state.active==2)
			{
				return(
  <div className="ContentDiv">
    <p className="ContentTopic">למי זה מיועד?</p>
    <p className="ContentText">
      בוצ׳ה הוא ענף ספורט המיועד לנשים וגברים בכל הגילאים להם פגיעה בארבע גפיים.
      המשחק יועד בתחילה לספורטאים עם שיתוק מוחין (Cerebral Palsy),
      עם השנים התרחב גם לספורטאים עם ליקויים אחרים, כגון:
      ניוון שרירים, פוליו, פגיעות ראש ועוד.
    </p>
    <p className="ContentText" style={{width:'42vw'}}>
      השחקנים במשחק משתייכים ל-4 קבוצות 
      סיווג (קלאסים):
      <br />
      BC1, BC2, BC3, BC4.
      כל סיווג מתייחס לרמת תפקוד שונה.
    </p>
    <img className="ContentPic" src={WhatIsSecond} style={{width:'36vw',top:'6.5vw',left:'6vw'}} />						
  </div>
				)
			}
		
	}

			const GetDivFrontBack= () => {
			if(this.state.active===this.state.names.length){
				return(
  <FrontBack moveTo={1} last onClick={this.handlearrow} />
				);
			}
			if(this.state.active===1){
				return(
  <FrontBack moveTo={1} first onClick={this.handlearrow} />
				)
			}
			
			if(this.state.active!=0){
				return(
  <FrontBack moveTo={1} onClick={this.handlearrow} />
				);
			}
			
	}

	const getLeftLogo=()=>{
		if(this.state.active===0){
			return(
  <img style={{left:'3vw',top:'-7.5vw',width:'12vw'}} id="BlueLogo" src={BlueLogo} />
				)
		}

	}

	const isExplanation = () => this.state.active === 0;

		return(
  <div>
								
    <SideBar active='2' />
    <ProgressBar names={this.state.names} active={this.state.active} onClick={this.handlebarclick} />
    <div id="WhatIsMain">
      {getLeftLogo()}		
      {GetDivContent()}
      {GetDivFrontBack()}					
    </div>
    <PopUp HeadLine="מה זה בוצ'ה?" display={this.state.PopUpDisplay} onClick={this.HandlePopUp} level={2} explanation={isExplanation()} />
				
  </div>

		)

	}
}

export default WhatIsBoccia;