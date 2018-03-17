import React, {Component} from 'react';
import style from './piller.css';
import STRUCTURE from '../images/structure.jpg';
import STRENGTH from '../images/strength.jpg';
import SPEED from '../images/speed.jpg';

class Piller extends Component {
    render() {
        return(
			<div className={style.pillerwrapper}>
				<h1 className={style.pillerh1}>Pillers</h1>

				<div className={style.cols}>
							<div className={style.col}>
								<div className={style.container}>
									<div className={style.front}>
										<div className={style.inner}>
											<p><img src={STRUCTURE} className={style.pillerimg} alt="NO"/></p>
										</div>
									</div>
									<div className={style.back}>
										<div className={style.inner}>
										<p> Correcting common muscular imbalances and setting a strong foundation </p>
										</div>
									</div>
								</div>
							</div>
							<div className={style.col}>
								<div className={style.container}>
									<div className={style.front}>
										<div className={style.inner}>
											<p><img src={STRENGTH} className={style.pillerimg} alt="NO"/></p>
										</div>
									</div>
									<div className={style.back}>
										<div className={style.inner}>
											<p> Body’s ability to overcome resistance. Potential strength can be directly correlated to the foundation of the Structure phase. </p>
										</div>
									</div>
								</div>
							</div>
							<div className={style.col}>
								<div className={style.container}>
									<div className={style.front}>
										<div className={style.inner}>
											<p><img src={SPEED} className={style.pillerimg} alt="NO"/></p>
										</div>
									</div>
									<div className={style.back}>
										<div className={style.inner}>
											<p> Expressing Structure and Strength in a dynamic manner. Direct result of building a foundation, strengthening it, and then allowing the body to perform with explosive power.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
				</div>

        );
    }
}

export default Piller;


