import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonList from './dev/containers/pokemon-list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Pokemon Input:</h2>
          <input type="text"/>
        {/* <PokemonInput /> */}
        <hr/>
        <h2>Pokemon List:</h2>
        <PokemonList/>
      </div>
    );
  }
}

export default App;
