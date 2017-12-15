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
  }

  render() {
    return (
     <div>
      
      <HeaderComponent brandname="Clicky Game" heading = "Click an image to start game!"
        score={ this.state.score } topScore={ this.state.topScore }>
      </HeaderComponent>
      <JumbotronComponent></JumbotronComponent>
      
      <div className="container row mx-auto">
       
      {this.state.characters.map(character => (
          <div className="col" key={character.id}>
          <PictureCardComponent
            key={character.id}
            dataid={character.id}
            name={character.name}
            image={character.image}
            incrScore= { this.incrScore }
          />
          </div>
        ))}
         
      </div>  
      <FooterComponent>Clicky Game</FooterComponent>
     </div>
     
    );
  }
}

export default App;

