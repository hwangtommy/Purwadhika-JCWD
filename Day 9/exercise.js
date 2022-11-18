// Create a calculator class
// Create a method to see the calculation history
// Use get and set for the properties
// Create a method to clear history
// Create a method to show result
// Use private on the properties

class calculator{
    constructor(input){
        this.Input = input;
    }

    get calcInput(){
        return this.Input
    }

    set calcInput(input){
        this.historyArr.push(this.Input);
    }
    
    calcHistory(){
        return this.historyArr
    }

    clrHistory(){
        this.historyArr = [];
    }

    showResult(){
        this.Input = this.Input.replace(/x/g, "*")
        this.Input = this.Input.replace(/:/g, "/")
        return eval(this.Input)
    }
}

let string = "5+5x10:2"
let calc1 = new calculator(string)
console.log(calc1.calcHistory())
let string1 = "3+5x10"
let calc2 = new calculator(string1)
console.log(calc2.showResult())