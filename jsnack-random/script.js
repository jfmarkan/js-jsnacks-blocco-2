let result = [];

for (let i = 0;i < 4;i++){
    result.push(getRandomInt(1,5));
}

console.log(result)

function getRandomInt (min, max){
    const randomNumber =  Math.floor(Math.random()* max) + min;
    return randomNumber;
}

