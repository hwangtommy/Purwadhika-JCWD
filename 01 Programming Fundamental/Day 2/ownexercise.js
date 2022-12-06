// #1 — Print the numbers from 0 to 15
for (let i=1; i<=15; i++){
    console.log(i);
}

// #2 — Print the numbers from 12 to 24
for (i=12; i<=24; i++){
    console.log(i);
}

// #3 — Print the ODD numbers from 7 to 31
for (i=7; i<=31; i++){
    if (i%2 != 0){
        console.log(i);
    }
}

// #4 — Print the EVEN numbers from 10 to -20
for (i=10; i>=-20; i--){
    if (i%2===0){
        console.log(i);
    }
}

/* #5 — Iterate through all numbers from 1 to 45. Print the following:
For multiples of 3 print “Fizz”
For multiples of 5 print “Buzz”
For multiples of 3 and 5 print “FizzBuzz” */

for (i=1; i<=45; i++){
    if (i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }
    else if (i%3===0){
        console.log("Fizz");
    }
    else if (i%5===0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

// Multiplication table
let n=9;
for (i=1; i<=n; i++){
    console.log(`${n} x ${i} = ${n*i}`);
}

// Palindrome
var str="madam"
var len=str.length
for (i=0; i< len/2; i++){
    if (str[i] !== str[len-1-i]){
        console.log("Not a palindrome");
    }
}