// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.

const myObj = {
  firstName: "Yarden",
  lastName: "Tamir",
  printFullName() {
    console.log(`Hello ${this.firstName} ${this.lastName}!`);
  },
  printFullNameAfterSecond() {
    setTimeout(function () {
      console.log(`Hello ${this.firstName} ${this.lastName}!`);
    }, 1000);
  },
};

myObj.printFullName.call(myObj);
myObj.printFullName();
