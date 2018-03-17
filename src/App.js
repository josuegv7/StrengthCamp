import React, { Component } from 'react';
import Main from './components/main';
import Header from './components/header';
import Piller from './components/piller';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Piller/>
      </div>
    );
  }
}

export default App;
