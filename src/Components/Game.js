import React, {Component} from 'react';
import court from '../imgs/court.png';
import './styles/Game.css';
import RedCircle from './RedCircle.js';
import WhiteCircle from './WhiteCircle.js';
import BlueCircle from './BlueCircle.js';
import FirstPlayer from '../imgs/FirstPlayer.png';
import SecondPlayer from '../imgs/SecondPlayer.png';

class Game extends Component {
	constructor(){
		super();
		this.state = {  
			redballs:[[38.5,26],[38.5,20.5],[38.5,15],[44,26],[44,20.5],[44,15]],
			blueballs:[[50.5,26],[50.5,20.5],[50.5,15],[56,26],[56,20.5],[56,15]],
			whiteball:[41,9],
			active:0
	  	}
	  	this.movered = this.movered.bind(this);
	}

	calcy=(currenty,newy,steps)=>{
		let toreturn = newy-currenty;
		toreturn = toreturn/steps;
		return toreturn;
	}
	
	movered=(a,b,speed,index)=>{
		let x = this.state.redballs[index][0];
		let y= this.state.redballs[index][1];
		let ysteps = this.calcy(y,b,(a-x));
		if(x-a>0)
			ysteps = this.calcy(y,b,(x-a))

		let myinter = setInterval(()=>
			{
				if(this.state.redballs[index][0]!=a){
					if(x - a >0)
						x-=0.5;
					else
						x+=0.5;
				y+=ysteps;
				let prevBalls=this.state.redballs.concat();
				const newxy =[x,y];
				prevBalls[index] = newxy;
				this.setState({redballs:prevBalls});
				}
				else
					clearInterval(myinter);
			}
			,speed);
		
	}

	moveblue=(a,b,speed,index)=>{
		let x = this.state.blueballs[index][0];
		let y= this.state.blueballs[index][1];
		let ysteps = this.calcy(y,b,(a-x));
		if(x-a>0)
			ysteps = this.calcy(y,b,(x-a))

		let myinter = setInterval(()=>
			{
				if(this.state.blueballs[index][0]!=a){
					if(x - a >0)
						x-=0.5;
					else
						x+=0.5;
				y+=ysteps;
				let prevBalls=this.state.blueballs.concat();
				const newxy =[x,y];
				prevBalls[index] = newxy;
				this.setState({blueballs:prevBalls});
				}
				else
					clearInterval(myinter);
			}
			,speed);
		}

