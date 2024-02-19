//문제 설명
//다음과 같이 출력하도록 코드를 작성해 주세요.

//출력 예시
// !@#$%^&*(\'"<>?:;

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('close', function () {
	console.log('!@#$%^&*(\\\'"<>?:;');
});

// 이 코드는 문자열을 큰따옴표로 감싸고 있으며,
//작은따옴표 앞에 있는 백슬래시를 이스케이프하기 위해 두 개의 백슬래시(\\)를 사용합니다.
//이렇게 하면, Node.js 환경에서 실행했을 때 정확히 !@#$%^&*('\\'"<>?:; 이 출력됩니다.
