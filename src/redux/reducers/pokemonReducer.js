import {
  FILTER_POKEMON,
} from '../actions/types';

const initialState = {
  pokemon: [],
};

export default function (state = initialState, action) {
  switch(action.type) {
    case FILTER_POKEMON:
      return {
        ...state,
        filteredPokemon: action.payload,
      };

    default:
      return state;
  }
}
