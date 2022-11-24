class player{
    constructor(name){
        this.name = name
    }

    hitNineBall(ballArr){
        if (ballArr.length != 0){
            let goal = Math.round(Math.random());
            if (goal == 1){
                console.log(`${this.name} hit ${ballArr[0]} success!`)
                ballArr.splice(0,1);
                this.hitNineBall(ballArr)
            }
            else{
                console.log(`${this.name} hit ${ballArr[0]} failed!`)
            }
        }
    }

    hitEightBall(ballArr){
        let solidBalls = [1, 2, 3, 4, 5, 6, 7]
        let stripeBalls = [9, 10, 11, 12, 13, 14, 15]

        if (ballArr.length != 0){
            let goal = Math.round(Math.random());
            if (goal == 1){
                if (ballArr.length == 15 && solidBalls.includes(ballArr[0])){
                    console.log(`${this.name} hit ${ballArr[0]} success! ${this.name} gets the solid balls.`)
                    ballArr.splice(0,1);
                }
                if (ballArr.length == 15 && stripeBalls.includes(ballArr[0])){
                    console.log(`${this.name} hit ${ballArr[0]} success! ${this.name} gets the stripe balls.`)
                    ballArr.splice(0,1);
                }
                else if (ballArr.length == 1){
                    console.log(`${this.name} has hit the 8 ball. ${this.name} wins.`)
                    ballArr.splice(0,1);
                }
                else if (ballArr[0] == 8){
                    console.log(`${this.name} has hit the 8 ball. The opponent wins.`)
                    ballArr.length = 0;
                }
                else{
                    console.log(`${this.name} hit ${ballArr[0]} success!`)
                    ballArr.splice(0,1);
                    this.hitEightBall(ballArr)
                }
            }
            else if (goal == 0){
                console.log(`${this.name} hit ${ballArr[0]} failed!`)
            }
            
        }
    }
}

class billiard{
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    nineBall(){
        let nineBallArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        while (nineBallArr.length != 0){
            this.player1.hitNineBall(nineBallArr);
            this.player2.hitNineBall(nineBallArr);
        }
    }

    eightBall(){
        let eightBallArr = [];
        while (eightBallArr.length != 15){
            let ballRandom = Math.floor((Math.random()*15)+1)
            if (!eightBallArr.includes(ballRandom)){
                eightBallArr.push(ballRandom)
            }
        }


        while(eightBallArr.length != 0){
            this.player1.hitEightBall(eightBallArr);
            this.player2.hitEightBall(eightBallArr);
        }
    }
}

playerA = new player("Tommy");
playerB = new player("Bobby");
// console.log(playerA);

billiardGame = new billiard(playerA, playerB);
// console.log(billiardGame);
billiardGame.eightBall();
// billiardGame.nineBall();