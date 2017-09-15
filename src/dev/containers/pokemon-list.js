import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Pokemon from "../components/pokemon"
// import {selectUser} from '../actions/index'

class PokemonList extends Component {
    
    createListItems() {
        return this.props.pokemon.map((pokemon) => {
            return (
                <li 
                    key={pokemon.id} 
                >
                    <Pokemon name={pokemon.name} type={pokemon.type} species={pokemon.species} />
                </li>
            )
        });
    }


    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({selectPokemon: selectUser}, dispatch)
// }

function mapStateToProps(state) {
    return {
      pokemon: state.pokemon
    };
  }
//   matchDispatchToProps
export default connect(mapStateToProps)(PokemonList);