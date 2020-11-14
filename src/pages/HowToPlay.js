import React, {Component,componentDidUpdate} from 'react';
import './styles/HowToPlay.css';
import SideBar from '../Components/SideBar.js';
import Court from '../Components/Court.js';
import ProgressBar from '../Components/ProgressBar.js';
import FirstPageTabs from '../Components/FirstPageTabs.js';
import FrontBack from '../Components/FrontBack.js';
import PopUp from '../Components/PopUp.js';
import Game from '../Components/Game.js';
import HowToTarget from '../imgs/HowToTarget.png';
import HowToGainPoints from '../imgs/HowToGainPoints.png';
import BlueLogo from '../imgs/BlueLogo.png';
import H1 from '../imgs/icons/H1.png';
import H2 from '../imgs/icons/H2.png';
import H3 from '../imgs/icons/H3.png';
import H4 from '../imgs/icons/H4.png';

class HowToPlay extends Component {
	constructor(){
		super();
		this.state = {  
			active:0,
			names:["מטרת המשחק", "מהלך המשחק" , "צבירת נקודות" , "המגרש" ],
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
					
						<FirstPageTabs names={this.state.names} icons ={[H1,H2,H3,H4]} onClick={this.handlebarclick}/>
					
				)
			}

			if(this.state.active==1)
			{
				return(
					<div className="ContentDiv">
								<p className="ContentTopic">מטרת המשחק</p>
								<p className="ContentText">
								לזרוק את הכדור ששייך לי הכי קרוב לכדור הלבן.
								</p>
								<p className="ContentTopic">כמות משתתפים</p>
								<p className="ContentText">
								3X3 ,2X2 ,1X1 (יחידים, זוגות או קבוצתי)
								</p>
								<p className="ContentTopic">ציוד</p>
								<p className="ContentText">
								6 כדורים אדומים, 6 כדורים כחולים, 1 כדור לבן.
								</p>
								<img className="ContentPic" src={HowToTarget} style={{top:'10vh'}}/>
														
					</div>
				)
			}
			if(this.state.active==2)
			{
				return(
					<div className="ContentDiv">
						<Game/>						
					</div>
				)
			}

			if(this.state.active==3)
				{
					return(
						<div className="ContentDiv HowToGainPointsDiv" >
							<p className="ContentTopic">צבירת נקודות</p>
							<ul id='gainPointsList'>
								<li className="ContentText">ניקוד יחושב בסיום כל משחקון, לאחר שכל הכדורים של שני הצדדים נזרקו (כולל כדורי עונשין).</li>
								<li className="ContentText">הצד שהכדור שלו הוא הקרוב ביותר לכדור הלבן זוכה בנקודה. כל כדור נוסף של אותו צד שקרוב יותר לכדור הלבן, מאשר היריב, יזכה בנקודה.</li>
								<li className="ContentText">אם שני כדורים (או יותר) בצבעים שונים, נמצאים במרחק שווה מהכדור הלבן, כל צד יקבל נקודה על כל כדור.</li>
								<li className="ContentText">בסיום כל המשחקונים, הנקודות שנצברו יחוברו יחדיו, והצד בעל סכום הניקוד הגבוה ביותר, יוכרז כמנצח.</li>
							</ul>
							<img className="ContentPic" src={HowToGainPoints} style={{top:'calc(1vh + 1vw)'}}/>			
						</div>
					)
				}
			if(this.state.active==4)
				{
					return(
						<div className="ContentDiv" >
							<Court/>
						</div>
					)
				}
	
		
	}

	let GetDivFrontBack= () => {
		if(this.state.active===this.state.names.length){
			return(
				<FrontBack moveTo={2} last={true} onClick={this.handlearrow}/>
			);
		}
		if(this.state.active===1){
			return(
				<FrontBack moveTo={2} first={true} onClick={this.handlearrow}/>
			)
		}

		if(this.state.active!=0){
			return(
				<FrontBack moveTo={2} onClick={this.handlearrow}/>
			);
		}
			
	}

	let getLeftLogo=()=>{
		if(this.state.active===0){
			return(
				<img style={{left:'3vw',top:'-7.5vw',width:'12vw'}}  id="BlueLogo" src={BlueLogo}/>
				)
		}

	}
	

		return(
			<div>				
				<SideBar active='3'/>
				<ProgressBar names={this.state.names} active={this.state.active} onClick={this.handlebarclick}/>
				<div id="WhatIsMain">
					{getLeftLogo()}	
					{GetDivContent()}
					{GetDivFrontBack()}					
				</div>				
				<PopUp HeadLine=" איך משחקים?"display={this.state.PopUpDisplay} onClick={this.HandlePopUp}  level={0}/>
			</div>

		)

	}
}

export default HowToPlay;