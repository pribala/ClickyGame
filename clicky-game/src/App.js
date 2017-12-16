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
    clickCount: 0,
    score :0,
    topScore : 0,
    character_id: -1,
    heading: "Click an image to start game!"
  };
   
 // handleIncrement increases this.state.clickCount by 1
  handleIncrement = (id) => {
    if(id !== this.state.character_id){
    // We always use the setState method to update a component's state
      this.setState({ clickCount: this.state.clickCount + 1 });
      this.setState({character_id: id});
      this.setState({score: this.state.score +1 });
      this.setState({heading: "You guessed correctly!"});
    }else {
      if(this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score });
      }
      this.setState({ clickCount: 0 });
      this.setState({character_id: -1});
      this.setState({score: 0 });
      this.setState({heading: "Click an image to start game!"});
    }
  };

  render() {
    return (
     <div>
      
      <HeaderComponent brandname="Clicky Game" heading = { this.state.heading }
        score={ this.state.score } topScore={ this.state.topScore }>
      }
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
            handleIncrement = { this.handleIncrement }
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

