let numbersList = [];
let insertedNumber = 0

let sum = 0
while (sum < 50){
    let insertedNumber = prompt('insert a number');
    numbersList.push(insertedNumber);
    sum += parseInt(insertedNumber);
}

console.log(numbersList);