const storm = {
  superPower: "speed",
  printSuperPower,
};

function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}
// printSuperPower.call(storm);
storm.printSuperPower();

const storm2 = {
  superPower: "strong",
  func: printSuperPower2,
};

function printSuperPower2() {
  console.log("my superpower is " + this.superPower);
}
// printSuperPower.call(storm);
storm2.func();
