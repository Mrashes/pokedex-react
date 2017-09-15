import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonInput from './'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Pokemon Input:</h2>
          <input type="text"/>
        {/* <PokemonInput /> */}
        <hr/>
        <h2>Pokemon List:</h2>
        <div>
          <span></span>
        </div>
        {/* <PokemonList/> */}
      </div>
    );
  }
}

export default App;
