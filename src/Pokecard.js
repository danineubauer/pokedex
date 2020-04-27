import React, {Component} from 'react'
import './Pokecard.css'
import Pokemons from './Pokemons'

const POKE_API = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

class Pokecard extends Component { 
        
    render() {

        const {name, id, type, exp} = this.props
        let imgSrc = `${POKE_API}${padToThree(id)}.png`;

        return(
            <div className="Pokecard">
                <h1 className='Pokecard-title'>{name}</h1>
                <div className='Pokecard-img'>
                    <img src={imgSrc} alt={name}/>
                </div>
                <span>
                    <p className='Pokecard-data'>type: {type}</p>
                    <p className='Pokecard-data'>EXP: {exp}</p>
                </span>
            </div>
            
        ) 
    }
}

export default Pokecard;