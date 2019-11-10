/**
 * json-pokemon is a package which is installed with `npm i json-pokemon`.
 * See https://www.npmjs.com/package/json-pokemon
 *
 * You will find details about the properties of a pokemon.
 *
 * There are some helper functions which makes this task easier, but please try to implement your own filter and search logic.
 */
import pokemons from 'json-pokemon';

export function getPokemonsByName(pokemonName) {
  const selection = pokemons.filter(({ name }) =>
    name.toLowerCase().match(pokemonName.toLowerCase())
  );
  return selection;
}

export function getPokemonsByType(TypeName) {
  const selection = pokemons.filter(({ typeList }) =>
    typeList.includes(TypeName)
  );
  return selection;
}

export function sortPokemonsByName(pokemons) {
  pokemons.sort(function(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return pokemons;
}
