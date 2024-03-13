let fs = require('fs');


const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


const buddhistYear = parseInt(input[0], 10);


const christianYear = buddhistYear - 543;


console.log(christianYear);