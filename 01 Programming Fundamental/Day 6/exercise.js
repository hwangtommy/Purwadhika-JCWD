// Exercise 1

// Create a function to calculate array of student data
function studentDataCalculate(inputArr){
    // Put all scores and age into an array
    let allScore = inputArr.map(({score}) => score);
    let allAge = inputArr.map(({age}) => age);

    // Calculate highest score and age
    maxScore = Math.max.apply(null, allScore);
    maxAge = Math.max.apply(null, allAge);
    console.log(`The highest score is ${maxScore}`);
    console.log(`The oldest student is ${maxAge} years old`)

    // Calculate lowest score and age
    minScore = Math.min.apply(null, allScore);
    minAge = Math.min.apply(null, allAge);
    console.log(`The lowest score is ${minScore}`);
    console.log(`The youngest student is ${minAge} years old`)

    // Calculate average score and age
    let totalScore = 0;
    let totalAge = 0;
    for (i=0; i<allScore.length; i++){
        totalScore += allScore[i]
    }
    console.log(`The average score is ${totalScore/allScore.length}`)
    for (i=0; i<allAge.length; i++){
        totalAge += allAge[i]
    }
    console.log(`The average age is ${totalAge/allAge.length}`)

    // Combining everything into an object
    let resultScore = {
        highest: maxScore,
        lowest: minScore,
        average: totalScore/allScore.length
    }
    
    let resultAge = {
        highest: maxAge,
        lowest: minAge,
        average: totalAge/allAge.length
    }

    return [resultScore, resultAge]
}

student = [{
    name: "Tommy", 
    age: 20, 
    score: 90, 
    email: "tommy@mail.com"
}, {
    name: "Bobby",
    age: 21,
    score: 95, 
    email: "bobby@mail.com"
}]

result = studentDataCalculate(student);
console.log(result)

// Question 2
class Product{
    constructor(name, price){
        this.Name = name;
        this.Price = price;
    }
}

class TransItem extends Product{
    constructor({name, price}, qty){
        super(name, price);
        this.Qty = qty;
    }
}

class Transaction{
    constructor(){
        this.Total = 0;
        this.Products = [];
    }

    addToTransaction(Item){
        this.Products.push(Item)
        this.Total += Item.Price * Item.Qty
    }

    showTotalTransaction(){
        let text = "";
        this.Products.map((value, index) => {
            text += Number(index+1) + ". " + value.Name + "Qty " + value.Qty + " Price Rp." + value.Price.toLocaleString() + "\n"
        })
        text += "Total Price Rp." + this.Total.toLocaleString()

        return text;
    }

    checkout(Payment){
        let text = "";
        if(Payment > this.Total){
            text = "Pembelian berhasil, kembalian anda adalah Rp. " + Number(payment - this.Total).toLocaleString()
            this.Products.splice(0, this.Products.length)
        }
        else{
            text = "Uang anda kurang."
        }

        return text;
    }
}