import { caesarCipher } from './cipher';

test('Shift random word', () => {
  expect(caesarCipher('ganud', 1)).toBe('hbove');
});

test('Shift past lowercase z', () => {
  expect(caesarCipher('zed', 2)).toBe('bgf');
});

test('Shift past uppercase z', () => {
  expect(caesarCipher('ZED', 2)).toBe('BGF');
});

test('Ignore punctuation', () => {
  expect(caesarCipher('ganud./!?', 1)).toBe('hbove./!?');
});