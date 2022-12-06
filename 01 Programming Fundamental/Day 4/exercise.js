// Question 1: Create a function that can create a triangle pattern according to the height

function triangle(triangleHeight){
    let result = "";
    let counter = 1;
    for (i=1; i<=triangleHeight; i++){
        for (j=1; j<=i; j++){
            if (counter < 10){
                result += `0${counter} `
                counter++
            }
            else{
                result += `${counter} `
                counter++
            }
            
        }
        result += `\n`
    }
    return result
}

console.log(triangle(4));

// Question 2: Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".

function fizzBuzz(n){
    let temp = "";
    for (i=1; i<=n; i++){
        if (i%5 == 0 && i%3 == 0){
            temp += `FizzBuzz `
        }
        else if (i%5 == 0){
            temp += `Buzz `
        }
        else if (i%3 == 0){
            temp +=`Fizz `
        }
        else{
            temp += `${i} `
        }
    }
    return temp
}

console.log(fizzBuzz(15));

// Question 3: BMI Calculator

function BMICalc(weight, height){
    let BMI = weight / height ** 2

    if (BMI < 18.5){
        return `Less weight`
    }
    else if (BMI >= 18.5 && BMI < 25){
        return `Ideal`
    }
    else if (BMI >= 25 && BMI < 30){
        return `Overweight`
    }
    else if (BMI >= 30 && BMI < 40){
        return `Very Overweight`
    }
    else{
        return `Obesity`
    }
}

console.log(BMICalc(80, 1.8));

// Question 4: Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

function removeOdd(numberArr){
    let result = [];
    for (i=0; i<numberArr.length; i++){
        if (numberArr[i] % 2 == 0){
            result.push(numberArr[i])
        }
    }

    return result;
}

let numberArray = [1, 2, 3, 4, 5, 6]
console.log(removeOdd(numberArray));

// Question 5: Write a function to split a string and convert it into an array of words
function splitStr(str){
    let result = [];
    result=str.split(" ")
    return result
}

console.log(splitStr("Today we are doing something"));