// Instructions
// Answer the following questions:
// Question 1:
// ? In your own words what will this point to and why?(Note
// ? this is the global scope)
console.log(this);
// * answer: This in this case is pointing to the window because this is  in the global scope.
// Question 2:
// ? a. In your own words what will this point to and why.
// ? b. How can you fix this code.
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
// * answer a: This in this case is pointing to window because this is in an arrow function.
// * answer b: We can change the arrow function to regular function if we would like this to point to myObj.
// Question 3:
// ? In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};
myFuncDec();
// * answer : This in this case is pointing to window because this is in myFuncDec function scope and there is no parent.
// Question 4:
// ? In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
// * answer : This in this case is pointing to the window because this is in an arrow function.
// Question 5:
// ? a. In your own words what will this point to and why.
// ? b. How can you fix this code.
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});
// * answer a: This in this case is pointing to the window because this is in an arrow function.
// * answer b: We can change the arrow function to regular function if we would like this to point to document.querySelector(".element") also you .
document.querySelector(".element").addEventListener(function () {
  console.log(this);
});
