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
		return(
			<div>
				<div id="BackButton">
					<button value="1" onClick={()=>this.handleclick(1)} className="FrontBackButtons">
						🡺  הקודם
					</button>
				</div>
				<div id="FrontButton">
					<button value="2" onClick={()=>this.handleclick(2)} className="FrontBackButtons">
							הבא 🢀
					</button>
				</div>		
			</div>
		)
	}
}

export default FrontBack;
