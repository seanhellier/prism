import {
  FILTER_POKEMON,
} from './types'


export const filterPokemon = (searchString = '') => (dispatch, getState) => {
  const displayedPokemons = getState().pokemon.pokemon.filter(pokemon => (
    pokemon.name.includes(searchString.toLowerCase())
  ))
  dispatch({
    type: FILTER_POKEMON,
    payload: displayedPokemons,
  })
}
