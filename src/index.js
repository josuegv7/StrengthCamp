import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Blog from './components/blog.js'


import { BrowserRouter, Route, Link} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="/blog" component={Blog}/>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
