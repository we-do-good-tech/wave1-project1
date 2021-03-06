import React, { Component, componentDidUpdate } from 'react';
import './styles/BocciaClasses.css';
import SideBar from '../Components/SideBar.js';
import ProgressBar from '../Components/ProgressBar.js';
import FirstPageTabs from '../Components/FirstPageTabs.js';
import FrontBack from '../Components/FrontBack.js';
import PopUp from '../Components/PopUp.js';
import BC1 from '../imgs/BC1.png';
import BC2 from '../imgs/BC2.png';
import BC3 from '../imgs/BC3.png';
import BC4 from '../imgs/BC4.png';
import BC5 from '../imgs/BC5.png';
import BlueLogo from '../imgs/BlueLogo.png';
import C1 from '../imgs/icons/C1.png';
import C2 from '../imgs/icons/C2.png';
import C3 from '../imgs/icons/C3.png';
import C4 from '../imgs/icons/C4.png';
import C5 from '../imgs/icons/C5.png';

class BocciaClasses extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      names: ['סיווג BC1', 'סיווג BC2', 'סיווג BC3', 'סיווג BC4', 'סיווג BC5'],
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
            icons={[C1, C2, C3, C4, C5]}
            onClick={this.handlebarclick}
          />
        );
      }

      if (this.state.active == 1) {
        return (
          <div className="ContentDivClasses" style={{ width: '44vw', height: '70vh' }}>
            <p className="ContentTopic">סיווג BC1</p>
            <p className="ContentText">
              <strong>השתייכות לקלאס | </strong>
              ספורטאים בעלי לקות משמעותית בכל ארבע הגפיים.{' '}
            </p>
            <p className="ContentText">
              <strong>אופי הלקות | </strong>
              טווח תנועת קצר וספסטיות גבוהה.{' '}
            </p>
            <p className="ContentText">
              <strong> השפעת הלקות על השריר |</strong> שליטה נמוכה בשרירי הליבה והגו.{' '}
            </p>
            <p className="ContentText">
              <strong> השפעת הלקות על התנועה | </strong>
              עשויה להתאפשר אחיזה של הכדור,
              <br />
              ניתנת האפשרות לבעיטה בכדור.
            </p>
            <p className="ContentText">
              <strong> ניידות |</strong> לרוב ניידים בכיסא גלגלים חשמלי.
            </p>
            <p className="ContentText">
              <strong>סיוע |</strong> רשאים לליווי עוזר ספורט במגרש להנגשת הכדורים.
            </p>
            <img className="ContentPic" style={{ top: '15vh' }} src={BC1} />
          </div>
        );
      }
      if (this.state.active == 2) {
        return (
          <div className="ContentDivClasses" style={{ width: '44vw', height: '60vh' }}>
            <p className="ContentTopic">סיווג BC2</p>
            <p className="ContentText">
              <strong>השתייכות לקלאס | </strong>
              ספורטאים בעלי לקות בכל ארבע הגפיים
              <br />
              (דומה לסיווג BC1 אבל קל יותר).
            </p>
            <p className="ContentText">
              <strong>אופי הלקות | </strong>
              מתאפשר טווח תנועה פונקציונלי סביר וספסטיות בינונית.
            </p>
            <p className="ContentText">
              <strong> השפעת הלקות על השריר |</strong> שליטה נמוכה – סבירה בשרירי הליבה והגו.
            </p>
            <p className="ContentText">
              <strong> השפעת הלקות על התנועה | </strong>
              עשויה להתאפשר אחיזה של הכדור, ולכן אין אפשרות לבעוט בכדור.
            </p>
            <p className="ContentText">
              <strong> ניידות |</strong> לרוב ניידים בכיסא גלגלים ידני (ייתכן גם ממונע), חלקם
              מסוגלים ללכת.
            </p>
            <p className="ContentText">
              <strong>סיוע | </strong>
              אינם רשאים לליווי עוזר ספורט במגרש להנגשת הכדורים.
            </p>
            <img
              className="ContentPic"
              style={{ width: 'calc(12vw + 16vh)', top: '8vh' }}
              src={BC2}
            />
          </div>
        );
      }

      if (this.state.active == 3) {
        return (
          <div className="ContentDivClasses" style={{ width: '44vw', height: '60vh' }}>
            <p className="ContentTopic">סיווג BC3</p>
            <p className="ContentText">
              <strong>השתייכות לקלאס | </strong> ספורטאים בעלי לקות משמעותית ביותר בכל ארבע הגפיים.
            </p>
            <p className="ContentText">
              <strong>אופי הלקות | </strong>
              טווח תנועת מוגבל ביותר.
            </p>
            <p className="ContentText">
              <strong> השפעת הלקות על השריר |</strong> מגוון רחב של השפעות כתלות בסוג ומידת הפגיעה.
            </p>
            <p className="ContentText">
              <strong> השפעת הלקות על התנועה | </strong>
              אין אפשרות של אחיזה או בעיטה של הכדור, לא מתאפשרת זריקה של הכדור באופן עקבי ומכוון
              לטווח של כ-5 מטרים.
            </p>
            <p className="ContentText">
              <strong> ניידות |</strong> לרוב ניידים בכיסא גלגלים חשמלי.
            </p>
            <p className="ContentText">
              <strong>סיוע | </strong>
              מלווים על ידי עוזר ספורט במגרש. לצורך שחרור הכדור נעזרים ברמפה המתופעלת ע"י עוזר ספורט
              המונחה על ידי השחקן ואינו רשאי להפנות פניו למגרש.
            </p>
            <br />
            <p className="ContentText">קיים ציוד עזר נוסף בו הם רשאים להשתמש. </p>
            <img
              className="ContentPic"
              style={{ width: 'calc(15vw + 17vh)', top: '13.1vh' }}
              src={BC3}
            />
          </div>
        );
      }
      if (this.state.active == 4) {
        return (
          <div className="ContentDivClasses" style={{ width: '44vw', height: '60vh' }}>
            <p className="ContentTopic">סיווג BC4</p>
            <p className="ContentText">
              <strong>השתייכות לקלאס | </strong> ספורטאים בעלי פגיעות גופניות שונות שאינן CP.
            </p>
            <p className="ContentText">
              <strong>אופי הלקות | </strong>
              פגיעה מוטורית קשה בכל הגפיים אשר מתאפיינת בחולשת שרירים משמעותית.
            </p>
            <p className="ContentText">
              <strong> השפעת הלקות על השריר |</strong> שליטה נמוכה ביותר בשרירי הליבה, הגו והידיים.
            </p>
            <p className="ContentText">
              <strong> השפעת הלקות על התנועה | </strong>
              מתאפשרת אחיזה של הכדור. ניתנת האפשרות לבעיטה בכדור.
            </p>
            <p className="ContentText">
              <strong> ניידות |</strong> לרוב ניידים בכיסא גלגלים ידני (ייתכן גם ממונע).
            </p>
            <p className="ContentText">
              <strong>סיוע | </strong> אינם רשאים לליווי עוזר ספורט במגרש להנגשת הכדורים (חוץ
              מהשחקנים הבועטים).
            </p>
            <img
              className="ContentPic"
              style={{ width: 'calc(13vw + 16vh)', top: '5vw' }}
              src={BC4}
            />
          </div>
        );
      }

      if (this.state.active == 5) {
        return (
          <div className="ContentDivClasses" style={{ width: '44vw', height: '60vh' }}>
            <p className="ContentTopic">סיווג BC5 (עדיין לא נכלל בתחרויות בינלאומיות)</p>
            <p className="ContentText">
              <strong>השתייכות לקלאס | </strong> ספורטאים בעלי לקות בכל ארבע הגפיים (דומה לסיווג BC4
              אבל קל יותר).
            </p>
            <p className="ContentText">
              <strong>אופי הלקות | </strong> מתאפשר טווח תנועה פונקציונלי רחב יותר, וספסטיות נמוכה
              יותר.
            </p>
            <p className="ContentText">
              <strong> השפעת הלקות על השריר |</strong> שליטה גבוהה בשרירי הליבה והגו.
            </p>
            <p className="ContentText">
              <strong> השפעת הלקות על התנועה | </strong> ישנה יכולת אחיזה בכדור.
            </p>
            <p className="ContentText">
              <strong> ניידות |</strong> מתניידים עצמאית, על פי רוב מסוגלים ללכת ללא אמצעי עזר או
              בתמיכה קלה.
            </p>
            <p className="ContentText">
              <strong>סיוע | </strong> אינם רשאים לליווי עוזר ספורט במגרש להנגשת הכדורים.
            </p>
            <img
              className="ContentPic"
              style={{ width: 'calc(13vw + 17vh)', top: '14vh' }}
              src={BC5}
            />
          </div>
        );
      }
    };

    const GetDivFrontBack = () => {
      if (this.state.active === this.state.names.length) {
        return <FrontBack moveTo={3} last onClick={this.handlearrow} />;
      }
      if (this.state.active === 1) {
        return <FrontBack moveTo={3} first onClick={this.handlearrow} />;
      }

      if (this.state.active != 0) {
        return <FrontBack moveTo={3} onClick={this.handlearrow} />;
      }
    };
    const getLeftLogo = () => {
      if (this.state.active === 0) {
        return (
          <img style={{ left: '3vw', top: '-7.5vw', width: '12vw' }} id="BlueLogo" src={BlueLogo} />
        );
      }
    };

    return (
      <div>
        <SideBar active="4" />
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
      </div>
    );
  }
}

export default BocciaClasses;
