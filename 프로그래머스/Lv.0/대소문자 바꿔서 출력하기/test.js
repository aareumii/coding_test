const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = [line];
}).on('close', function () {
	const str = input[0];

	// 대문자는 소문자로, 소문자는 대문자로 변환
	const transformedStr = str
		.split('')
		.map((char) => {
			return char === char.toUpperCase()
				? char.toLowerCase()
				: char.toUpperCase();
		})
		.join('');

	console.log(transformedStr);
	process.exit();
});
