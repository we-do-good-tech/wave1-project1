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
import KickToLive from '../imgs/KickToLive.jpg';
import NadavFourth from '../imgs/NadavFourth.png';
import BatelWinning from '../imgs/BatelWinning.jpg';
import XButton from '../imgs/XButton.png';
import BocciaVideo from '../imgs/BocciaVideo.png';
import NadavVideo from '../imgs/NadavVideo.png';
import Instagram from '../imgs/Instagram.png';
import Facebook from '../imgs/Facebook.png';
import MTPone from '../imgs/MTP/MTPone.jpg';
import MTPtwo from '../imgs/MTP/MTPtwo.png';
import MTPthree from '../imgs/MTP/MTPthree.png';
import MTPfour from '../imgs/MTP/MTPfour.png';
import MTPfive from '../imgs/MTP/MTPfive.png';
import MTPsix from '../imgs/MTP/MTPsix.png';
import MTPseven from '../imgs/MTP/MTPseven.png';
import MTPeight from '../imgs/MTP/MTPeight.png';
import MTPnine from '../imgs/MTP/MTPnine.jpg';
import MTPten from '../imgs/MTP/MTPten.jpg';
import LeftAlbumBanner from '../imgs/LeftAlbumBanner.png'
import RightAlbumBanner from '../imgs/RightAlbumBanner.png'

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
				this.setState({active:5})
			}

			else if(this.state.active===6){
				this.setState({active:15})
			}
			else{
				this.setState({active:parseInt(this.state.active)-1});
			}
		}

		else if(evt==2){ 
			if(this.state.active==15){
				this.setState({active:6});
			}
			else if(this.state.active==5){
				this.setState({active:0});
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
		<iframe src="https://www.youtube.com/embed/wecMqoFdRrk" >
		</iframe>
		,
		<iframe src='https://www.youtube.com/embed/qtXye1fzX3U'>
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
		<img className='MediaPopUpImage' src={MTPone}/>
		,
		<img className='MediaPopUpImage' src={MTPtwo}/>
		,
		<img className='MediaPopUpImage' src={MTPthree}/>
		,
		<img className='MediaPopUpImage' src={MTPfour}/>
		,
		<img className='MediaPopUpImage' src={MTPfive}/>
		,
		<img className='MediaPopUpImage' src={MTPsix}/>
		,
		<img className='MediaPopUpImage' src={MTPseven}/>
		,
		<img className='MediaPopUpImage' src={MTPeight}/>
		,
		<img className='MediaPopUpImage' src={MTPnine}/>
		,
		<img className='MediaPopUpImage' src={MTPten}/>
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
						<div className="Achievment"  onClick={()=>this.HandlePopUp(0)} style={{'background-image':'url('+NadavVideo+')'}}>
							<p>
								נדב לוי שחקן בוצ'ה פאראלימפי
							</p>
							
						</div>

						<div className="Achievment"  onClick={()=>this.HandlePopUp(1)} style={{'background-image':'url('+BocciaVideo+')'}}>
							<p>
								מה זה בוצ'ה?
							</p>
						</div>

						<div className="Achievment" onClick={()=>this.HandlePopUp(2)}style={{'background-image':'url('+GershonChamp+')'}}>
							<p>
								גרשון חיימוב אלוף ישראל
							</p>
						</div>

						<div className="Achievment"  onClick={()=>this.HandlePopUp(3)} style={{'background-image':'url('+NewChamp+')'}}>
							<p>
								האלופה החדשה של ישראל BC1
							</p>
						</div>

						<div className="Achievment"  onClick={()=>this.HandlePopUp(4)} style={{'background-image':'url('+KickToLive+')'}}>
							<p>
								לבעוט זה לחיות
							</p>
							
						</div>


						<div className="Achievment"  onClick={()=>this.HandlePopUp(5)}>
							<p>
								נדב לוי רביעי באירופה
							</p>
							<img src={NadavFourth}/>
						</div>
					</div>

					<div id='InTheMediaBanner'>
						<img src={RightAlbumBanner} style={{'margin-bottom':'1vw',marginLeft:'1vw'}}/>
							<p>אלבום תמונות   </p>
						<img src={LeftAlbumBanner}  style={{'margin-bottom':'1vw',marginright:'2vw'}}/>
					</div>

					<div id="InTheMedia">
						<div className="Achievment"  onClick={()=>this.HandlePopUp(6)}>	
							<img src={MTPone}/>
						</div>
						<div className="Achievment"  onClick={()=>this.HandlePopUp(7)}>	
							<img src={MTPtwo}/>
						</div>
						<div className="Achievment"  onClick={()=>this.HandlePopUp(8)}>	
							<img src={MTPthree}/>
						</div>
						<div className="Achievment"  onClick={()=>this.HandlePopUp(9)}>	
							<img src={MTPfour}/>
						</div>
						<div className="Achievment"  onClick={()=>this.HandlePopUp(10)}>	
							<img src={MTPfive}/>
						</div>
						<div className="Achievment"  onClick={()=>this.HandlePopUp(11)}>	
							<img src={MTPsix}/>
						</div>
						<div className="Achievment"  onClick={()=>this.HandlePopUp(12)}>	
							<img src={MTPseven}/>
						</div>
						<div className="Achievment"  onClick={()=>this.HandlePopUp(13)}>	
							<img src={MTPeight}/>
						</div>
						<div className="Achievment"  onClick={()=>this.HandlePopUp(14)}>	
							<img src={MTPnine}/>
						</div>
						<div className="Achievment"  onClick={()=>this.HandlePopUp(15)}>	
							<img src={MTPten}/>
						</div>
						<ul id="LookForUs">
							<li>חפשו אותנו ברשתות החברתיות:</li>
							<li id="IGlist"><img src={Instagram}/><a href="https://www.instagram.com/para_israel/">para_israel</a></li>
							<li id="FBlist"><img src={Facebook}/><a href="https://www.facebook.com/bocciaIl">עמותת הבוצ'ה לנכים בישראל  </a></li>	
						</ul>
					</div>
					
				</div>	

				{this.getPopUp()}
				
			</div>

		)

	}
}

export default MeetThePlayers;