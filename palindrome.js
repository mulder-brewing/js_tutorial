//Reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}
//Returns true for a palindrome, false otherwise.  ignoreCase true allows for ignoring case.
function palindrome(string,ignoreCase) {
  if (ignoreCase) {
    string = string.toLowerCase();
  }
  return string === reverse(string);
}
