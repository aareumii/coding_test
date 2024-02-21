const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ');
}).on('close', function () {
	// 입력 받은 두 문자열을 저장
	const str1 = input[0];
	const str2 = input[1];

	// 두 문자열을 이어붙인 결과 출력
	console.log(str1 + str2);
});