	movewhite=(a,b,speed)=>{
		let x = this.state.whiteball[0];
		let y= this.state.whiteball[1];
		let ysteps = this.calcy(y,b,(a-x));
		if(x-a>0)
			ysteps = this.calcy(y,b,(x-a))

		let myinter = setInterval(()=>
			{
				if(this.state.whiteball[0]!=a){
					if(x - a >0)
						x-=0.5;
					else
						x+=0.5;
				y+=ysteps;
				let prevBalls=this.state.whiteball.concat();
				const newxy =[x,y];
				prevBalls = newxy;
				this.setState({whiteball:prevBalls});
				}
				else
					clearInterval(myinter);
			}
			,speed);

	}
	ActivePlusOne=()=>{
		this.setState({active:this.state.active+1});
	}
	getMove = () =>{
		if(this.state.active==1)
			{
				this.movewhite(57,35,15);
				setTimeout(() => {
				  this.ActivePlusOne();
				},800);
			}
		if(this.state.active==2)
			{	
				setTimeout(() => {
				  this.ActivePlusOne();
				},800);
				this.setState({
					whiteball:[57,61]
				})
				this.movered(52,39,14,3);
			}
		if(this.state.active==3)
			{	
				setTimeout(() => {
				  this.ActivePlusOne();
				},800);
				this.setState({
					redballs:[[38.5,26],[38.5,20.5],[38.5,15],[52,52],[44,20.5],[44,15]],
				})
				this.moveblue(63.5,41.5,22,3);
			}
		if(this.state.active==4)
			{	
				setTimeout(() => {
				  this.ActivePlusOne();
				},800);
				this.setState({
					blueballs:[[50.5,26],[50.5,20.5],[50.5,15],[63.5,57],[56,20.5],[56,15]]
				})
				this.movered(58,38,11,0);
			}
		if(this.state.active==5)
			{
				setTimeout(() => {
				  this.ActivePlusOne();
				},800);
				this.setState({
					redballs:[[58,50],[38.5,20.5],[38.5,15],[52,52],[44,20.5],[44,15]],
				})
				this.movered(70,40,10,1);
			}
		
				
			
		if(this.state.active==0)
			this.ActivePlusOne();
		
		if(this.state.active==6)
			this.reset();

		
		  
				

	}
	getMalePlayerDiv = () =>{
		if(this.state.active==1){
			return(
				<div className="MalePlayerDiv">
					<p className="MalePlayerBubble">
						<span style={{'font-size':'calc(1vw + 1vh)',padding:0, color:' #FAA159','font-weight':'900'}}>1</span>
						<h1 style={{'font-size':'calc(0.7vw + 0.9vh)', 'letter-spacing':'0.07vw'}}>המשחק מתחיל כאשר השחקן <br/> שמשחק בכדורים האדומים, <br/> זורק את הכדור הלבן אל עבר המגרש.</h1>
						<h2 style={{'font-size':'calc(0.65vw + 0.8vh)', 'letter-spacing':'0.07vw','font-weight':'300'}}>לחצו בכל מקום על גבי המגרש<br/> על מנת לזרוק את הכדור הלבן.</h2>
					</p>
					<img src={FirstPlayer} style={{height:'calc(10vh + 10vw)'}}/>
				</div>
			)
		}
		if(this.state.active==2){
			return(
				<div className="MalePlayerDiv">
					<p className="MalePlayerBubbleFirstAlt">
						<span style={{'font-size':'calc(1vw + 1vh)',padding:0, color:' #FAA159','font-weight':'900'}}>2</span>
						<h1 style={{'font-size':'calc(0.7vw + 0.9vh)', 'letter-spacing':'0.07vw'}}>השחקן שזרק את הכדור הלבן <br/> יזרוק את הכדור האדום הראשון.</h1>
						<h2 style={{'font-size':'calc(0.65vw + 0.8vh)', 'letter-spacing':'0.07vw','font-weight':'300'}}>לחצו בכל מקום על גבי המגרש<br/> על מנת לזרוק את הכדור  האדום הראשון </h2>
					</p>
					<img src={FirstPlayer} style={{height:'calc(10vh + 10vw)'}}/>
				</div>
			)
		}
		if(this.state.active==4){
			return(
				<div className="MalePlayerDiv">
					<p className="MalePlayerBubbleSecondAlt">
						<span style={{'font-size':'calc(1vw + 1vh)',padding:0, color:' #FAA159','font-weight':'900'}}>4</span>
						<h1 style={{'font-size':'calc(0.7vw + 0.9vh)', 'letter-spacing':'0.07vw'}}>הצד שהכדור שלו רחוק יותר  מהכדור<br/> הלבן הוא זה שימשיך לזרוק.<br/> לדוגמא: אם הכדור הכחול קרוב יותר<br/>לכדור הלבן, הצד האדום יזרוק כדור נוסף. </h1>
						<h2 style={{'font-size':'calc(0.65vw + 0.8vh)', 'letter-spacing':'0.07vw','font-weight':'300'}}>לחצו בכל מקום על גבי המגרש<br/> על מנת לזרוק כדור אדום נוסף.</h2>
					</p>
					<img src={FirstPlayer} style={{height:'calc(10vh + 10vw)'}}/>
				</div>
			)
		}
		if(this.state.active==5){
			return(
				<div className="MalePlayerDiv">
					<p className="MalePlayerBubbleThirdAlt">
						<span style={{'font-size':'calc(1vw + 1vh)',padding:0, color:' #FAA159','font-weight':'900'}}>5</span>
						<h1 style={{'font-size':'calc(0.7vw + 0.9vh)', 'letter-spacing':'0.07vw'}}>במידה והכדור הכחול עדיין קרוב יותר <br/> לכדור הלבן, האדום יזרוק כדור נוסף.</h1>
						<h2 style={{'font-size':'calc(0.65vw + 0.8vh)', 'letter-spacing':'0.07vw','font-weight':'300'}}>לחצו בכל מקום על גבי המגרש <br/> על מנת לזרוק כדור אדום נוסף.</h2>
					</p>
					<img src={FirstPlayer} style={{height:'calc(10vh + 10vw)'}}/>
				</div>
			)
		}
		else{
			return(
				<div className="MalePlayerDiv">
					<img src={FirstPlayer} style={{height:'calc(10vh + 10vw)'}}/>
				</div>
			)
		}

	}
		getFemalePlayerDiv = () =>{
		if(this.state.active==3){
			return(
				<div className="FemalePlayerDiv">
					<p className="FemalePlayerBubble">
						<span style={{'font-size':'calc(1vw + 1vh)',padding:0, color:' #FAA159','font-weight':'900'}}>3</span>
						<h1 style={{'font-size':'calc(0.7vw + 0.9vh)', 'letter-spacing':'0.07vw'}}>השחקן שמשחק בכדורים הכחולים <br/> יזרוק כדור כחול ראשון.</h1>
						<h2 style={{'font-size':'calc(0.65vw + 0.8vh)', 'letter-spacing':'0.07vw','font-weight':'300'}}>לחצו בכל מקום על גבי המגרש<br/> על מנת לזרוק את הכדור הכחול הראשון.</h2>
					</p>
					<img src={SecondPlayer} style={{height:'calc(10vh + 10vw)'}}/>
				</div>
			)
		}
		else{
			return(
				<div className="FemalePlayerDiv">
					<img src={SecondPlayer} style={{height:'calc(10vh + 10vw)'}}/>
				</div>
			)
		}

	}
	getGameSituation=()=>{
		if(this.state.active==0){
			return(
				<p className="Situation">
				<h1 className="ContentText">מהלך המשחק</h1>
				<h2>לחצו בכל מקום על גבי המגרש כדי<br/> להתחיל את מהלך המשחק.</h2>
				</p>
			)
		}
		if(this.state.active==6){
			return(
				<p className="Situation">
				<h1 className="ContentText">מהלך המשחק</h1>
				<h2>לחצו בכל מקום על גבי המגרש כדי<br/> להתחיל לשחק.</h2>
				</p>
			)
		}
		else{
			return(
				<p className="Situation">
				<h1 className="ContentText">מהלך המשחק</h1>
				<h2></h2>
				</p>
			)
		}
	}

