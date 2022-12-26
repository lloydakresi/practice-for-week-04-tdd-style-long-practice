function myMap(inputArray, callback) {
  // Your code here
  let arr = [];
  inputArray.forEach(function(ele){
    arr.push(callback(ele));
  })
  return arr;
}

module.exports = myMap;
