import {combineReducers} from 'redux';
import PokemonReducer from './reducer-pokemon'

const allReducers = combineReducers({
    pokemon: PokemonReducer
})

export default allReducers;