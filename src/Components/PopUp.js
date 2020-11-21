import React, {Component} from 'react';
import './styles/PopUp.css';
import TestYourSelf from '../imgs/TestYourSelf.png';
import XButton from '../imgs/XButton.png';
import PopUpGame from './PopUpGame.js';
import Levels from '../Levels.js';

class PopUp extends Component {
	constructor(props){
		super();
		this.state = {  
			display:props.display,
			level:props.level,
			HeadLine:props.HeadLine,
			visibility:!this.explanation,
			explanation:props.explanation
	  	}
	}

	setExplanationOff = () =>{
		this.setState({explanation: false});
	}

	componentWillUpdate(newProps, newState){
    	if(newProps.display!==this.state.display)
			this.setState({display:newProps.display});
		if(newProps.explanation!=this.state.explanation)
			this.setState({explanation:newProps.explanation});
		if(newState.display!== newProps.display)
			this.setState({visibility:!this.state.visibility});
	}
	getExplanation = () =>{
		const {visibility} = this.state;
		switch (this.state.level){
			case 1:{
				return(
					<div id="explanationDiv" style={{display: visibility? 'block' : 'none',width:'14vw'}}>
						<h1>חושב שאתה יודע איך משחקים?</h1>
					</div>
				)
			}
			case 2:{
				return(
					<div id="explanationDiv" style={{display: visibility? 'block' : 'none'}}>
						<h1>בחן את עצמך</h1>
						<p>לאורך כל הלומדה תוכל לבחון את עצמך. <br/>באפשרותך לבחור האם בתחילת הפרק,<br/> באמצע או בסוף.</p>
						<img className="XButton" src={XButton} onClick={()=>this.setExplanationOff()}/>
					</div>
				)
			}
		}
	}
	
	render(){
		const {explanation} = this.state;
		return(
			<div>
				<div className="PopUpBackground" style={{display:this.state.display}} >
					<div className="PopUpContent" >
					 <img className="XButton" src={XButton} onClick={this.props.onClick}/>
					 <PopUpGame onClick={this.props.onClick} HeadLine={this.state.HeadLine} moveTo={this.state.level} level={Levels[this.state.level]}/>  
					</div>
				</div>
				{explanation ? (
					this.getExplanation()
				) : (<></>)}
				<img className="TestYourSelfImg" src={TestYourSelf} onClick={()=>this.props.onClick()}/>
			</div>


			
			
		)	
		

	}
}

export default PopUp;