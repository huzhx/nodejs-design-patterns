/**
 * Add proxied method to make the methods more reliable
 * @param {!StackCalculator} calculator
 */
function createSafeCalculator(calculator) {
  return {
    divide() {
      const divisor = calculator.peekValue();
      if (divisor === 0) {
        throw Error('Division by 0');
      }
      return calculator.divide();
    },
    putValue(value) {
      return calculator.putValue(value);
    },
    getValue() {
      return calculator.getValue();
    },
    peekValue() {
      return calculator.peekValue();
    },
    clear() {
      return calculator.clear();
    },
    multiply() {
      return calculator.multiply();
    },
  };
}

module.exports = createSafeCalculator;
