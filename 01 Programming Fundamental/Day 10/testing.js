let eightBallArr = [];
        while (eightBallArr.length != 15){
            let ballRandom = Math.floor((Math.random()*15)+1)
            if (!eightBallArr.includes(ballRandom)){
                eightBallArr.push(ballRandom)
            }
        }
        console.log(eightBallArr);



console.log(1 == "1")