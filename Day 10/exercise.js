class player{
    constructor(name){
        this.name = name;
    }

    hitNineBall(){
        let goal = Math.round(Math.random());
        return goal;
    }

    hitEightBall(){
        let goal = Math.round(Math.random());
        return goal;
    }
}

class billiard{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }

    nineBall(){
        let arrNine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        while (arrNine.length != 0){
            if (arrNine[0] != 9){
                let turn = 0;
                turn = this.player1.hitNineBall()
                if (turn == 1){
                    console.log(`${this.player1.name} hit ${arrNine[0]} success!`)
                    arrNine.splice(0,1);
                }
                else{
                    console.log(`${this.player1.name} hit ${arrNine[0]} failed!`)
                }

                turn = 0;
                turn = this.player2.hitNineBall()
                if (turn == 1){
                    console.log(`${this.player2.name} hit ${arrNine[0]} success!`)
                    arrNine.splice(0,1);
                }
                else{
                    console.log(`${this.player2.name} hit ${arrNine[0]} failed!`)
                }
            }
            else if (arrNine[0] == 9){
                let turn = 0;
                turn = this.player1.hitNineBall()
                if (turn == 1){
                    console.log(`${this.player1.name} hit ${arrNine[0]} success!\n${this.player1.name} wins!`)
                    arrNine.splice(0,1);
                }
                else{
                    console.log(`${this.player1.name} hit ${arrNine[0]} failed!`)
                }

                turn = 0;
                turn = this.player2.hitNineBall()
                if (turn == 1){
                    console.log(`${this.player2.name} hit ${arrNine[0]} success!\n${this.player2.name} wins!`)
                    arrNine.splice(0,1);
                }
                else{
                    console.log(`${this.player2.name} hit ${arrNine[0]} failed!`)
                }
            }
        }
    }

    eightBall(){
        let bolaSolid = [1, 2, 3, 4, 5, 6, 7];
        let bolaStripes = [9, 10, 11, 12, 13, 14, 15];
        let bolaAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        let bolaPlayer1, bolaPlayer2 = 0

        let hit = Math.floor(Math.random()*bolaAvailable.length)
        
        if (hit == 8){
            console.log(`Bola 8 masuk, ${this.player2.name} menang.`)
            return
        }
        else if (bolaSolid.includes(hit)){
            // 1 = bola Solid, 0 = bola Stripes
            bolaPlayer1 = 1
            console.log(`Bola ${hit} masuk, ${this.player1.name} bola solid`)
            bolaSolid.splice(bolaSolid.indexOf(hit), 1);
            bolaAvailable.splice(bolaAvailable.indexOf(hit), 1);
        }
        else if(bolaStripes.includes(hit)){
            // 1 = bola Solid, 0 = bola Stripes
            bolaPlayer1 = 0
            console.log(`Bola ${hit} masuk, ${this.player1.name} bola stripes`)
            bolaSolid.splice(bolaSolid.indexOf(hit), 1);
            bolaAvailable.splice(bolaAvailable.indexOf(hit), 1);
        }

        if (bolaPlayer1 == 0){
            bolaPlayer2 == 1;
        }
        else{
            bolaPlayer2 == 0;
        }

        while(bolaAvailable.length != 0){
            hit = Math.floor(Math.random()*bolaAvailable.length)
            if (hit == 8){
                console.log(`Bola 8 masuk, ${this.player1.name} menang.`)
                break
            }
            else if (bolaAvailable.includes(hit)){
                bolaAvailable.splice(bolaAvailable.indexOf((hit)-1), 1);
            }
            else{
                continue
            }
        }
    }
}

playerA = new player("Tommy");
playerB = new player("Bobby");

billiardGame = new billiard(playerA, playerB);
billiardGame.nineBall();
