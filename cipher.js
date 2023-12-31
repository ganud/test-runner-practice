export function caesarCipher(string, shift) {
  const stringArray = string.split('');
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = shiftChar(stringArray[i], shift);
  }
  return stringArray.join('');
}

function shiftChar(char, shift) {
  // Return if not alpha
  if (char.search(/[^A-Za-z\s]/) != -1) {
    return char;
  }
  let asciiChar = char.charCodeAt(0) + shift;
  if (asciiChar > 122) { // Wrap lowercase
    asciiChar -= 26;
  } else if (asciiChar > 90 && asciiChar < 97) { // Wrap uppercase
    asciiChar -= 26;
  }
  return String.fromCharCode(asciiChar);
}
