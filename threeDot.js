const firstArray = [20,54,68,48,89,66,21,45];
const secondArray = [20,54,65,66,56,64,84,88,96,62,14,5];
const thirdArray = [54,65,66,25,55,56,65,66,48,48,89,6,62,145];

const addAllArray = [...firstArray, ...secondArray, ...thirdArray];
// console.log(addAllArray);

const largeNumber = [254,689,748,596,124,364,858];
const findNumber = Math.max(...largeNumber);
console.log(findNumber);