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
    heading: "Click an image to start game!",
    isHovered:""
  };
   
 // handleIncrement increases this.state.clickCount by 1
  handleIncrement = (id) => {
    if(id !== this.state.character_id){
    // We always use the setState method to update a component's state
      this.setState({ clickCount: this.state.clickCount + 1 });
      this.setState({character_id: id});
      this.setState({score: this.state.score +1 });
      this.setState({heading: "You guessed correctly!"});
      this.shuffle(this.state.characters);
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

  handleHover(){
    this.setState({
        isHovered: !this.state.isHovered
    });
  }

  shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

  render() {
    const btnClass = this.state.isHovered ? "pulse animated" : "";
    return (
     <div>
      
      <HeaderComponent brandname="Clicky Game" heading = { this.state.heading }
        score={ this.state.score } topScore={ this.state.topScore }>
      }
      </HeaderComponent>
      <JumbotronComponent></JumbotronComponent>
      
      <div className="container row mx-auto">
       
      {this.state.characters.map(character => (
          <div className="col"  className={btnClass} onMouseEnter={this.handleHover.bind(this)} onMouseLeave={this.handleHover.bind(this)} key={character.id}>
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

// characters.reduce((a,v)=>a.splice(Math.floor(Math.random() * a.length), 0, v) && a, [])
