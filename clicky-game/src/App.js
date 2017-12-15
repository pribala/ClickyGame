import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import JumbotronComponent from './components/JumbotronComponent';
import PictureCardComponent from './components/PictureCardComponent';
import './App.css';
import characters from './characters.json';

class App extends Component {
  state = {
    characters: characters,
    //searchTerm: ''
    score: 0,
    topScore: 0
  };

  incrScore = id => {
    console.log(id);
    const incr = this.score + 1;
    this.setState({ incr});
  }

  render() {
    return (
     <div>
      
      <HeaderComponent brandname="Clicky Game" heading = "Click an image to start game!"
        score={ this.state.score } topScore={ this.state.topScore }>
      </HeaderComponent>
      <JumbotronComponent></JumbotronComponent>
      <div className="container">
       
      {this.state.characters.map(character => (
          <PictureCardComponent
            key={character.id}
            dataid={character.id}
            name={character.name}
            image={character.image}
            incrScore= { this.incrScore }
          />
        ))}
         
      </div>  
      <FooterComponent>Clicky Game</FooterComponent>
     </div>
     
    );
  }
}

export default App;

