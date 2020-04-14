function Arithmetic(number = 0) {
  this.number = number;
}
// taking the value, adding it
Arithmetic.prototype.plus = function(num = 0) {
  const newNumber = this.number + num;

  return new Arithmetic(newNumber);
};
// taking the value, sub it
Arithmetic.prototype.minus = function(num = 0) {
  const newNumber = this.number - num;

  return new Arithmetic(newNumber);
};
// returing the number
Arithmetic.prototype.value = function() {
  return this.number;
};

Arithmetic.prototype.product = function() {
  const newNumber = this.number * num
  return new Arithmetic(newNumber);
}

// export it so we can use it on a differnt file
module.exports = Arithmetic;
