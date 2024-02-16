const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = '';

rl.on('line', function (line) {
	input = [line];
}).on('close', function (str) {
	str = input[0];
	// 정답
	console.log(str);
});
