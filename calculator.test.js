import { Calculator } from './calculator';

const calculator = new Calculator();

test('Add 2 + 2', () => {
  expect(calculator.add(2, 2)).toBe(4);
});
test('Minus 2 - 2', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});
test('Mult 2 * 2', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
test('Div 2 / 2', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});
