function randomCard(){
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "K", "Q"];
    let suits = ["♠", "♥", "♦", "♣"];
    let result = 0;

    let randomNum = numbers[Math.floor((Math.random())*12)]
    let randomSuit = suits[Math.floor((Math.random())*4)]

    if (randomNum === "A"){
        result += 1
    }
    else if(randomNum === "J" || randomNum === "K" || randomNum === "Q"){
        result += 10
    }
    else{
        result += parseInt(randomNum);
    }

    let card = {"suit": randomSuit, "number": randomNum, "value": result}

    return card;
}

export default randomCard;