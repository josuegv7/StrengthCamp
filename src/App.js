import React, { Component } from 'react';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import Piller from './components/piller';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Piller/>
        <Footer/>
      </div>
    );
  }
}

export default App;
