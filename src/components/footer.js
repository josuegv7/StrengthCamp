import React, {Component} from 'react';
import style from './footer.css';
import YT from '../images/yt.png';
import FB from '../images/fb.png';
import IS from '../images/inst.png';






class Footer extends Component {
    render() {
        return(
            <div className={style.sitefooter}>
                <ul className="footer">
                    <li><img className={style.footerimg} src={YT} alt="NO"/></li>
                    <li><img className={style.FB} src={FB} alt="NO"/></li>
                    <li><img className={style.footerimg} src={IS} alt="NO"/></li>
                </ul>
            </div>
        );
    }
}
export default Footer;


