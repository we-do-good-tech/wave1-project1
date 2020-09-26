import React, {Component} from 'react';
import './styles/Home.css';
import Game from './Game.js';




class Home extends Component {
	constructor(){
		super();
		this.state = {  

	  	};
	}


	render(){
		const a = <h1>a</h1>
		return(
			<div>
				<Game/>
			</div>

		)

	}
}

export default Home;
