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
  pokemons.sort(function(pokemonA, pokemonB) {
    const pokemonNameA = pokemonA.name.toLowerCase();
    const pokemonNameB = pokemonB.name.toLowerCase();
    if (pokemonNameA < pokemonNameB) return -1;
    if (pokemonNameA > pokemonNameB) return 1;
    return 0;
  });

  return pokemons;
}
