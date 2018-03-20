import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Link } from 'react-router-dom'

var FontAwesome = require('react-fontawesome')



ReactDOM.render(<App/>, document.getElementById('root'));

//
// ReactDOM.render(
//     <BrowserRouter>
//     <div>
//       <Route path="/" component={App}/>
//       <Route path="/signin" component={Signin} />
//       <Route path="/signout" component={Signout} />
//       <Route path="/signup" component={Signup} />
//       <Route path="/stockpile" component={StockPile} />
//       <Route path="/stockpile/add" component={NewFood} />
//       <Route path="/pot" component={Pot} />
//       <Route path="/welcome" component={Welcome} />
//       <Route path="/about" component={About} />
//       {/* <Route path="stockpile" component={RequireAuth(StockPile)} />   */}
//     </div>
//     </BrowserRouter>
//   , document.querySelector('root'));
