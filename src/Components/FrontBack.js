import React, {Component, componentDidUpdate} from 'react';
import './styles/FrontBack.css';


class FrontBack extends Component {	
	constructor(props){
		super();
	}


	handleclick = (val)=>{
		this.props.onClick(val);
	}

	render(){

		if(this.props.last){
			return(
			<div>				
					<button id="BackButton" value="1" onClick={()=>this.handleclick(1)} className="FrontBackButtons">
						<span className="rightarrowfont">➜</span> הקודם
					</button>

					<button id="FrontButton" value="2"  className="FrontBackButtons FrontBackButtonsDisabled " >
							הבא  <span className="leftarrowfont">➜</span>
					</button>	
					
			</div>
		)

		}
		return(
			<div>				
					<button id="BackButton" value="1" onClick={()=>this.handleclick(1)} className="FrontBackButtons">
						<span className="rightarrowfont">➜</span> הקודם
					</button>
				
				 
					<button id="FrontButton" value="2" onClick={()=>this.handleclick(2)} className="FrontBackButtons">
							הבא  <span className="leftarrowfont">➜</span>
					</button>	
			</div>
		)
	}
}

export default FrontBack;
