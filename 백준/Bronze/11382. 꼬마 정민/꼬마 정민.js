const fs = require('fs');


const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);
const C = BigInt(input[2]);


const sum = A + B + C;


console.log(sum.toString());