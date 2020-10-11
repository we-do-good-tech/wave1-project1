import React, {Component,componentDidUpdate} from 'react';
import './styles/WhatIsBoccia.css';
import SideBar from '../Components/SideBar.js';
import ProgressBar from '../Components/ProgressBar.js';
import FirstPageTabs from '../Components/FirstPageTabs.js';
import FrontBack from '../Components/FrontBack.js';
import PopUp from '../Components/PopUp.js';

class BocciaClasses extends Component {
	constructor(){
		super();
		this.state = {  
			active:0,
			names:["סיווג BC1" ,"סיווג BC2" ,"סיווג BC3" ,"סיווג BC4" ,"סיווג BC5" ],
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
					
						<FirstPageTabs names={this.state.names} onClick={this.handlebarclick}/>
					
				)
			}

			if(this.state.active==1)
			{
				return(
					<div className="ContentDiv">
								<p className="ContentText">1</p>						
					</div>
				)
			}
			if(this.state.active==2)
			{
				return(
					<div className="ContentDiv">
								<p className="ContentText">2</p>						
					</div>
				)
			}

			if(this.state.active==3)
				{
					return(
						<div className="ContentDiv">
									<p className="ContentText">3</p>						
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
			if(this.state.active!=0){
				return(
					<FrontBack onClick={this.handlearrow}/>
				);
			}
	}
	

		return(
			<div>				
				<SideBar active='2'/>
				<div id="WhatIsMain">	
					<ProgressBar names={this.state.names} active={this.state.active} onClick={this.handlebarclick}/>
					{GetDivContent()}
					{GetDivFrontBack()}					
				</div>			
				<PopUp display={this.state.PopUpDisplay} onClick={this.HandlePopUp}/>	
			</div>

		)

	}
}

export default BocciaClasses;