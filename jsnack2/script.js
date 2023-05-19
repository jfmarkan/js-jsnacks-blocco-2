let numberToGuess = Math.floor((Math.random() *100) +1);
let tries = [];

let numberGuessed = false;
let insertedNumber = prompt('Try to guess the number!!!');

while (!numberGuessed){
    tries.push(insertedNumber);
    if (insertedNumber < numberToGuess){
        console.log('try a higher number');
    } else if (insertedNumber > numberToGuess) {
        console.log('try a lower number');
    } else {
        numberGuessed = true
    }
    insertedNumber = prompt('Try to guess the number!!!');
}



console.log('It took you ' + tries.length + ' tries to guess the number. The numbers you entered are: ' + tries);
