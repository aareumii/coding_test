const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ');
}).on('close', function () {
	let str = input[0];
	let n = Number(input[1]);
	let repeatedStr = '';

	// for 반복문을 사용하여 str을 n번 반복
	for (let i = 0; i < n; i++) {
		repeatedStr += str;
	}

	// 결과 출력
	console.log(repeatedStr);

	process.exit();
});
