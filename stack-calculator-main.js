const StackCalculator = require('./stack-calculator');

const calculator = new StackCalculator();
calculator.putValue(3);
calculator.putValue(2);
console.log(calculator.multiply());
calculator.putValue(2);
console.log(calculator.multiply());
