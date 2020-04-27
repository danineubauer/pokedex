import React, {Component} from 'react'
import Pokecard from './Pokecard'
import  "./Pokecard"

class Pokedex extends Component { 
    // static defaultProps = { 
    //     pokemon: [
    //         {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    //         {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    //         {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    //         {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    //         {id: 39, name: 'Pikachu', type: 'electric', base_experience: 112},
    //         {id: 94, name: 'Jiglipuff', type: 'normal', base_experience: 95}
    //     ]
    // }

    render() { 
        return(
            <div className="Pokedox">
                <h1>Pokedex</h1>
                <p>Total Experience: {this.props.exp}</p>
                <p>{this.props.isWinner ? 'Winner' : 'Loser'}</p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;