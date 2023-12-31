import { analyzeArray, arrayAverage, arrayMin, arrayMax} from './analyzeArray';

test('Average', () => {
  expect(arrayAverage([1,8,3,4,2,6])).toBe(4);
});

test('Min', () => {
  expect(arrayMin([2,8,3,4,1,6])).toBe(1);
});

test('Max', () => {
  expect(arrayMax([2,8,3,4,1,6])).toBe(8);
});

test('Object', () => {
  expect(analyzeArray([2,8,3,4,1,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});