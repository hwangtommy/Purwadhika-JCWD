// Question 1: Write a code to convert celsius to fahrenheit
let celcius = 26;
fahrenheit = Math.round(celcius * (9/5) + 32)
console.log(`${celcius} degrees celcius is ${fahrenheit} degrees fahrenheit`);

// Question 2: Write a code to check whether the number is odd or even
let oddevennumber=6;
if (oddevennumber%2 === 0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}

// Question 3: Write a code to check whether the number is prime number or not
let primenumber=2;
let flag=0;
for (i=2; i<primenumber/2; i++){
    if (primenumber%i === 0){
        console.log(`${primenumber} is not a prime number`);
        flag=1;
    }
}
if (flag === 0){
    console.log(`${primenumber} is a prime number`);
}

// Question 4: Write a code to find the sum of the numbers 1 to N
let n=5;
let result=0;
for (let i=1; i<=n; i++){
    result += i
}
console.log(`The sum of the numbers 1 to ${n} is ${result}`);

// Question 5: Write a code to find factorial of a number
let factorialnum=5;
let factorial=1;
for (let i=1; i<=factorialnum; i++){
    factorial *= i;
}
console.log(`The factorial of ${factorialnum} is ${factorial}`);

// Question 6: Write a code to print the first N fibonacci numbers
let nfibonacci=10;
let a=0;
let b=1;
console.log(`The first ${nfibonacci} fibonacci numbers are`);
for (let i=1; i<=nfibonacci; i++){
    console.log(a);
    next=a+b
    a=b
    b=next
}

// Additional Question 1: BMI Calculator
let weight = 80;
let height = 1.8;
let BMI = weight/Math.pow(height, 2)

if (BMI<= 25){
    console.log("Ideal weight");
}
else{
    console.log("Not ideal weight");
}

// Additional Questipon 2: Fuzz Buzz Loop
let nbuzz=15;

for (i=1; i<=nbuzz; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log("FuzzBuzz");
    }
    else if (i%5 === 0){
        console.log("Fuzz");
    }
    else if (i%3 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}