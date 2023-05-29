
const player = {
    playerCode: generateSequence(),
    playerName: 'Juan',
    playerSurname: 'Markan',
    playerAge: 38,
    pointsPerGame: getRandomInt(0, 50,),
    threePointsSuccess: getRandomInt(0, 100),
    stops: getRandomInt(0, 30),
    shots: getRandomInt(20, 100)
}

function getRandomInt (min, max){
    const randomNumber =  Math.floor(Math.random()* max) + min;
    return randomNumber;
}

function generateSequence(){
    let result = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(var i=0;i<3;i++){
        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    

    return result + getRandomInt(0, 999);
}
