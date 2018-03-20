import React, {Component} from 'react';
import style from './mission.css';
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
              <li><a href="#" className="icon fa-facebook"><span class="label">Facebook</span></a></li>
              <li><a href="#" className="icon fa-instagram"><span class="label">Instagram</span></a></li>
            </ul>
          </Col>


          <Col md={6} className={style.column}>
            <h3 className={style.missionheaders}>Get in Touch</h3>
            <form action="#" method="post">
              <div className="field half first">
                <label for="name">Name</label>
                <input name="name" id="name" type="text" placeholder="Name"/>
              </div>
              <div className="field half">
                <label for="email">Email</label>
                <input name="email" id="email" type="email" placeholder="Email"/>
              </div>
              <div className={style.messagemission}>
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
              </div>
              <ul className="actions">
                <li><input value="Send Message" class="button" type="submit"/></li>
              </ul>
            </form>
          </Col>
      </Row>
    );
  }
}
