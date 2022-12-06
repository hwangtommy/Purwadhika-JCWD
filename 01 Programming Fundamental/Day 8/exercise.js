// Calculate a program to calculate employee salary

// Create classes of Employee
class Employee{
    constructor (name){
        this.Name = name;
    }
}

// Create class of Fulltime and Parttime Employee
class FulltimeEmployee extends Employee{
    constructor(name){
        super(name);
        this.totalHours = [];
    }

    addWorkingHour(hours){
        if (hours>=24 && hours <1){
            throw new Error("Cannot work for more than 24 hours or less than 1 hour per day")
        }
        else{
            this.totalHours.push(hours)
        }
    }

    calculateTotalSalary(){
        let totalSalary = 0;
        for (let i in this.totalHours){
            if(this.totalHours[i] >= 6){
                totalSalary += 600000+(75000*(this.totalHours[i]-6));
            }
            else if(this.totalHours[i] < 6){
                totalSalary += 100000*this.totalHours[i];
            }
        }
        return totalSalary
    }
}

class ParttimeEmployee extends Employee{
    constructor(name){
        super(name);
        this.totalHours = [];
    }

    addWorkingHour(hours){
        if (hours>=24 && hours <1){
            throw new Error("Cannot work for more than 24 hours or less than 1 hour per day")
        }
        else{
            this.totalHours.push(hours)
        }
    }

    calculateTotalSalary(){
        let totalSalary = 0;
        for (let i in this.totalHours){
            if(this.totalHours[i] >= 6){
                totalSalary += 300000+(30000*(this.totalHours[i]-6));
            }
            else if(this.totalHours[i] < 6){
                totalSalary += 50000*this.totalHours[i];
            }
        }
        return totalSalary
    }
}

let employeeTommy = new FulltimeEmployee("Tommy");

// console.log(employeeTommy)
// employeeTommy.addWorkingHour(7);
// console.log(employeeTommy)
// employeeTommy.addWorkingHour(10);
// console.log(employeeTommy)
// console.log(employeeTommy.calculateTotalSalary())

// This -> access properties inside object

// Question 2: Create a shooting game

class ShootingGame{
    constructor(player1, player2){
        this.Player1 = player1;
        this.Player2 = player2;
    }

    getRandomItem(){
        let items = [{health: 0}, {health: 10}, {power: 0}, {power: 10}]
        return items[Math.floor(Math.random()*3)+1];
    }

    start(){
        while (this.Player1.Health > 0 && this.Player2.Health > 0){

            this.Player1.showStatus()
            this.Player2.showStatus()

            this.Player1.useItem(this.getRandomItem())
            this.Player2.useItem(this.getRandomItem())

            let turn = Math.round(Math.random())

            if(this.Player1.Health < this.Player2.Power){
                console.log(`The winner is ${this.Player2.Name}`)
                break;
            }
            else if(this.Player2.Health < this.Player1.Power){
                console.log(`The winner is ${this.Player1.Name}`)
                break;
            }

            if (turn == 0){
                this.Player2.hit(this.Player1.Power)
                this.Player1.hit(this.Player2.Power)
            }
            else if (turn == 1){
                this.Player1.hit(this.Player2.Power)
                this.Player2.hit(this.Player1.Power)
            }

            this.Player1.showStatus()
            this.Player2.showStatus()

        }
    }
}

class Player{
    constructor(name){
        this.Name = name;
        this.Health = 100;
        this.Power = 10;
    }

    hit(power){
        this.Health -= Number(power);
    }

    useItem(item){
        if(Object.keys(item)[0] == "health"){
            this.Health += Number(item.health)
        }
        else if(Object.keys(item)[0] == "power"){
            this.Power += Number(item.power)
        }
    }

    showStatus(){
        console.log(`Name: ${this.Name}\nHealth: ${this.Health}\nPower: ${this.Power}`)
    }
}

let playerA = new Player ("Tommy")
let playerB = new Player ("Bobby")
let game = new ShootingGame(playerA, playerB)
game.start()