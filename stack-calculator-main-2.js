const StackCalculator = require('./stack-calculator');
const patchToSafeCalculator = require('./patch-to-safe-calculator');

const calculator = new StackCalculator();
const safeCalculator = patchToSafeCalculator(calculator);
safeCalculator.putValue(3);
safeCalculator.putValue(2);
console.log(safeCalculator.multiply());
safeCalculator.putValue(2);
console.log(safeCalculator.multiply());
safeCalculator.putValue(0);
console.log(safeCalculator.divide());
