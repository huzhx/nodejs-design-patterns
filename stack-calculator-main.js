const StackCalculator = require('./stack-calculator');
const createSafeCalculator = require('./create-safe-calculator.js');

const calculator = new StackCalculator();
const safeCalculator = createSafeCalculator(calculator);
safeCalculator.putValue(3);
safeCalculator.putValue(2);
console.log(safeCalculator.multiply());
safeCalculator.putValue(2);
console.log(safeCalculator.multiply());
safeCalculator.putValue(0);
console.log(safeCalculator.divide());
