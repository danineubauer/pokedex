import React, {Component} from 'react'
import Pokemons from "./Pokemons"
import Pokecard from "./Pokecard"
import Pokedex from "./Pokedex"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <Pokedex />
      </div>
    ) 
  }
}

export default App;
