module.exports = function reverseString(string) {
  // Your code here
  if (typeof string !== "string") throw TypeError("Strings only!");
  let arr = string.split("");
  let reversed = arr.reverse();
  return reversed.join("");

};
