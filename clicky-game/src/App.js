import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import JumbotronComponent from './components/JumbotronComponent';
import './App.css';

class App extends Component {
  // state = {
  //   friends: friends,
  //   searchTerm: ''
  // };

  render() {
    return (
     <div>
      <HeaderComponent brandname="Clicky Game" heading = "Click an image to start game!"
        subHeading = "Score 0 | Top Score 0">
      </HeaderComponent>
      <JumbotronComponent></JumbotronComponent>
      <FooterComponent>Clicky Game</FooterComponent>
     </div>
    );
  }
}

export default App;

