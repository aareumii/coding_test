const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ');
}).on('close', function () {
	const [a, b] = input; // 구조 분해 할당을 사용하여 input 배열의 첫 번째와 두 번째 요소를 a와 b에 할당
	console.log(`a = ${a}`);
	console.log(`b = ${b}`);
});
