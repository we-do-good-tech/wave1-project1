import React, {Component} from 'react';
import './styles/PopUpGame.css';

class PopUpGame extends Component {
	constructor(props){
		super();
		this.state = {  
			active:0,
			level:props.level,
			answered:[],
			right:0
	  	}
	}

	checkAnswers=()=>{
		let counter=0;
		this.state.answered.forEach((answer,i)=>{
			if(answer===this.state.level[i].right)
				counter++;
		})
		this.setState({right:counter,active:this.state.level.length});
	}

	pushToAnswer =(i)=>{
		let tempArr= this.state.answered.concat();
		tempArr[this.state.active]=i;
		this.setState({answered:tempArr});
		console.log(this.state.answered);
	}

	getQuestion =()=>{
		if(this.state.active!=this.state.level.length)
		return <p className="question">{this.state.level[this.state.active].Question}</p>;
		else{
			return(
			 <div>
			 	<p className="question" style={{left:'40%'}}>ענית נכון על: {this.state.right} שאלות</p>
			 	<p className="reset" onClick={()=>this.setState({active:0,answered:[],right:0})}>↺</p>
			</div>)
		}
	}

	getAnswers = ()=>{
		let AnswersArray = [];
		if(this.state.active!=this.state.level.length){
			if(this.state.level[this.state.active].Kind==1){
				this.state.level[this.state.active].Answers.forEach((element,i)=>{
					if(i===this.state.answered[this.state.active])
					AnswersArray.push(<p className="AnswerPCsn" onClick={()=>this.pushToAnswer(i)}>{i+1}.<span>{element}</span></p>)
					else
					AnswersArray.push(<p className="AnswerP" onClick={()=>this.pushToAnswer(i)}>{i+1}.<span>{element}</span></p>)
				})
				return (
					<div className="AnswersDiv">
						{AnswersArray}
					</div>
					);
			}

			if(this.state.level[this.state.active].Kind==2){
				this.state.level[this.state.active].Answers.forEach((element,i)=>{
					if(i===this.state.answered[this.state.active])
					AnswersArray.push(<button className="AnswerBtnCsn AnswerBtn" onClick={()=>this.pushToAnswer(i)}>{element}</button>)
					else
					AnswersArray.push(<button className="AnswerBtn" onClick={()=>this.pushToAnswer(i)}>{element}</button>)
				})
				return (
					<div className="AnswersBtnDiv">
						{AnswersArray}
					</div>
					);
			}
		}
		return AnswersArray;
	}

	handlearrow=(evt)=>{
		if(evt==1){
			if(this.state.active===0){
				this.setState({active:this.state.level.length})
			}
			else{
				this.setState({active:parseInt(this.state.active)-1});
			}
		}

		else if(evt==2){ 
			if(this.state.active===this.state.level.length){
				this.setState({active:0})
			}
			else{
				this.setState({active:parseInt(this.state.active)+1})
			}
		}		
	}

	getButtons =()=>{
		if(this.state.active===0){
			return(
				<div className="PopUpGameButtonDiv">
					<button className="PopUpGameButton" onClick={()=>this.handlearrow(2)}>הבא  <span className="leftarrowfont">➜</span></button>
					<button className="PopUpGameButton PopUpGameButtonShut"><span className="rightarrowfont">➜</span> הקודם</button>
				</div>
			)	
		}
		if(this.state.active===this.state.level.length){
			return(
				<div className="PopUpGameButtonDiv">
					<button className="PopUpGameButton" onClick={this.checkAnswers}>בדוק</button>
					<button className="PopUpGameButton" onClick={()=>this.handlearrow(1)}><span className="rightarrowfont">➜</span> הקודם</button>
				</div>
			)	
		}
		else{
			return(
				<div className="PopUpGameButtonDiv">
					<button className="PopUpGameButton" onClick={()=>this.handlearrow(2)}>הבא  <span className="leftarrowfont">➜</span></button>
					<button className="PopUpGameButton" onClick={()=>this.handlearrow(1)}><span className="rightarrowfont">➜</span> הקודם</button>
				</div>
			)
		}
	}
	getFollower=()=>{
		if(this.state.active<this.state.level.length)
			return <p className="Follower">{this.state.active+1}/{this.state.level.length}</p>
	}


	render(){

		return(
			<div className="PopUpGameDiv">
				{this.getQuestion()}
				{this.getAnswers()}
				{this.getButtons()}
				{this.getFollower()}
			</div>

		)

	}
}

export default PopUpGame;