	reset = () =>{
		this.setState(
				{
					redballs:[[38.5,26],[38.5,20.5],[38.5,15],[44,26],[44,20.5],[44,15]],
					blueballs:[[50.5,26],[50.5,20.5],[50.5,15],[56,26],[56,20.5],[56,15]],
					whiteball:[41,9],
					active:0
				})
	}

	render(){

		return(
			<div>
				{this.getGameSituation()}
				<div id="MainGameDiv">
					{this.getFemalePlayerDiv()}
					<div id="gamediv">
						<img id="court" src={court} onClick={this.getMove}/>
						<div id="GamePress" onClick={this.getMove} / >
						<RedCircle x={this.state.redballs[0][0]} y={this.state.redballs[0][1]}/>
						<RedCircle x={this.state.redballs[1][0]} y={this.state.redballs[1][1]}/>
						<RedCircle x={this.state.redballs[2][0]} y={this.state.redballs[2][1]}/>
						<RedCircle x={this.state.redballs[3][0]} y={this.state.redballs[3][1]}/>
						<RedCircle x={this.state.redballs[4][0]} y={this.state.redballs[4][1]}/>
						<RedCircle x={this.state.redballs[5][0]} y={this.state.redballs[5][1]}/>
						<BlueCircle x={this.state.blueballs[0][0]} y={this.state.blueballs[0][1]}/>
						<BlueCircle x={this.state.blueballs[1][0]} y={this.state.blueballs[1][1]}/>
						<BlueCircle x={this.state.blueballs[2][0]} y={this.state.blueballs[2][1]}/>
						<BlueCircle x={this.state.blueballs[3][0]} y={this.state.blueballs[3][1]}/>
						<BlueCircle x={this.state.blueballs[4][0]} y={this.state.blueballs[4][1]}/>
						<BlueCircle x={this.state.blueballs[5][0]} y={this.state.blueballs[5][1]}/>
						<WhiteCircle  x={this.state.whiteball[0]} y={this.state.whiteball[1]}/>
					</div>
					{this.getMalePlayerDiv()}
				</div>
			</div>

		)

	}
}

export default Game;

