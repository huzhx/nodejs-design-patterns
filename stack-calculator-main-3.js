const StackCalculator = require('./stack-calculator');
const safeCalculatorHandler = require('./safe-calculator-handler');

const calculator = new StackCalculator();
const safeCalculator = new Proxy(calculator, safeCalculatorHandler);
safeCalculator.putValue(3);
safeCalculator.putValue(2);
console.log(safeCalculator.multiply());
safeCalculator.putValue(2);
console.log(safeCalculator.multiply());
safeCalculator.putValue(0);
console.log(safeCalculator.divide());
