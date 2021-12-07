// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.

const arrOfWords = ["hoo", "boo"];
const arrOfWords2 = ["hoo", "boo", 5];

const allArr = [arrOfWords, arrOfWords2];

const makeAllCaps = (arrBeforeCapitalize) => {
  return new Promise(function (resolve, reject) {
    resolve(
      arrBeforeCapitalize.map((word) => {
        if (typeof word !== "string") return reject(word);
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
    );
  });
};

const sortWords = (arrBeforeSorted) => {
  return new Promise(function (resolve, reject) {
    return resolve(arrBeforeSorted.sort());
  });
};

// success and failure
allArr.forEach((arrOfWords) => {
  makeAllCaps(arrOfWords)
    .then((arrCapitalized) => {
      sortWords(arrCapitalized).then((arrCapitalizedSorted) => {
        console.log(arrCapitalizedSorted);
      });
    })
    .catch((err) => {
      console.log(`${err} isn't a word`);
    });
});

// success and failure solution 2
allArr.forEach((arrOfWords) => {
  makeAllCaps(arrOfWords)
    .then((arrCapitalized) => {
      return sortWords(arrCapitalized);
    })
    .then((arrCapitalizedSorted) => {
      console.log(arrCapitalizedSorted);
    })
    .catch((err) => {
      console.log(`${err} isn't a word`);
    });
});
