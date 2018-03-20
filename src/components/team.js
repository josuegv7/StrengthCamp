import React, {Component} from "react";
import style from './team.css';
import Elliott from '../images/elliott.jpg';
import Chris from "../images/chris.jpg";
import Danny from '../images/danny.jpg'
import Josh from '../images/josh.jpg';
import Nick from '../images/nick.jpg';
import Sarah from '../images/sarah.jpg';
import Shannon from '../images/shannon.jpg';
import Tyler from '../images/tyler.jpg';
import { Row, Col } from 'react-flexbox-grid';

export default class Team extends Component{
    render(){
        return(
          <div className={style.teamcontainer}>
            <Row>
              <h2 className={style.teamjob}>Meet Our Team</h2>
            </Row>

            <Row>
              <Col xs={4}>
                <div className={style.teammember}>
                  <div className={style.card}>
                    <img className={style.teamimg} src={Elliott} alt="Jane"/>

                      <h2 className={style.teamtitle}>Elliott</h2>
                      <p className={style.teamtitle}>Founder</p>
                  
                  </div>
                </div>
              </Col>
              {/* end team member  */}
              <Col xs={4}>
                <div className={style.teammember}>
                  <div className={style.card}>
                    <img className={style.teamimg} src={Chris} alt="Chris"/>
                    <div className="container">
                      <h2 className={style.teamtitle}>Chris</h2>
                      <p className={style.teamtitle}>Coach</p>
                    </div>
                  </div>
                </div>
              </Col>
              {/* end team member  */}
              <Col xs={4}>
                <div className={style.teammember}>
                  <div className={style.card}>
                    <img className={style.teamimg} src={Danny} alt="Chris"/>
                    <div className="container">
                      <h2 className={style.teamtitle}>Danny </h2>
                      <p className={style.teamtitle}>Coach</p>
                    </div>
                  </div>
                </div>
              </Col>
              {/* end team member  */}
              <Col xs={4}>
                <div className={style.teammember}>
                  <div className={style.card}>
                    <img className={style.teamimg} src={Josh} alt="Chris"/>
                    <div className="container">
                      <h2 className={style.teamtitle}>Josh</h2>
                      <p className={style.teamtitle}>Coach</p>
                    </div>
                  </div>
                </div>
              </Col>
              {/* end team member  */}
              <Col xs={4}>
                <div className={style.teammember}>
                  <div className={style.card}>
                    <img className={style.teamimg} src={Nick} alt="Josh"/>
                    <div className="container">
                      <h2 className={style.teamtitle}>Nick</h2>
                      <p className={style.teamtitle}>Coach</p>
                    </div>
                  </div>
                </div>
              </Col>
              {/* end team member  */}
              <Col xs={4}>
                <div className={style.teammember}>
                  <div className={style.card}>
                    <img className={style.teamimg} src={Sarah} alt="Sarah"/>
                    <div className="container">
                      <h2 className={style.teamtitle}>Sarah</h2>
                      <p className={style.teamtitle}>Coach</p>
                    </div>
                  </div>
                </div>
              </Col>
              {/* end team member  */}
              <Col xs={4}>
                <div className={style.teammember}>
                  <div className={style.card}>
                    <img className={style.teamimg} src={Shannon} alt="Shannon"/>
                    <div className="container">
                      <h2 className={style.teamtitle}>Shannon</h2>
                      <p className={style.teamtitle}>Coach</p>
                    </div>
                  </div>
                </div>
              </Col>
              {/* end team member  */}
              <Col xs={4}>
                <div className={style.teammember}>
                  <div className={style.card}>
                    <img className={style.teamimg} src={Tyler} alt="Tyler"/>
                    <div className="container">
                      <h2 className={style.teamtitle}>Tyler</h2>
                      <p className={style.teamtitle}>Coach</p>
                    </div>
                  </div>
                </div>
              </Col>
              {/* end team member  */}
            </Row>
          </div>
        );
    }
}
