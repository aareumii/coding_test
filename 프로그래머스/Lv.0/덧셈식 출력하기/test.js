const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ');
}).on('close', function () {
	// 입력된 두 수를 숫자로 변환
	let a = Number(input[0]);
	let b = Number(input[1]);
	// 두 수의 합을 계산
	let sum = a + b;
	// 계산 결과를 'a + b = sum' 형식으로 출력
	console.log(`${a} + ${b} = ${sum}`);
});
