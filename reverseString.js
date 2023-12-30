export function reverseString(string) {
  let reverse = []
  let stringArray = string.split("")
  while (stringArray.length !== 0) {
    reverse.push(stringArray.pop())
  }
  return reverse.join("")
}