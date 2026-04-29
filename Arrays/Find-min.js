const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter numbers separated by commas: ', (input) => {
    const arr = input.split(',').map(Number);
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min){
            min = arr[i];
        }
    }

    console.log('Min number:', min);
    rl.close();
});