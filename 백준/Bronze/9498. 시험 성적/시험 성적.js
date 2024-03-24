
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', function(score) {
  
    const scoreInt = parseInt(score, 10);
    

    if (scoreInt >= 90) {
        console.log('A');
    } else if (scoreInt >= 80) {
        console.log('B');
    } else if (scoreInt >= 70) {
        console.log('C');
    } else if (scoreInt >= 60) {
        console.log('D');
    } else {
        console.log('F');
    }

    rl.close();
}).on('close', function() {
 
    process.exit();
});
