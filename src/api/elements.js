/**
 * <div class="results__empty">
 *    No Pokemons found
 * </div>
 */
const resultsElement = document.querySelector('.results');

export function createNoPokemons() {
  const element = document.createElement('div');
  element.className = 'results__empty';
  const content = document.createTextNode('No Pokemons found');
  element.appendChild(content);
  return element;
}

export function createPokemons(pokemon) {
  const pokemonTag = document.createElement('div');
  const pokemonTagId = document.createElement('div');
  const pokemonTagName = document.createElement('div');
  const pokemonTagTypeList = document.createElement('div');
  const BreakTag = document.createElement('br');

  appendChild(resultsElement, pokemonTag);
  appendChild(pokemonTag, pokemonTagId);
  appendChild(pokemonTag, pokemonTagName);
  appendChild(pokemonTag, pokemonTagTypeList);

  pokemonTagId.innerHTML = pokemon.id;
  pokemonTagName.innerHTML = pokemon.name;
  pokemonTagTypeList.innerHTML = pokemon.typeList;

  appendChild(resultsElement, BreakTag);
}

export function removeChilds(parent) {
  parent.innerHTML = '';
}

export function appendChild(parent, child) {
  parent.appendChild(child);
}

export function setChild(parent, child) {
  removeChilds(parent);
  appendChild(parent, child);
}

export function resetInput(input) {
  input.value = '';
}
