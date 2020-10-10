import React, {Component, componentDidUpdate} from 'react';
import './styles/ProgressBar.css';

class ProgressBar extends Component {
	constructor(props){
		super();
		this.state = {  
			names:props.names,
			active:props.active
	  	}

	}

	handleclick=(val)=>{
    	this.props.onClick(val);
    }

	componentWillUpdate(prevProps, prevState) {
      if(prevProps.active!==this.state.active)
       this.setState({active:prevProps.active});
    }


    

	render(){

		const getClass=(number)=>{
			if(number===parseInt(this.state.active))
				return("activesidenavtabs sidenavtabs");
			else
				return("sidenavtabs");
		}


		let ProgressBarNames = [];
		if(this.state.active===1){
			ProgressBarNames.push(<button onClick={()=>this.handleclick(1)} value={1} className="MainButton MainButtonActive rightcurved"><p>{this.state.names[0]}</p></button>);
		}
		else{
			ProgressBarNames.push(<button onClick={()=>this.handleclick(1)} value={1} className="MainButton rightcurved"><p>{this.state.names[0]}</p></button>);
		}

		for(let i = 1;i<this.state.names.length-1;i++){
			if(i+1===this.state.active){
				ProgressBarNames.push(
				<button onClick={()=>this.handleclick(i+1)} value={i} className="MainButton MainButtonActive"><p>{this.state.names[i]}</p></button>
				)
			}

			else{
			ProgressBarNames.push(
				<button onClick={()=>this.handleclick(i+1)} value={i} className="MainButton"><p>{this.state.names[i]}</p></button>
				)
			}
		}

		
		if(this.state.active===this.state.names.length){
			ProgressBarNames.push(<button onClick={()=>this.handleclick(this.state.names.length)} value={this.state.names.length} className="MainButton MainButtonActive leftcurved"><p>{this.state.names[this.state.names.length-1]}</p></button>);
		}
		else{
			ProgressBarNames.push(<button onClick={()=>this.handleclick(this.state.names.length)} value={this.state.names.length} className="MainButton leftcurved"><p>{this.state.names[this.state.names.length-1]}</p></button>);
		}

		if(this.state.active!=0){
			return(
				<div className="MainButtonDiv">
					{ProgressBarNames}
				</div>

			)	
		}

		else
			return(<div></div>);

	}
}

export default ProgressBar;