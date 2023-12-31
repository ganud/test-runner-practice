export function analyzeArray(array) {
  return {
    average: arrayAverage(array),
    min: arrayMin(array),
    max: arrayMax(array),
    length: array.length,
  }
}

export function arrayAverage(array) {
  let sum = 0;
  array.forEach(number => {
    sum = sum + number;
  });
  return sum / array.length;
}

export function arrayMin(array) {
  let arrayMin = array[0];
  array.forEach(number => {
    if (arrayMin > number) {
      arrayMin = number;
    }
  });
  return arrayMin;
}

export function arrayMax(array) {
  let arrayMax = array[0];
  array.forEach(number => {
    if (arrayMax < number) {
      arrayMax = number;
    }
  });
  return arrayMax;
}