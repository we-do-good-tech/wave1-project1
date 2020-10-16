import React, {Component,componentDidUpdate} from 'react';
import './styles/HowToPlay.css';
import SideBar from '../Components/SideBar.js';
import ProgressBar from '../Components/ProgressBar.js';
import FirstPageTabs from '../Components/FirstPageTabs.js';
import FrontBack from '../Components/FrontBack.js';
import PopUp from '../Components/PopUp.js';
import Game from '../Components/Game.js';
import HowToTarget from '../imgs/HowToTarget.png';
import HowToGainPoints from '../imgs/HowToGainPoints.png';

class HowToPlay extends Component {
	constructor(){
		super();
		this.state = {  
			active:0,
			names:["מטרת המשחק", "מהלך המשחק" , "ניקוד" , "המגרש" ],
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
								<p className="ContentTopic">מטרת המשחק</p>
								<p className="ContentText">
								לזרוק את הכדור שלי הכי קרוב לכדור הלבן.
								</p>
								<p className="ContentTopic">כמות משתתפים</p>
								<p className="ContentText">
								1-3 שחקנים (יחידים, זוגות או קבוצתי).
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
						<div className="ContentDiv">
							<p className="ContentTopic">מטרת המשחק</p>
							<p className="ContentText">
								לזרוק את הכדור שלי הכי קרוב לכדור הלבן.
							</p>
							<img className="ContentPic" src={HowToGainPoints} style={{top:'10vh'}}/>			
						</div>
					)
				}
			if(this.state.active==4)
				{
					return(
						<div className="ContentDiv">
									<p className="ContentText">4</p>						
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
			if(this.state.active!=0){
				return(
					<FrontBack onClick={this.handlearrow}/>
				);
			}
	}
	

		return(
			<div>				
				<SideBar active='2'/>
				<ProgressBar names={this.state.names} active={this.state.active} onClick={this.handlebarclick}/>
				<div id="WhatIsMain">	
					{GetDivContent()}
					{GetDivFrontBack()}					
				</div>				
				<PopUp display={this.state.PopUpDisplay} onClick={this.HandlePopUp}  level={0}/>
			</div>

		)

	}
}

export default HowToPlay;