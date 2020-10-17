import React, {Component, componentDidUpdate} from 'react';
import './styles/Court.css';
import CourtBase from '../imgs/CourtBase.png';
import PlusButton from '../imgs/PlusButton.png';
import CourtTwo from '../imgs/CourtTwo.png';
import CourtThree from '../imgs/CourtThree.png';
import CourtFour from '../imgs/CourtFour.png';
import CourtFive from '../imgs/CourtFive.png';
import CourtSix from '../imgs/CourtSix.png';
import CourtOne from '../imgs/CourtOne.png';
import OrangeX from '../imgs/OrangeX.png';

class Court extends Component {	
	constructor(props){
		super();
		this.state={
			active:0
		}
	}


	HandleClick=(index)=>{
		if(index== this.state.active)
			this.setState({active:0});
		else
			this.setState({active:index});
	}


	render(){
		const topicstyle={
			'font-size':'1.2vw',
			'color':'#FAA159',
			padding:'0',
			'font-weight':'900'
		}
		const contentstyle={
			'font-size':'1.1vw',
			'color':'#454343',
			padding:'0',
			'font-weight':'900'
		}

		let GetDivContent= () => {			
			if(this.state.active==0)
			{
				return(
					<div className="CourtMainDiv">
						<div className="CourtText">
							<p className="ContentText BolderText">המגרש</p>
							<p className="ContentText">לחצו על כפתורי  הפלוס כדי לראות  את חלקי המגרש השונים.</p>
						</div>

						<div className="CourtWrapper">
							<div className="CourtBaseDiv">
								<img className="CourtBaseImg" src={CourtBase}/>
								<img className="PlusButtonActive" id="PlusButtonOne" onClick={()=>this.HandleClick(1)} src={PlusButton}/>
								<img className="PlusButtonActive" id="PlusButtonTwo" onClick={()=>this.HandleClick(2)} src={PlusButton}/>
								<img className="PlusButtonActive" id="PlusButtonThree" onClick={()=>this.HandleClick(3)} src={PlusButton}/>
								<img className="PlusButtonActive" id="PlusButtonFour" onClick={()=>this.HandleClick(4)} src={PlusButton}/>
								<img className="PlusButtonActive" id="PlusButtonFive" onClick={()=>this.HandleClick(5)} src={PlusButton}/>
								<img className="PlusButtonActive" id="PlusButtonSix"  onClick={()=>this.HandleClick(6)}src={PlusButton}/>
							</div>
						</div>
					</div>
					
				)
			}

			if(this.state.active==1)
			{
				return(
					<div className="CourtMainDiv">
						<div className="CourtText">
							<p className="ContentText BolderText">המגרש</p>
							<p className="ContentText">לחצו על כפתורי  הפלוס כדי לראות  את חלקי המגרש השונים.</p>
						</div>
						<div className="BubbleWrapper">
							<div className="CourtBubble">
								<img src={OrangeX} onClick={()=>this.setState({active:0})}/>
								<p style={topicstyle}> תיבת השחקן  </p>
								<p style={contentstyle}>תיבת השחקן היא אחת משישה אזורים 
								מסומנים וממסופרים, <br/>מהם זורק השחקן.
								</p>
							</div>
						</div>

						<div className="CourtWrapper">
							<div className="CourtBaseDiv">
								<img className="CourtBaseImg" src={CourtOne}/>
								<img className="PlusButtonActive" onClick={()=>this.HandleClick(1)} id="PlusButtonOne" src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonTwo" src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonThree"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonFour"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonFive"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonSix"  src={PlusButton}/>
							</div>
						</div>
					</div>		
				)
			}
			if(this.state.active==2)
			{
				return(
					<div className="CourtMainDiv">
						<div className="CourtText">
							<p className="ContentText BolderText">המגרש</p>
							<p className="ContentText">לחצו על כפתורי  הפלוס כדי לראות  את חלקי המגרש השונים.</p>
						</div>
						<div className="BubbleWrapper">
							<div className="CourtBubble">
								<img src={OrangeX} onClick={()=>this.setState({active:0})}/>
								<p style={topicstyle}> קו הזריקה   </p>
								<p style={contentstyle}>הקו המסומן במגרש ומאחוריו
								יושבים השחקנים שזורקים את הכדור.
								</p>
							</div>
						</div>

						<div className="CourtWrapper">
							<div className="CourtBaseDiv">
								<img className="CourtBaseImg" src={CourtTwo}/>
								<img className="PlusButton"id="PlusButtonOne" src={PlusButton}/>
								<img className="PlusButtonActive" onClick={()=>this.HandleClick(2)}  id="PlusButtonTwo" src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonThree"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonFour"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonFive"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonSix"  src={PlusButton}/>
							</div>
						</div>
					</div>		
				)
			}

			if(this.state.active==3)
			{
				return(
					<div className="CourtMainDiv">
						<div className="CourtText">
							<p className="ContentText BolderText">המגרש</p>
							<p className="ContentText">לחצו על כפתורי  הפלוס כדי לראות  את חלקי המגרש השונים.</p>
						</div>
						<div className="BubbleWrapper">
							<div className="CourtBubble">
								<img src={OrangeX} onClick={()=>this.setState({active:0})}/>
								<p style={topicstyle}> קו ה-V  </p>
								<p style={contentstyle}>הקו שהכדור הלבן חייב לעבור במלואו
								ולהימצא מאחוריו, על מנת שיחשב כ"במשחק".
								</p>
							</div>
						</div>

						<div className="CourtWrapper">
							<div className="CourtBaseDiv">
								<img className="CourtBaseImg" src={CourtThree}/>
								<img className="PlusButton"id="PlusButtonOne" src={PlusButton}/>
								<img className="PlusButton"id="PlusButtonTwo" src={PlusButton}/>
								<img className="PlusButtonActive" onClick={()=>this.HandleClick(3)} id="PlusButtonThree"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonFour"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonFive"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonSix"  src={PlusButton}/>
							</div>
						</div>
					</div>		
				)
			}



			if(this.state.active==4)
			{
				return(
					<div className="CourtMainDiv">
						<div className="CourtText">
							<p className="ContentText BolderText">המגרש</p>
							<p className="ContentText">לחצו על כפתורי  הפלוס כדי לראות  את חלקי המגרש השונים.</p>
						</div>
						<div className="BubbleWrapper">
							<div className="CourtBubble">
								<img src={OrangeX} onClick={()=>this.setState({active:0})}/>
								<p style={topicstyle}> אזור המשחק  </p>
								<p style={contentstyle}>המגרש פחות תיבות השחקנים
								</p>
							</div>
						</div>

						<div className="CourtWrapper">
							<div className="CourtBaseDiv">
								<img className="CourtBaseImg" src={CourtFour}/>
								<img className="PlusButton"id="PlusButtonOne" src={PlusButton}/>
								<img className="PlusButton"id="PlusButtonTwo" src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonThree"  src={PlusButton}/>
								<img className="PlusButtonActive" onClick={()=>this.HandleClick(4)} id="PlusButtonFour"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonFive"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonSix"  src={PlusButton}/>
							</div>
						</div>
					</div>		
				)
			}	

			if(this.state.active==5)
			{
				return(
					<div className="CourtMainDiv">
						<div className="CourtText">
							<p className="ContentText BolderText">המגרש</p>
							<p className="ContentText">לחצו על כפתורי  הפלוס כדי לראות  את חלקי המגרש השונים.</p>
						</div>
						<div className="BubbleWrapper">
							<div className="CourtBubble">
								<img src={OrangeX} onClick={()=>this.setState({active:0})}/>
								<p style={topicstyle}>נקודת הפלוס  </p>
								<p style={contentstyle}>
								סימון במרכז המגרש, שם יונח הכדור הלבן במקרים הבאים:
								<ul>
									<li>שוויון</li>
									<li>החזרת הכדור הלבן לאחר שיצא מתחומי המגרש</li>
									<li>כאשר הכדור הלבן נכנס לאזור הלא חוקי לאחר זריקת הכדור הצבעוני הראשון</li>

								</ul>
								</p>
							</div>
						</div>

						<div className="CourtWrapper">
							<div className="CourtBaseDiv">
								<img className="CourtBaseImg" src={CourtFive}/>
								<img className="PlusButton"id="PlusButtonOne" src={PlusButton}/>
								<img className="PlusButton"id="PlusButtonTwo" src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonThree"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonFour"  src={PlusButton}/>
								<img className="PlusButtonActive" onClick={()=>this.HandleClick(5)} id="PlusButtonFive"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonSix"  src={PlusButton}/>
							</div>
						</div>
					</div>		
				)
			}


			if(this.state.active==6)
			{
				return(
					<div className="CourtMainDiv">
						<div className="CourtText">
							<p className="ContentText BolderText">המגרש</p>
							<p className="ContentText">לחצו על כפתורי  הפלוס כדי לראות  את חלקי המגרש השונים.</p>
						</div>
						<div className="BubbleWrapper">
							<div className="CourtBubble">
								<img src={OrangeX} onClick={()=>this.setState({active:0})}/>
								<p style={topicstyle}> ריבוע מטרה  </p>
								<p style={contentstyle}>
								ריבוע בגודל של 25 ס״מ x 25 ס״מ
								במרכז המגרש, לכדורי עונשין.

								</p>
							</div>
						</div>

						<div className="CourtWrapper">
							<div className="CourtBaseDiv">
								<img className="CourtBaseImg" src={CourtSix}/>
								<img className="PlusButton"id="PlusButtonOne" src={PlusButton}/>
								<img className="PlusButton"id="PlusButtonTwo" src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonThree"  src={PlusButton}/>
								<img className="PlusButton" id="PlusButtonFour"  src={PlusButton}/>
								<img className="PlusButton"id="PlusButtonFive"  src={PlusButton}/>
								<img className="PlusButtonActive" onClick={()=>this.HandleClick(6)}  id="PlusButtonSix"  src={PlusButton}/>
							</div>
						</div>
					</div>		
				)
			}	
		
	}

		
		
		return(
				GetDivContent()
			)
			
	
	}
}

export default Court;
