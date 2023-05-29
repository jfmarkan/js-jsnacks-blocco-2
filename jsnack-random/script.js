function getRandomUniqueNumber (min, max, elements){
    const numberList = [];

if ( (max-min) < elements){
    return [];
}

    while (numberList.length < elements){
    const newRandomNumber = getRandomInt(min, max);
    if (!numberList.includes(newRandomNumber)){
        numberList.push(newRandomNumber);
    }
    return numberList;
}
};

function getRandomInt (min, max){
    const randomNumber =  Math.floor(Math.random()* max) + min;
    return randomNumber;
}