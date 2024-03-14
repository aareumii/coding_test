
const fs = require('fs');


const input = fs.readFileSync('/dev/stdin').toString().split(' ');

// 입력 데이터를 각각 정수형으로 변환
const A = parseInt(input[0], 10);
const B = parseInt(input[1], 10);
const C = parseInt(input[2], 10);

// 주어진 수식에 따라 결과를 계산
const result1 = (A + B) % C;
const result2 = ((A % C) + (B % C)) % C;
const result3 = (A * B) % C;
const result4 = ((A % C) * (B % C)) % C;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);