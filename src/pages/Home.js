import React, {Component} from 'react';
import Game from '../Components/Game.js';




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
