import React, { Component, componentDidUpdate } from 'react';
import SideBar from '../Components/SideBar.js';
import './styles/Contact.css';
import ContactImg from '../imgs/Contact.png';
import CallTo from '../imgs/CallTo.png';
import MailTo from '../imgs/MailTo.png';
import BlueButton from '../imgs/BlueButton.png';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <SideBar active="7" />
        <div className="ContactDiv">
          <h1>צרו קשר </h1>
          <p>
            כפי ששמתם לב, משחק הבוצ'ה הינו משחק מורכב, <br />
            יש כאלו שאומרים שהוא שילוב של סנוקר ושחמט.
          </p>
          <p>
            במקרה ויש לכם שאלות נוספות, רוצים להפנות ילדים <br />
            נוספים להיות ספורטאי בוצ'ה וכו', אתם מוזמנים לפנות <br />
            למאמן או למאמנת שלכם וגם להתאחדות הישראלית לספורט נכים:
          </p>
          <div>
            <img className="BlueButton" src={CallTo} />
            <span> טלפון: 03-6493132 </span>
          </div>
          <div>
            <img className="BlueButton" src={MailTo} />{' '}
            <span>
              מייל:
              <a href="mailto:office@isad.org.il">office@isad.org.il</a>
            </span>
          </div>
          <div>
            <img className="BlueButton" src={BlueButton} />
            <span>
              אתר:
              <a href="https://www.isad.org.il" target="_blank">
                {' '}
                isad.org.il{' '}
              </a>
            </span>
          </div>
          <img id="ContactImg" src={ContactImg} />
        </div>
      </div>
    );
  }
}

export default Contact;
