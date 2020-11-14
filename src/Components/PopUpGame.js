import React, {Component} from 'react';
import './styles/PopUpGame.css';
import AlmostWin from '../imgs/AlmostWin.png';
import DidWin from '../imgs/DidWin.png';
import RightMedal from '../imgs/RightMedal.png';
import WrongMedal from '../imgs/WrongMedal.png';
import one from '../imgs/Stars/one.png';
import two from '../imgs/Stars/two.png';
import three from '../imgs/Stars/three.png';
import zero from '../imgs/Stars/zero.png';


class PopUpGame extends Component {
	constructor(props){
		super();
		this.state = {  
			active:0,
			level:props.level,
			answered:'',
			right:0,
			tries:0,
			display:'none',
			content:'',
			buttontype:1,
			clickable:true,
			HeadLine:props.HeadLine,
			LastQuestion:false
		  }
		  
	}


	getAnsweres = ()=>{
		let level = this.state.level;
		let active = this.state.active;
		let tempArr = [];
		if(level[active].Kind===1){
			level[active].Answers.forEach((Answer,i)=>{
				if(i===this.state.answered)
				{
					tempArr.push(<p className="Answer CsnAnswer" onClick={()=>this.handleClick(i)}>{i+1}. {Answer}</p>)
				}
				else
				{
				tempArr.push(<p className="Answer" onClick={()=>this.handleClick(i)}>{i+1}. {Answer}</p>)
				}
			})

			return(
			<div className="AnswersDiv"  style={{opacity:this.getOpacity()}}>
				{tempArr}
			</div>
			)
		}
		else if(level[active].Kind===2){
				tempArr.push(<p className="BtnAnswerWrong" onClick={()=>this.handleClick(0)}>{level[active].Answers[0]}</p>)
				tempArr.push(<p className="BtnAnswerRight" onClick={()=>this.handleClick(1)}>{level[active].Answers[1]}</p>)
			return(
				<div className="BtnAnswersDiv" style={{opacity:this.getOpacity()}}>
					{tempArr}
				</div>
			)
		}
		else if(level[active].Kind===3){
				
				tempArr.push(<img className="PictureAnswer" onClick={()=>this.handleClick(0)} src={level[active].Answers[0]}/>)
				tempArr.push(<img className="PictureAnswer" onClick={()=>this.handleClick(1)} src={level[active].Answers[1]}/>)
			return(
				<div className="PicutreAnswersDiv"  style={{opacity:this.getOpacity()}}>
					<img className="PictureQuestion" src={level[active].PictureQuestion}/>
					<div className="PicutreAnswersDivBtns">
					{tempArr}
					</div>
				</div>
			)
		}
		else if(level[active].Kind===4){
			level[active].Answers.forEach((Answer,i)=>{
				if(i===this.state.answered)
				{
					tempArr.push(<p className="Answer CsnAnswer" onClick={()=>this.handleClick(i)}>{i+1}. {Answer}</p>)
				}
				else
				{
				tempArr.push(<p className="Answer" onClick={()=>this.handleClick(i)}>{i+1}. {Answer}</p>)
				}
			})

			return(
			<div style={{opacity:this.getOpacity()}} className="AnswersDiv">
				{tempArr}
			</div>
			)
		}

		return(
			<div  style={{opacity:this.getOpacity()}} className="AnswersDiv">
				{tempArr}
			</div>
		)
	}

	getQuestion = ()=>{
		let level = this.state.level[this.state.active];
		return(
			<p id="Question" style={{opacity:this.getOpacity()}}>{this.state.active+1}. {level.Question} </p>
		)
	}

	checkAnswer = (i) =>{
		let level = this.state.level;
		let active = this.state.active;
		if(level[active].right === i)
			return true;
	}

	handleClick=(myanswer)=>{
		let level = this.state.level;
		let active = this.state.active;
		let answered = this.state.answered;
		let right = this.state.right;
		if(this.state.clickable){
			this.setState({answered:myanswer});
			if(level[active].Kind===4){
				right+=1;
				this.setState({clickable:false,display:'block',buttontype:1,tries:0,right:right})
			}
			else if(this.checkAnswer(myanswer)){
				right+=1;
				this.setState({clickable:false,display:'block',buttontype:1,tries:0,right:right})
			}
			else if(this.state.tries===0){
				this.setState({clickable:false,display:'block',buttontype:2,tries:1})
			}
			else{
				this.setState({clickable:false,display:'block',buttontype:3,tries:0})
			}
		}
	}

	NextActive = () =>{
		let temp = this.state.active;
		temp+=1;
		this.setState({active:temp});
	}

	handleNextButton = () =>{
		this.NextActive();
		this.setState({display:"none",answered:'',clickable:true})
	}

