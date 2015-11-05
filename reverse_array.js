var myArray = ["A","B","C","D","E"];
console.log(myArray);
function reverse(arrayRev) {
  newArray = [];
  for (i = 0; i < arrayRev.length;i++) {
    newArray.unshift(arrayRev[i]);
  }
  return newArray;
}
myArray = reverse(myArray);
console.log(myArray);
