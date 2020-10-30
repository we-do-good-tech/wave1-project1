import React, {Component,componentDidUpdate} from 'react';
import './styles/Rules.css';
import SideBar from '../Components/SideBar.js';
import ProgressBar from '../Components/ProgressBar.js';
import FirstPageTabs from '../Components/FirstPageTabs.js';
import FrontBack from '../Components/FrontBack.js';
import PopUp from '../Components/PopUp.js';
import TimesBC1Single from '../imgs/TimesBC1Single.png';
import TimesBC2Single from '../imgs/TimesBC2Single.png';
import TimesBC3Single from '../imgs/TimesBC3Single.png';
import TimesBC4Single from '../imgs/TimesBC4Single.png';
import TimesBC3Double from '../imgs/TimesBC3Double.png';
import TimesBC4Double from '../imgs/TimesBC4Double.png';
import TimesGroup from '../imgs/TimesGroup.png';
import TieCourt from '../imgs/TieCourt.png';
import SignalOne from '../imgs/SignalOne.png';
import SignalTwo from '../imgs/SignalTwo.png';
import SignalThree from '../imgs/SignalThree.png';
import SignalFour from '../imgs/SignalFour.png';
import SignalFive from '../imgs/SignalFive.png';
import SignalSix from '../imgs/SignalSix.png';
import SignalSeven from '../imgs/SignalSeven.png';
import SignalEight from '../imgs/SignalEight.png';
import Penalty from '../imgs/Penalty.png';
import BlueLogo from '../imgs/BlueLogo.png';


class Rules extends Component {
	constructor(){
		super();
		this.state = {  
			active:0,
			names:["זמנים " , "שובר שוויון " , "סימני שופטים" , "עונשין" ],
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
					<div id="TimesContentDiv">
						<div>
							<img className="TimesPic" src={TimesBC1Single}/>
						</div>
						<div>
							<img className="TimesPic" src={TimesBC2Single} style={{width:'16.3vw','margin-right':'-0.8vw'}}/>
						</div>
						<div>
							<img className="TimesPic" src={TimesBC3Single} style={{width:'18.69vw','margin-right':'-0.8vw'}}/>
						</div>
						<div>
							<img className="TimesPic" src={TimesBC4Single}/>	
						</div>
						<div>					
							<img className="TimesPic" src={TimesBC3Double}/>
						</div>
						<div>
							<img className="TimesPic" src={TimesBC4Double}/>
						</div>
						<div>
							<img className="TimesPic" src={TimesGroup} />
						</div>				
					</div>
				)
			}
			if(this.state.active==2)
			{
				return(
					<div className="ContentDiv">
								<p className="ContentTopic">שובר שיוויון</p>
								<p className="ContentText">
								אם בסיום כל  המשחקונים התוצאה היא תיקו,
								משחקים משחקון נוסף. מטילים מטבע כדי להחליט מי יזרוק ראשון. מניחים את הכדור הלבן במרכז ריבוע המטרה (במרכז הפלוס) ומשחקים משחקון רגיל. 
								בסיום המשחקון, אם התוצאה היא עדיין שוויון, משחקים משחקון נוסף, והפעם הצד השני יזרוק ראשון את הכדור שלו.
								</p>
								<img className="ContentPic" src={TieCourt} />
														
					</div>
				)
			}

			if(this.state.active==3)
				{
					return(
						<div id="SignalContentDiv">
							<p id="SignalContentTopic"> סימני שופטים </p>
							<div>
								<img className="SignalPic" src={SignalOne}/>
								<p>סימון התוצאה</p>
							</div>

							<div>
								<img className="SignalPic" src={SignalTwo}/>
								<p>שיוויון בין הכדורים</p>
							</div>

							<div>
								<img className="SignalPic" src={SignalThree}/>
								<p>הסרת כדור</p>
							</div>

							<div>
								<img className="SignalPic" src={SignalFour} style={{'margin-right':'5vw'}}/>
								<p>זריקת כדור לבן</p>
							</div>

							<div>
								<img className="SignalPic" src={SignalFive} style={{'margin-right':'2vw'}}/>
								<p>כדור עונשין</p>
							</div>

							<div>
								<img className="SignalPic" src={SignalSix}/>
								<p> כדור מת, כדור בחוץ </p>
							</div>
							
							<div>
								<img className="SignalPic" src={SignalSeven} />
								<p>מדידה </p>
							</div>	

							<div>
								<img className="SignalPic" src={SignalEight} />
								<p> גמר המשחקון </p>
							</div>				
						</div>
					)
				}
			if(this.state.active==4)
				{
					return(
						<div className="ContentDiv Penalty">
								<p className="ContentTopic" style={{'font-size':'1.8vw'}}>עונשין </p>
								<p className="ContentTopic">הסרה</p>
								<p className="ContentText">
								כאשר נזרק כדור לפני שהשופט הורה לזרוק או כאשר נזרק כדור צבעוני לפני הכדור הלבן, הכדור יוצא מהמגרש.
								</p>
								<p className="ContentTopic"> כדור עונשין   </p>
								<p className="ContentText">
								כאשר אחד מהצדדים (או עוזר הספורט) מבצע פעולות בזמן התור של היריב, למשל: הכנה לזריקה, כיוון כיסא הגלגלים, כיוון אביזר עזר או גלגול כדור, מקבל השחקן "שנפגע" מהעבירה, כדור נוסף על כל הפרה שבוצעה. כדורים אלו יזרקו אל ריבוע המטרה, בתום אותה מערכה. כל כדור שיעצור בתוך שטח הריבוע יזכה בנקודה נוספת.
								</p>
								<p className="ContentTopic"> הסרה + כדור עונשין </p>
								<p className="ContentText">
								שילוב של שני העונשים יחד - הסרה וכדור עונשין, יקרה כאשר: <br/>
								<ol>
									<li className="ContentText">השחקן, חלק כלשהו מכיסא הגלגלים, עוזר הספורט או כל ציוד אחר, נוגע בסימונים של תיבת השחקן, או בכל מקום מחוץ לקופסת השחקן.</li>
									<li className="ContentText">השחקן זרק כדור מבלי שלפחות פלח ישבן אחד צמוד למושב הכיסא. </li>
								</ol>
								<img className="ContentPic" src={Penalty} />
								</p>
																				
						</div>
					)				
				}	
			if(this.state.active==5)
				{
					return(
						<div className="ContentDiv">
									<p className="ContentText">5</p>						
						</div>
					)				
				}	
			if(this.state.active==6)
				{
					return(
						<div className="ContentDiv">
									<p className="ContentText">6</p>						
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
			if(this.state.active===1){
				return(
					<FrontBack first={true} onClick={this.handlearrow}/>
				)
			}
			
			if(this.state.active!=0){
				return(
					<FrontBack onClick={this.handlearrow}/>
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
				<SideBar active='5'/>
				<ProgressBar names={this.state.names} active={this.state.active} onClick={this.handlebarclick}/>
				<div id="WhatIsMain">	
					{getLeftLogo()}
					{GetDivContent()}
					{GetDivFrontBack()}					
				</div>				
				<PopUp HeadLine="חוקי המשחק" display={this.state.PopUpDisplay} onClick={this.HandlePopUp}  level={1}/>
				
			</div>

		)

	}
}

export default Rules;