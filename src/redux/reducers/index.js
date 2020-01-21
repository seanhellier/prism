import keplerGlReducer from 'kepler.gl/reducers';
import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';

export default combineReducers({
  pokemon: pokemonReducer,
  keplerGl: keplerGlReducer,
});
