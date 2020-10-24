import React, {Component,componentDidUpdate} from 'react';
import './styles/MeetThePlayers.css';
import SideBar from '../Components/SideBar.js';
import ProgressBar from '../Components/ProgressBar.js';
import FirstPageTabs from '../Components/FirstPageTabs.js';
import FrontBack from '../Components/FrontBack.js';
import PopUp from '../Components/PopUp.js';
import BocciaIsraelBanner from '../imgs/BocciaIsraelBanner.png';
import WhatIsFourth from '../imgs/WhatIsFourth.png';
import RightSideBanner from '../imgs/RightSideBanner.png';
import LeftSideBanner from '../imgs/LeftSideBanner.png';
import GershonChamp from '../imgs/GershonChamp.png';
import NewChamp from '../imgs/NewChamp.png';
import KickToLive from '../imgs/KickToLive.png';
import NadavFourth from '../imgs/NadavFourth.png';
import BatelWinning from '../imgs/BatelWinning.jpg';
import XButton from '../imgs/XButton.png';
import BocciaVideo from '../imgs/BocciaVideo.png';
import NadavVideo from '../imgs/NadavVideo.png';


class MeetThePlayers extends Component {
	constructor(){
		super();
		this.state = {  
			active:2,
			names:["נדב לוי " , "יוני"],
			PopUpDisplay:'none'
	  	}
	  	this.handlearrow= this.handlearrow.bind(this);
	  	this.handleclick= this.handleclick.bind(this);

	}

	handleclick=(evt)=>{
		this.setState({active:parseInt(evt)});
	}

	handlearrow=(evt)=>{
		if(evt==1){
			if(this.state.active==0){
				this.setState({active:6})
			}
			else{
				this.setState({active:parseInt(this.state.active)-1});
			}
		}

		else if(evt==2){ 
			if(this.state.active==6){
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

	HandlePopUp=(toactive)=>{
		this.setState({active:toactive});
		if(this.state.PopUpDisplay==="none")
			this.setState({PopUpDisplay:"flex"});
		else if(this.state.PopUpDisplay==="flex"){
			this.setState({PopUpDisplay:"none"});
			}
		else{
			this.setState({PopUpDisplay:"none"});
		}	
	}


	getPopUp=()=>{
		let PopUpContent = 
		[
		<iframe src='https://www.youtube.com/watch?v=wecMqoFdRrk&ab_channel=isadisrael'>
		</iframe>
		,
		<iframe src='https://www.youtube.com/watch?v=qtXye1fzX3U'>
		</iframe>
		,
		<img className='MediaPopUpImage' src={GershonChamp}/>
		,
		<img className='MediaPopUpImage' src={NewChamp}/>
		,
		<img className='MediaPopUpImage' src={KickToLive}/>
		,
		<img className='MediaPopUpImage' src={NadavFourth}/>
		,
		<img className='MediaPopUpImage' src={BatelWinning}/>
		]
		return(

			<div id='MediaPopUpWrapper' style={{display:this.state.PopUpDisplay}}>
				<div id="MediaPopUp">
					<p id="rightarrow" onClick={()=>this.handlearrow(1)}>V</p>
					<img id='MediaX'  onClick={()=>this.HandlePopUp()} src={XButton}/>
					{PopUpContent[this.state.active]}
					<p id="leftarrow" onClick={()=>this.handlearrow(2)}>V</p>
				</div>
			</div>
		)
	}

	render(){

		return(
			<div>				
				<SideBar active='6'/>
				<div id="MeetThePlayersMain">	
					<img id="MeetBanner" src={BocciaIsraelBanner}/>	
					<h1> הנבחרת הלאומית של ישראל פעילה החל משנת 2012 </h1>
					<div id='AchievmentsDiv'>
						<div className="Achievment" >
							<p>
								מקום 8 <br/>
								באליפות אירופה <br/>
								2015
							</p>
							<img className='GoldMedal' src={WhatIsFourth}/>
						</div>
						<div className="Achievment">
							<p>
								מקום 4<br/>
								באליפות אירופה <br/>
								2017
							</p>
							<img className='GoldMedal' src={WhatIsFourth}/>
						</div>
						<div className="Achievment">
							<p>
								נדב לוי זכה במדליית<br/>
								כסף באליפויות <br/>
								עולם פתוחות	<br/>
								בשנים 2015 ו-2017
							</p>
							<img className='GoldMedal' src={WhatIsFourth}/>
						</div>
						<div className="Achievment">
							<p>
								נדב לוי השתתף<br/>
								במשחקים<br/>
							הפאראלימפיים בריו	<br/>
							2016 וישתתף בטוקיו</p>
							<img className='GoldMedal' src={WhatIsFourth}/>
						</div>

					</div>
					<div id='InTheMediaBanner'>
						<img src={RightSideBanner}/>
						<p> בוצ'ה בתקשורת </p>
						<img src={LeftSideBanner}/>
					</div>
					<div id = 'InTheMedia'>
						<div className="Achievment"  onClick={()=>this.HandlePopUp(0)}>
							<p>
								נדב לוי שחקן בוצ'ה פאראלימפי
							</p>
							<img src={NadavVideo}/>
						</div>

						<div className="Achievment"  onClick={()=>this.HandlePopUp(1)}>
							<p>
								מה זה בוצ'ה?
							</p>
							<img src={BocciaVideo}/>
						</div>

						<div className="Achievment" onClick={()=>this.HandlePopUp(2)}>
							<p>
								גרשון חיימוב אלוף ישראל
							</p>
							<img src={GershonChamp}/>
						</div>

						<div className="Achievment"  onClick={()=>this.HandlePopUp(3)}>
							<p>
								האלופה החדשה של ישראל BC1
							</p>
							<img src={NewChamp}/>
						</div>

						<div className="Achievment"  onClick={()=>this.HandlePopUp(4)}>
							<p>
								לבעוט זה לחיות
							</p>
							<img src={KickToLive}/>
						</div>


						<div className="Achievment"  onClick={()=>this.HandlePopUp(5)}>
							<p>
								נדב לוי רביעי באירופה
							</p>
							<img src={NadavFourth}/>
						</div>

						<div className="Achievment"  onClick={()=>this.HandlePopUp(6)}>	
							<p>
								בת אל ברגע הניצחון
							</p>
							<img src={BatelWinning}/>
						</div>
					</div>
				</div>	

				{this.getPopUp()}
						
			</div>

		)

	}
}

export default MeetThePlayers;