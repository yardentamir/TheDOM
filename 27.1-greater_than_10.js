// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

const promises = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      return resolve();
    } else {
      return reject();
    }
  });
};

console.log(
  promises(11)
    .then(() => {
      console.log("Success");
    })
    .catch(() => {
      console.log("Failure");
    })
);
