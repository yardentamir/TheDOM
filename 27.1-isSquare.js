// You are given a function, Square, that takes four parameters, a, b, c, d,
// denoting the length of the square edges.
// Using prototype properties, add a method to Square named isSquare that
// prints true if a Square object has equal edges and false if they are unequal.
// Here is the Square function:

function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function (a, b, c, d) {
  return a === b && c === d;
};

const proto = new Square();
console.log(proto.isSquare(4, 4, 4, 4));
console.log(proto.isSquare(3, 4, 4, 4));
