import React, {Component} from "react";
import style from './main.css'
import logo from '../images/logo.png';


class Main extends Component {
    render() {
        return(
            <header>
                <section className={style.headercontent}>
                <img className={style.rocky} src={logo} alt="NO"/>
                <h1 className={style.headertitle}>"It's not about what you get, it's about who you are becoming."</h1>
                <h3 className={style.headersubtitle}>Dedicated to Strength Training, Bodybuilding, Powerlifting, Strongman, Meditation, Yoga and becoming a STRONGER VERSION OF OURSELVES.</h3>
                </section>
            </header>
        );
    }
}



export default Main;



