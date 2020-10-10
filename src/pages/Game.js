import React, {Component} from 'react';
import court from '../imgs/court.png';
import './styles/Game.css';
import RedCircle from './RedCircle.js';
import WhiteCircle from './WhiteCircle.js';

class Game extends Component {
	constructor(){
		super();
		this.state = {  
			x:117,
			y:180
	  	}
	  	this.move = this.move.bind(this);
	}

	calcy=(currenty,newy,steps)=>{
		let toreturn = newy-currenty;
		toreturn = toreturn/steps;
		return toreturn;
	}
	
	move=(a,b,speed)=>{
		let x = this.state.x;
		let y= this.state.y;
		let ysteps = this.calcy(y,b,(a-x))
		let myinter = setInterval(()=>
			{
				if(this.state.x!=a){
				x+=1;
				y+=ysteps;
				this.setState({x:x , y:y});
				}
				else
					clearInterval(myinter);
			}
			,speed);
		
	}


	render(){

		return(
			<div>
				<div id="gamediv" >
					<img id="court" src={court}/>
					<RedCircle x={this.state.x} y={this.state.y}/>
					<WhiteCircle  x={122} y={502}/>
					<p><button onClick={()=>this.move(130,450,18)}>Click Me</button></p>
					<p><button onClick={()=>{this.setState({x:117,y:140})}}>Reset</button></p>
				</div>
				<h1>Johnny need to throw the red ball as close as he can to the Jack</h1>
				<h1>Help Him!</h1>
			</div>

		)

	}
}

export default Game;

