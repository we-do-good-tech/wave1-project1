import React, { Component, componentDidUpdate } from 'react';
import './styles/Rules.css';
import SideBar from '../Components/SideBar.js';
import ProgressBar from '../Components/ProgressBar.js';
import FirstPageTabs from '../Components/FirstPageTabs.js';
import FrontBack from '../Components/FrontBack.js';
import PopUp from '../Components/PopUp.js';
import TimesBC1Single from '../imgs/TimesBC1Single.png';
import TimesBC2Single from '../imgs/TimesBC2Single.png';
import TimesBC3Single from '../imgs/TimesBC3Single.png';
import TimesBC4Single from '../imgs/TimesBC4Single.png';
import TimesBC3Double from '../imgs/TimesBC3Double.png';
import TimesBC4Double from '../imgs/TimesBC4Double.png';
import TimesGroup from '../imgs/TimesGroup.png';
import TieCourt from '../imgs/TieCourt.png';
import SignalOne from '../imgs/SignalOne.png';
import SignalTwo from '../imgs/SignalTwo.png';
import SignalThree from '../imgs/SignalThree.png';
import SignalFour from '../imgs/SignalFour.png';
import SignalFive from '../imgs/SignalFive.png';
import SignalSix from '../imgs/SignalSix.png';
import SignalSeven from '../imgs/SignalSeven.png';
import SignalEight from '../imgs/SignalEight.png';
import Penalty from '../imgs/Penalty.png';
import BlueLogo from '../imgs/BlueLogo.png';
import T1 from '../imgs/icons/T1.png';
import T2 from '../imgs/icons/T2.png';
import T3 from '../imgs/icons/T3.png';
import T4 from '../imgs/icons/T4.png';

