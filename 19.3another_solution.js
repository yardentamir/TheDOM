"use strict";
​
const userCells = document.querySelectorAll("input");
userCells.forEach((cell, cellIndex) => {
  cell.addEventListener("input", () => {
    nextValue(cellIndex);
    validate();
  });
​
  cell.addEventListener("paste", (event) => {
    let clipboard = event.clipboardData.getData("text").split("");
    paste(clipboard, cellIndex);
  });
});

​
function nextValue(cellIndex) {
  if (cellIndex === userCells.length - 1) {
    return;
  }
  if (userCells[cellIndex].value) {
    userCells[cellIndex + 1].focus();
  }
}
​
function paste(clipboard, currentCell) {
  const numbersToFill = clipboard.length - currentCell - 1;
  for (let i = 0; i <= numbersToFill; i++) {
    userCells[currentCell].value = clipboard[i];
    currentCell++;
  }
}
​
function validate() {
  userCells.forEach((input) => {
    input.style.outline = null;
  });
  const password = [1, 2, 3, 4, 5, 6];
  if (
    +userCells[0].value === password[0] &&
    +userCells[1].value === password[1] &&
    +userCells[2].value === password[2] &&
    +userCells[3].value === password[3] &&
    +userCells[4].value === password[4] &&
    +userCells[5].value === password[5]
  ) {
    userCells.forEach((input) => {
      input.style.outline = "1px solid green";
    });
  }
}