const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//---------------filter----------------//
Array.prototype.filterFunc = function (callbackFunc) {
  const filteredArray = [];
  this.forEach(function (num) {
    if (callbackFunc(num)) {
      filteredArray.push(num);
    }
  });
  return filteredArray;
};

function evenNumbers(num) {
  return num % 2 === 0;
}

const myFilter = numArr.filterFunc(evenNumbers);
console.log(myFilter);

//----------find-----------------//

Array.prototype.findFunc = function (callbackFunc) {
  for (let index = 0; index < this.length; index++) {
    const num = this[index];
    if (callbackFunc(num)) {
      return num;
    }
  }
  return null;
};

function evenNumber(num) {
  return num % 2 === 0;
}

const myFind = numArr.findFunc(evenNumber);
console.log(myFind);
