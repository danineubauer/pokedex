import React, {Component} from 'react'
import Pokemons from "./Pokemons"
import Pokecard from "./Pokecard"
import Pokegame from "./Pokegame"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <Pokegame />
      </div>
    ) 
  }
}

export default App;
