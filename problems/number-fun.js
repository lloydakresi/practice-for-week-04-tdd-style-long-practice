function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if (typeof n !== "number"){
    throw TypeError("Input must be a number!")
  }else{
    return 1 / n;
  }
}

module.exports = {
  returnsThree,
  reciprocal
};
