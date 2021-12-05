function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const attackListArr = [
  "Electric",
  "Poison",
  "Fairy",
  "Fire",
  "Rock",
  "Ice",
  "Water",
];

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (attackNum) {
  console.log(`${this.name} used ${this.attackList[attackNum]}`);
};

const pokemon = new Pokemon("Pikachu", "Mouse", attackListArr);
const pokemon2 = new Pokemon("Golduck", "Duck", attackListArr);
const pokemon3 = new Pokemon("Venomoth", "Poison Moth", attackListArr);
pokemon.callPokemon();
pokemon.attack(0);
pokemon2.callPokemon();
pokemon2.attack(6);
pokemon3.callPokemon();
pokemon3.attack(1);
