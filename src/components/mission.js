import React, {Component} from 'react';
import style from './mission.css';
import YT from '../images/yt.png';
import FB from '../images/fb.png';
import IS from '../images/inst.png';
import TW from '../images/tw.png';
import { Row, Col } from 'react-flexbox-grid';


export default class Mission extends Component {
  render() {
    return(
      <Row className={style.contact}>
          <Col md={6} className={style.column}>
            <h3 className={style.missionheaders}>Mission</h3>
            <p className={style.missionparagraph}>
              The Strength Camp Mission is… We have a relentless commitment to
              growing stronger every day, and we empower our brothers and sisters
              to also strive towards becoming the strongest version of themselves.
            <br/>
              We grow stronger, and empower others to grow stronger. Period.
              This is the central point of our work. Everything that we do
              is an echo of this commitment.
              <br/>
              Our VISION is how we intend to make this mission a reality. It is
              the HOW, in our minds-eye, we will accomplish our mission.
            </p>
            <h3 className={style.missionheaders}>Follow Us</h3>
            <ul className="icons">
              <li><a href="https://www.youtube.com/user/strengthcamp"><img className={style.footerimg} src={YT} alt="NO"/></a></li>
              <li><a href="https://www.facebook.com/thestrengthcamp/"><img className={style.FB} src={FB} alt="NO"/></a></li>
              <li><a href="https://www.instagram.com/thestrengthcamp/?hl=en"><img className={style.footerimg} src={IS} alt="NO"/></a></li>
            </ul>
          </Col>


          <Col md={6} className={style.column}>
            <h3 className={style.missionheaders}>Get in Touch</h3>
            <div className={style.contactcontainer}>
              <form action="post">
                <label>Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.."/>

                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label>Message</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <input type="submit" value="Submit"/>
                </form>
              </div>

          </Col>
      </Row>
    );
  }
}
