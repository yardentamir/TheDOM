const storm = {
  superPower: "speed",
  printSuperPower,
};

function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}
// printSuperPower.call(storm);
storm.printSuperPower();