	explanationPopUp=()=>{
		if(this.state.buttontype===1){
			return(
				<div style={{display:this.state.display}} id="explanationPopUp">
					<p id="V">✔</p>
					<p id="congrats">כל הכבוד! תשובה נכונה  </p>
					<p id="explanation">{this.state.level[this.state.active].Explanation}</p>
					{this.isLast()?
					(
						<button className="NextButton" onClick={()=>this.handleNextButton()}>לסיום המבחן</button>
					) :
					(
						<button className="NextButton" onClick={()=>this.handleNextButton()}>לשאלה הבאה</button>
					)}
					
				</div>
			)
		}
		else if(this.state.buttontype===2){
			return(
				<div style={{display:this.state.display}} id="explanationPopUp">
					<button className="NextButton" onClick={()=>this.setState({clickable:true,display:"none",answered:''})}>נסו שוב</button>
					<p id="V" style={{'background-color':'#DC5B59'}}>✖</p>
					<p id="nocongrats">תשובה לא נכונה</p>
					<p id="explanation">{this.state.level[this.state.active].Explanation}</p>
				</div>
			)
		}
		else {
			return(
				<div style={{display:this.state.display}} id="explanationPopUp">
					{this.isLast()?
						(
							<button className="NextButton" onClick={()=>this.handleNextButton()}>לסיום המבחן</button>
						) :
						(
							<button className="NextButton" onClick={()=>this.handleNextButton()}>לשאלה הבאה</button>
						)
					}
					<p id="V" style={{'background-color':'#DC5B59'}}>✖</p>
					<p id="nocongrats">ענית פעמיים תשובה לא נכונה  </p>
					<p id="explanation">{this.state.level[this.state.active].Explanation}</p>
				</div>
			)
		}
	}



	getScore=()=>{
		if(this.state.right=== this.state.level.length)
		{
			return(
				<div id="score">
					<p> כל הכבוד !</p>
					<p> ענית על {this.state.right} מתוך {this.state.level.length}</p>
					<img src={DidWin}/>
					<div id="ScoreBtnsDiv">
						<button onClick={()=>{this.setState({active:0,right:0,LastQuestion:false})}}>התחל שוב </button>
						<button onClick={()=>{this.props.onClick()}}> סגור מבחן </button>
					</div>
				</div>
			)
		}

		else if(this.state.right>= this.state.level.length*0.8)
		{
				return(
					<div id="score">
						<p> כל הכבוד !</p>
						<p> ענית על {this.state.right} מתוך {this.state.level.length}</p>
						<img src={three}/>
						<div id="ScoreBtnsDiv">
							<button onClick={()=>{this.setState({active:0,right:0})}}>התחל שוב </button>
							<button onClick={()=>{this.props.onClick()}}> סגור מבחן </button>
						</div>
					</div>
				)
		}

		else if(this.state.right>= this.state.level.length*0.3)
		{
				return(
					<div id="score">
						<p> כל הכבוד !</p>
						<p> ענית על {this.state.right} מתוך {this.state.level.length}</p>
						<img src={two}/>
						<div id="ScoreBtnsDiv">
							<button onClick={()=>{this.setState({active:0,right:0})}}>התחל שוב </button>
							<button onClick={()=>{this.props.onClick()}}> סגור מבחן </button>
						</div>
					</div>
				)
		}
		else if(this.state.right>= this.state.level.length*0.1)
		{
				return(
					<div id="score">
						<p> כל הכבוד !</p>
						<p> ענית על {this.state.right} מתוך {this.state.level.length}</p>
						<img src={one}/>
						<div id="ScoreBtnsDiv">
							<button onClick={()=>{this.setState({active:0,right:0})}}>התחל שוב </button>
							<button onClick={()=>{this.props.onClick()}}> סגור מבחן </button>
						</div>
					</div>
				)
		}
		else
		{
			return(
				<div id="score">
					<p>נסיון טוב</p>
					<p> ענית על {this.state.right} מתוך {this.state.level.length}</p>
					<img src={zero}/>
					<div id="ScoreBtnsDiv">
						<button onClick={()=>{this.setState({active:0,right:0})}}>התחל שוב </button>
						<button onClick={()=>{this.props.onClick()}}> סגור מבחן </button>
					</div>
				</div>
			)
		}
	}

	getImage = ()=>{
		if(this.state.level[this.state.active].Kind===1){
			return(
				<img className="QuestionImage" src={this.state.level[this.state.active].img} style={{opacity:this.getOpacity()}}/>
			)
		}
		if(this.state.level[this.state.active].Kind===2){
			return(
				<img className="YesNoQuestionImage" src={this.state.level[this.state.active].img} style={{opacity:this.getOpacity()}}/>
			)
		}
	}
	getOpacity=()=>{
		if(this.state.clickable)
			return 1;
		else
			return 0.2;
	}
	
	skip = () =>{
		const clickable = this.state.clickable;
		if(clickable)
			this.setState({active:parseInt(this.state.active)+1})
	}

	isLast = () =>{
		if(this.state.active === this.state.level.length-1) 
			return true
		return false;
	}

	render(){
			

		if(this.state.active!=this.state.level.length){
			return(
				<div className="PopUpGameDiv" >
					<p className="PopUpGameHeadLine" style={{opacity:this.getOpacity()}}> בחן את עצמך בנושא: {this.state.HeadLine}</p>
					<p className="PopUpGameHeadLine" style={{"margin-top":'-1.2vw', 'font-size':'1.6vw',opacity:this.getOpacity()}}> שאלה  {this.state.active+1} מתוך {this.state.level.length}</p>
					{this.getQuestion()}
					{this.getAnsweres()}
					{this.explanationPopUp()}
					{this.getImage()}
					<button id="Skip" onClick={() => this.skip()}>דלג</button>
				</div>

			)
		}
		else{
			return(
				<div className="PopUpGameDiv">
					{this.getScore()}
				</div>
			)
		}	

	}
}

export default PopUpGame;

