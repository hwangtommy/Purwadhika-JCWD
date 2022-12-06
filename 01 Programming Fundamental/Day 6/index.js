let student = {
    name: "Tommy",
    age: 28,

};

// Student = new Object();

student.hobby = "Cooking";

// delete student.name;
console.log(student);
console.log(student.family?.totalFamily);

student.family = {
    totalFamily : 100
}

console.log(student.family.totalFamily);

console.log(Object.keys(student));

for (let key in student){
    console.log(key)
    console.log(student[key])
}

const student2 = {
    firstName: "Tommy",
    lastName: "Arifin",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName (values){
        const arrName = values.split(" ")
        this.firstName = arrName[0];
        this.lastName = arrName[1];
    }
}

const {fullName} = student2;
console.log(fullName);

const data1 = [1,2,3]
const data2 = [4,5,6]
const data3 = [...data1, ...data2]
console.log(data3);

// Class
class User {
    greeting() {
        console.log("Hello")
    }
}

const User2 = class{
    greeting() {
        console.log("Hello")
    }
}

let objUser = new User();
objUser.greeting();

class Product{
    constructor(){
        this.productName
        this.price
    }

    getProductName(){
        return this.productName
    }

    setProductName(productName){
        this.productName = productName
    }

    getPrice(){
        return this.price
    }

    setPrice(price){
        this.price = price
    }
}

class Book extends Product{
    constructor(){
        super()
        this.author
    }

    getAuthor(){
        return this.author
    }

    setAuthor(author){
        this.author = author
    }
}

const buku = new Book()
buku.setAuthor("John")
buku.setProductName("Buku IPA")
buku.setPrice(50000)

console.log(buku)