// Question 1: Create a function to check if two objects are equal

function isObjEqual(obj1, obj2){
    if (Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }
    else{
        for (let i in obj1){
            if (obj1[i] == obj2[i]){
                return true
            }
            else{
                return false
            }
        }
    }
}

// let objA = {name: "Tommy", age: 28};
// let objB = {name: "Tommy", age: 28};

// console.log(isObjEqual(objA, objB));
// console.log(Object.keys(objA).length);

// Question 2: Create a function to get the intersection of two objects

function intersectionObj (obj1, obj2){
    let result = {...obj1, ...obj2}
    return result;
}

let objA = {a: 1, b: 2, c:3, d:4}
let objB = {a: 1, c: 3}

console.log(intersectionObj(objA, objB));

// Question 3: Create a function to merge two array of student data and remove duplicate data
// Student data : name & email

function mergeStudentData (arr1, arr2){
    let result = arr1.concat(arr2)
    result = result.filter((val, i, self) =>
    i === self.findIndex((t) => (
        t.email === val.email && t.name == val.name
    )))
    return result;
}

let Student1 = [{name: "Tommy", email: "tommy@mail.com"}, {name: "Robby", email: "robby@mail.com"}]
let Student2 = [{name: "Tommy", email: "tommy@mail.com"}, {name: "Bobby", email: "bobby@mail.com"}]

console.log(mergeStudentData(Student1, Student2))

// Question 4: Create a function that can accept input as an array of objects and switch all values into property and property into value

function propertyValueSwitch(arrInput){
    let temp = [];
    let result = [];

    for (let i in arrInput){
        temp = Object.entries(arrInput[i])
    }
    
    for (let i in temp){
        let tempObj = {};
        tempObj =  { [temp[i][1]] : temp[i][0]}
        result.push(tempObj)
    }

    return result
}

let arrayInput = [{ name: "David", age: 20 }];
// console.log(arrayInput[0]["name"])
console.log(propertyValueSwitch(arrayInput))

// Question 5: Create a function to find a factorial number using recursion

function findFactorial(num){
    if (num === 0){
        return 1
    }
    else if (num < 0){
        throw new Error("Number is below 0");
    }
    else{
        return num * findFactorial(num-1)
    }
}

 console.log(findFactorial(5))