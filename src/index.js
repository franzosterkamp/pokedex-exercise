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

let PokemonSearchName = '';
let PokemonSearchType = '';

searchInput.addEventListener('change', function() {
  removeChilds(resultsElement);
  PokemonSearchType = [];
  PokemonSearchName = getPokemonsByName(searchInput.value);
  PokemonSearchName.forEach(createPokemons);
});

typeButton.addEventListener('click', function() {
  removeChilds(resultsElement);
  PokemonSearchName = [];
  PokemonSearchType = getPokemonsByType(searchInput.value);
  PokemonSearchType.forEach(createPokemons);
});

sortButton.addEventListener('click', function() {
  removeChilds(resultsElement);

  sortPokemonsByName(PokemonSearchName);
  PokemonSearchName.forEach(createPokemons);
  sortPokemonsByName(PokemonSearchType);
  PokemonSearchType.forEach(createPokemons);
});
