import React, {Component} from "react";
import style from './main.css'
import logo from '../images/logo.png';


export default class Main extends Component {
    render() {
        return(
          <section className={style.banner}>
            <div className={style.inner}>
              <img className={style.rocky} src={logo} alt="NO"/>
              <p>"It's not about what you get, it's about who you are becoming."</p>
            </div>
          </section>
        );
    }
}
