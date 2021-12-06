// We have an array of super heroes objects:
// and a print name function:
// We want to print all the heroes names.
//Implement the printHeroes function: Note: you cannot change the super heroes objects
const wonderWoman = {
  name: "Diana Prince",
};
const batman = {
  name: "Bruce Wayne",
};

const superHeroes = [wonderWoman, batman];

function printName() {
  console.log(`my name is ${this.name}`);
}

function printHeroes(heroes, printFunc) {
  //add your code here
  heroes.forEach((hero) => {
    printFunc.call(hero);
  });
}

printHeroes(superHeroes, printName);

//explain: you can't use .apply because you can use only one this as an argument.
