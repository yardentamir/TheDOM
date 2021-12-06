// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.

const myObj = {
  name: "Yarden",
  printFullName() {
    console.log(`Hello ${this.name}!`);
  },
  printFullNameAfterSecond() {
    setTimeout(
      function () {
        console.log(`Hello ${this.name}!`);
      }.bind(this),
      1000
    );
  },
};

myObj.printFullName.call(myObj);
myObj.printFullNameAfterSecond.call(myObj);
