import React, {Component} from 'react';
import style from './blog.css'
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import { Row, Col } from 'react-flexbox-grid';

export default class Blog extends Component{
  render() {
      return (

        <div className={style.blogcontainer}>
        <div className={style.blogtitle}>
        <h1>Strength Camp Video Blog</h1>
        </div>
      <Row>
          <Col md={4}>
          <div className={style.card}>
            <img className={style.blogimg}src={img1}/>
            <p><button>Watch</button></p>
          </div>
          </Col>
          <Col md={4}>
          <div className={style.card}>
            <img className={style.blogimg}src={img6}/>
            <p><button>Watch</button></p>
          </div>
          </Col>
          <Col md={4}>
          <div className={style.card}>
            <img className={style.blogimg}src={img3}/>
            <p><button>Watch</button></p>
          </div>
          </Col>
          <Col md={4}>
          <div className={style.card}>
            <img className={style.blogimg}src={img4}/>
            <p><button>Watch</button></p>
          </div>
          </Col>
          <Col md={4}>
          <div className={style.card}>
            <img className={style.blogimg}src={img5}/>
            <p><button>Watch</button></p>
          </div>
          </Col>
          <Col md={4}>
          <div className={style.card}>
            <img className={style.blogimg}src={img2}/>
            <p><button>Watch</button></p>
          </div>
          </Col>
      </Row>
      </div>

      )
  }
}
