import React, { Component } from 'react';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import Piller from './components/piller';
import Team from './components/team';
import Mission from './components/mission';



class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Piller/>
        <Team/>
        <Mission/>
        <Footer/>
      </div>
    );
  }
}

export default App;
