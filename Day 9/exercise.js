// Create a calculator class
// Create a method to see the calculation history
// Use get and set for the properties
// Create a method to clear history
// Create a method to show result
// Use private on the properties

class calculator{
    #input = ""
    #historyArr = []

    #number = 0
    constructor(){
        // this.#input = input;
        // this.historyArr = []
    }

    set number(val) {
        if (typeof val != "number")
        throw new Error("not a number")
        else
        this.number = val

    }

    get calcInput(){
        return this.#input
    }

    set calcInput(input){
        this.#input = input
        this.#historyArr.push(this.#input);
    }
    
    calcHistory(){
        return this.historyArr
    }

    clrHistory(){
        this.historyArr = [];
    }

    showResult(){
        this.Input = this.#input.replace(/x/g, "*")
        this.Input = this.#input.replace(/:/g, "/")
        return eval(this.#input)
    }
}

let string = "5+5x10:2"
let calc1 = new calculator()
calc1.calcInput = string
console.log(calc1);
calc1.calcInput = "5+5"
console.log(calc1);
console.log(calc1.calcInput);

// console.log(calc1.calcHistory())
// let string1 = "3+5x10"
// let calc2 = new calculator(string1)
// console.log(calc2.showResult())