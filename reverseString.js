export function reverseString(string) {
  const reverse = [];
  const stringArray = string.split('');
  while (stringArray.length !== 0) {
    reverse.push(stringArray.pop());
  }
  return reverse.join('');
}
