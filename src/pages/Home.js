import React, { Component, componentDidUpdate } from 'react';
import SideBar from '../Components/SideBar.js';
import './styles/Home.css';
import ContactImg from '../imgs/Contact.png';
import CallTo from '../imgs/CallTo.png';
import MailTo from '../imgs/MailTo.png';
import BlueButton from '../imgs/BlueButton.png';
import HomeImage from '../imgs/HomeImage.png';
import BlueLogo from '../imgs/BlueLogo.png';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <SideBar active="1" />
        <div className="HomeDiv">
          <h1>
            ברוכים הבאים ללומדה
            <br />
            של משחק הבוצ'ה
          </h1>
          <p>
            כאן תלמדו איך לשחק את <br />
            המשחק הכי מגניב ואסטרטגי שיש. <br />
            תוכלו ללמוד על הענף, <br />
            החוקים ואפילו לבחון את עצמכם!
          </p>
          <p>אז קדימה, למה אתם מחכים?</p>
          <p id="StartButton">
            <a href="./#/WhatIsBoccia">להתחלת הלומדה </a>
          </p>
          <img id="HomeImage" src={HomeImage} />
          <img id="BlueLogo" src={BlueLogo} />
        </div>
      </div>
    );
  }
}

export default Home;
