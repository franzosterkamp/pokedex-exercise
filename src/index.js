import {
  createNoPokemons,
  setChild,
  resetInput,
  createPokemons,
  removeChilds
} from './api/elements';
import {
  getPokemonsByName,
  sortPokemonsByName,
  getPokemonsByType
} from './api/pokemons';
import pokemons from 'json-pokemon';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');
const sortButton = document.querySelector('.sort__button');
const typeButton = document.querySelector('.type__button');

// Reset input and results
resetInput(searchInput);
setChild(resultsElement, createNoPokemons());

// Add event listeners

/**
 * Find the correct event to listen for input changes.
 */
searchInput.addEventListener('change', function() {
  /**
   * You can verify that this event is fired in the Browser console.
   * Can you find the value of searchInput in this event?
   */

  //const selection = pokemons.filter(({ name }) => name.startsWith(searchInput));

  removeChilds(resultsElement);
  const PokemonSearch = getPokemonsByName(searchInput.value);
  PokemonSearch.forEach(createPokemons);
});

sortButton.addEventListener('click', function() {
  removeChilds(resultsElement);
  const PokemonSearch = getPokemonsByName(searchInput.value);
  console.log(PokemonSearch);
  sortPokemonsByName(PokemonSearch);
  PokemonSearch.forEach(createPokemons);
});

typeButton.addEventListener('click', function() {
  removeChilds(resultsElement);
  const PokemonSearch = getPokemonsByType(searchInput.value);
  PokemonSearch.forEach(createPokemons);
});

/**
 * Later, you can add sort functionality.
 */
