
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', function(line) {
    // 입력된 줄을 공백으로 분리하여 A와 B를 추출
    const [A, B] = line.split(' ').map(Number);


    if (A > B) {
        console.log('>');
    } else if (A < B) {
        console.log('<');
    } else {
        console.log('==');
    }


    rl.close();
}).on('close', function() {

    process.exit();
});