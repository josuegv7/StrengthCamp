import React, {Component} from 'react';
import style from './footer.css';
import YT from '../images/yt.png';
import FB from '../images/fb.png';
import IS from '../images/inst.png';
import FooterLogo from '../images/sclogoFooter.png';
import { Row, Col } from 'react-flexbox-grid';





class Footer extends Component {
    render() {
        return(
            <Row className={style.sitefooter}>
              <Col>
                <img className={style.footerimg} src={FooterLogo}/>
              </Col>
            </Row>
        );
    }
}
export default Footer;