class Rules extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      names: ['זמנים ', 'שובר שוויון ', 'סימוני שופטים', 'עונשין'],
      PopUpDisplay: 'none',
    };
    this.handlearrow = this.handlearrow.bind(this);
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick = (evt) => {
    this.setState({ active: parseInt(evt.target.value) });
  };

  handlearrow = (evt) => {
    if (evt == 1) {
      if (this.state.active == 0) {
        this.setState({ active: this.state.names.length });
      } else {
        this.setState({ active: parseInt(this.state.active) - 1 });
      }
    } else if (evt == 2) {
      if (this.state.active == this.state.names.length) {
        this.setState({ active: 0 });
      } else {
        this.setState({ active: parseInt(this.state.active) + 1 });
      }
    }
  };

  handlebarclick = (val) => {
    this.setState({ active: parseInt(val) });
  };

  HandlePopUp = () => {
    if (this.state.PopUpDisplay === 'none') this.setState({ PopUpDisplay: 'block' });
    else if (this.state.PopUpDisplay === 'block') {
      this.setState({ PopUpDisplay: 'none' });
    } else {
      this.setState({ PopUpDisplay: 'none' });
    }
  };

  render() {
    const GetDivContent = () => {
      if (this.state.active == 0) {
        return (
          <FirstPageTabs
            names={this.state.names}
            icons={[T1, T2, T3, T4]}
            onClick={this.handlebarclick}
          />
        );
      }

      if (this.state.active == 1) {
        return (
          <div id="SignalContentDiv">
            <p id="SignalContentTopic"> זמנים</p>
            <div>
              <img
                className="SignalPic"
                src={TimesBC1Single}
                style={{ height: '10.6vw', 'margin-right': '2vw' }}
              />
            </div>

            <div>
              <img className="SignalPic" src={TimesBC2Single} />
            </div>

            <div>
              <img className="SignalPic" src={TimesBC3Single} />
            </div>

            <div style={{ 'border-left': 'none' }}>
              <img className="SignalPic" src={TimesBC4Single} />
            </div>

            <div>
              <img
                className="SignalPic"
                src={TimesBC3Double}
                style={{ height: '12vw', 'margin-right': '2vw' }}
              />
            </div>

            <div>
              <img className="SignalPic" src={TimesBC4Double} style={{ height: '12vw' }} />
            </div>

            <div style={{ 'border-left': 'none' }}>
              <img
                className="SignalPic"
                src={TimesGroup}
                style={{ height: '10.2vw', marginTop: '2vw' }}
              />
            </div>
            <div style={{ 'border-left': 'none' }} />
          </div>
        );
      }
      if (this.state.active == 2) {
        return (
          <div className="ContentDiv">
            <p className="ContentTopic">שובר שיוויון</p>
            <p className="ContentText">
              אם בסיום כל המשחקונים התוצאה היא שיוויון, משחקים משחקון נוסף (שובר שיוויון) לקביעת
              זהות המנצח. מטילים מטבע כדי להחליט מי יזרוק ראשון. מניחים את הכדור הלבן במרכז ריבוע
              המטרה (במרכז הפלוס) ומשחקים משחקון רגיל. בסיום המשחקון, אם התוצאה היא עדיין שוויון,
              משחקים משחקון נוסף, והפעם הצד השני יזרוק ראשון את הכדור שלו.
            </p>
            <img className="ContentPic" src={TieCourt} />
          </div>
        );
      }

      if (this.state.active == 3) {
        return (
          <div id="SignalContentDiv" className="specialDiv">
            <p id="SignalContentTopic"> סימוני שופטים </p>
            <div>
              <img className="SignalPic" src={SignalOne} />
              <p>סימון התוצאה</p>
            </div>

            <div>
              <img className="SignalPic" src={SignalTwo} />
              <p>שיוויון בין הכדורים</p>
            </div>

            <div>
              <img style={{ height: '12vw' }} className="SignalPic" src={SignalThree} />
              <p style={{ marginTop: '-2.55vw' }}>הסרת כדור</p>
            </div>

            <div style={{ 'border-left': 'none' }}>
              <img
                className="SignalPic"
                src={SignalFour}
                style={{ height: '11.3vw', 'margin-right': '5vw' }}
              />
              <p style={{ marginTop: '-1.8vw' }}>זריקת כדור לבן</p>
            </div>

            <div>
              <img
                style={{ height: '12vw', marginTop: '1.5vw', marginRight: '2vw' }}
                className="SignalPic"
                src={SignalFive}
              />
              <p style={{ marginTop: '-2.2vw' }}>כדור עונשין</p>
            </div>

            <div>
              <img
                style={{ height: '13.5vw', marginTop: '-0.1vw' }}
                className="SignalPic"
                src={SignalSix}
              />
              <p style={{ marginTop: '-2vw' }}> כדור בחוץ </p>
            </div>

            <div>
              <img className="SignalPic" src={SignalSeven} />
              <p>מדידה </p>
            </div>

            <div style={{ 'border-left': 'none' }}>
              <img className="SignalPic" src={SignalEight} />
              <p> גמר המשחקון </p>
            </div>
          </div>
        );
      }

      if (this.state.active == 4) {
        return (
          <div className="ContentDiv Penalty">
            <p className="ContentTopic" style={{ 'font-size': '1.8vw' }}>
              עונשין{' '}
            </p>
            <p className="ContentTopic">הסרה</p>
            <p className="ContentText">
              כאשר נזרק כדור לפני שהשופט הורה לזרוק או כאשר נזרק כדור צבעוני לפני הכדור הלבן, הכדור
              יוצא מהמגרש.
            </p>
            <p className="ContentTopic"> כדור עונשין </p>
            <p className="ContentText">
              כשהשחקן (או עוזר הספורט) מבצע פעולות מסיחות דעת כשתורו של היריב לזרוק את הכדור, למשל:
              הכנה לזריקה, כיוון כיסא הגלגלים, כיוון אביזר עזר או גלגול כדור, מתוגמל השחקן "שנפגע"
              מהעבירה, כדור נוסף על כל הפרה שבוצעה. כדורים אלו יזרקו אל ריבוע המטרה, בתום אותה
              מערכה. כל כדור שיעצור בתוך שטח הריבוע יזכה בנקודה נוספת.
            </p>
            <p className="ContentTopic"> הסרה + כדור עונשין </p>
            <p className="ContentText">
              שילוב של שני העונשים יחד - הסרה וכדור עונשין, יקרה כאשר: <br />
              <ol>
                <li className="ContentText">
                  השחקן, חלק כלשהו מכיסא הגלגלים, עוזר הספורט או כל ציוד אחר, נוגע בסימונים של תיבת
                  השחקן, או בכל מקום מחוץ לקופסת השחקן.
                </li>
                <li className="ContentText">
                  השחקן זרק כדור מבלי שלפחות פלח ישבן אחד צמוד למושב הכיסא.{' '}
                </li>
              </ol>
              <img className="ContentPic" src={Penalty} />
            </p>
          </div>
        );
      }
      if (this.state.active == 5) {
        return (
          <div className="ContentDiv">
            <p className="ContentText">5</p>
          </div>
        );
      }
      if (this.state.active == 6) {
        return (
          <div className="ContentDiv">
            <p className="ContentText">6</p>
          </div>
        );
      }
    };

    const GetDivFrontBack = () => {
      if (this.state.active === this.state.names.length) {
        return <FrontBack moveTo={4} last onClick={this.handlearrow} />;
      }
      if (this.state.active === 1) {
        return <FrontBack moveTo={4} first onClick={this.handlearrow} />;
      }

      if (this.state.active != 0) {
        return <FrontBack moveTo={4} onClick={this.handlearrow} />;
      }
    };
    const getLeftLogo = () => {
      if (this.state.active === 0) {
        return (
          <img style={{ left: '3vw', top: '-7.5vw', width: '12vw' }} id="BlueLogo" src={BlueLogo} />
        );
      }
    };
    const isExplanation = () => this.state.active === 4;

    return (
      <div>
        <SideBar active="5" />
        <ProgressBar
          names={this.state.names}
          active={this.state.active}
          onClick={this.handlebarclick}
        />
        <div id="WhatIsMain">
          {getLeftLogo()}
          {GetDivContent()}
          {GetDivFrontBack()}
        </div>
        <PopUp
          HeadLine="חוקי המשחק"
          display={this.state.PopUpDisplay}
          onClick={this.HandlePopUp}
          level={1}
          explanation={isExplanation()}
        />
      </div>
    );
  }
}

export default Rules;
