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
			level:props.level
	  	}

	}

componentWillUpdate(newProps, newState) {
      if(newProps.display!==this.state.display)
       this.setState({display:newProps.display});
    }
	render(){

		
		

		
		return(
			<div>
				<div className="PopUpBackground" style={{display:this.state.display}} >
					<div className="PopUpContent" >
					 <img className="XButton" src={XButton} onClick={this.props.onClick}/>
					 <PopUpGame level={Levels[this.state.level]}/>  
					</div>
						
				</div>
				
				<img className="TestYourSelfImg" src={TestYourSelf} onClick={()=>this.props.onClick()}/>
			</div>


			
			
		)	
		

	}
}

export default PopUp;