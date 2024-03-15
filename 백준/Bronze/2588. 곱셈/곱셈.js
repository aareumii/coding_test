const fs = require('fs');


const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num1 = parseInt(input[0], 10); 
const num2 = parseInt(input[1], 10);


const result3 = num1 * (num2 % 10);
const result4 = num1 * Math.floor((num2 % 100) / 10);
const result5 = num1 * Math.floor(num2 / 100);
const finalResult = num1 * num2;

console.log(result3);
console.log(result4);
console.log(result5);
console.log(finalResult);