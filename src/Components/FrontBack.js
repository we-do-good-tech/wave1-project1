import React, {Component, componentDidUpdate} from 'react';
import './styles/FrontBack.css';


class FrontBack extends Component {	
	constructor(props){
		super();
		this.state={
			moveTo:props.moveTo
		}
	}


	handleclick = (val)=>{
		this.props.onClick(val);
	}

	moveTo =() =>{
		console.log(this.state.moveTo);
		switch (this.state.moveTo){
			case 1:
				window.location.href = './#/HowToPlay';
				break;
			case 2:
				window.location.href ='./#/BocciaClasses';
				break;
			case 3:
				window.location.href ='./#/Rules';
				break;
			case 4:
				window.location.href ='./#/MeetThePlayers';
				break;
			default:
				window.location.href ='./#/Home';
		}
	}
	render(){
		const styles={
			marginLeft:'0.85vw',
			marginRight:'0'
		}

		if(this.props.first){
			return(
			<div>				
					<button id="BackButton" value="1"  className="FrontBackButtons FrontBackButtonsDisabled ">
						<span className="rightarrowfont">➜</span> הקודם
					</button>

					<button id="FrontButton" value="2" onClick={()=>this.handleclick(2)}  className="FrontBackButtons " >
							הבא  <span className="leftarrowfont">➜</span>
					</button>	
					
			</div>
		)
		}

		if(this.props.last){
			return(
			<div>				
					<button id="BackButton" value="1" onClick={()=>this.handleclick(1)} className="FrontBackButtons">
						<span className="rightarrowfont">➜</span> הקודם
					</button>

					<button id="FrontButton" value="2"  className="FrontBackButtons" >
							לפרק הבא  <span className="leftarrowfont" style={styles} onClick={()=> this.moveTo()}>➜</span>
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
