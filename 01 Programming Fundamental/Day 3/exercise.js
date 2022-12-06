// Question 1: Write a code to display the multiplication table of a given integer.
let nMultiplication = 9;

for (let i=1; i<=10; i++){
    console.log(`${nMultiplication} x ${i} = ${nMultiplication*i}`);
}

// Question 2: Write a code to check whether a string is a palindrome or not.
let strPalindrome = "racecar";
// strPalindrome = strPalindrome.toLowerCase;
let strLen = strPalindrome.length
let strArr = strPalindrome.split("");
let isPalindrome = true;

for (i=0; i<=strLen/2; i++){
    if (strArr[i] !== strArr[strLen-1-i]){
        isPalindrome = false;
    }
}

if (isPalindrome == true){
    console.log(`The string is a palindrome`);
}
else{
    console.log(`The string is not a palindrome`);
}

// Question 3: Write a code to convert centimeter to kilometer.
let nCm = 1000;
let nKm = nCm/100000;

console.log(`${nCm} centimeter is ${nKm} kilometer`);

// Question 4: Write a code to format number as currency (IDR)
let nCurrency = 25000;
nCurrency = nCurrency.toString();
let nCurrencyArr = nCurrency.split("")
strLen = nCurrency.length;

for (i=1; i<=Math.floor(strLen/3); i++){
    nCurrencyArr.splice(strLen-(3*i), 0, ",")
}

// console.log(nCurrency);
console.log(`Rp. ${nCurrencyArr.join("")},00`);

// Question 5: Write a code to remove the first occurrence of a given “search string” from a string
let nString = "Hello World";
let nSearchStr = "ell";
let nStringArr = nString.split("");
let nSearchStrArr = nSearchStr.split("");
let nStringResult = [];

let index = nString.indexOf(nSearchStr);
console.log(nString.slice(0, index) + nString.slice(index + nSearchStr.length));
// console.log(index);

// Question 6: Write a code to capitalize the first letter of each word in a string
let nStringCaps = "hello world"
let nStringCapsArr = nStringCaps.split(" ")
console.log(nStringCapsArr);
let nStringCapsResult = [];


for (i=0; i<nStringCapsArr.length; i++){
    nStringCapsResult.push(nStringCapsArr[i].charAt(0).toUpperCase() + nStringCapsArr[i].slice(1));
}

// for (i=0; i<nStringCapsArr.length; i++){
//     nStringCapsTemp = nStringCapsArr[i].split("")
//     for (i=0; i<nStringCapsTemp.length; i++){
//         if (i === 0){
//             nStringCapsTemp2.push(nStringCapsTemp[i].toUpperCase())
//         }
//         else{
//             nStringCapsTemp2.push(nStringCapsTemp[i])
//         }
//     }
//     nStringCapsTemp2=nStringCapsTemp2.join("")
//     nStringCapsResult.push(nStringCapsTemp2)
// }

console.log(nStringCapsResult.join(" "));

// Question 7: Write a code to reverse a string.
let nStrReverse = "Tommy";
let nStrReverseArr = nStrReverse.split("")
let nStrReverseResult = [];
let StrLenReverse = nStrReverse.length

for (i=0; i<=strLen; i++){
    nStrReverseResult.push(nStrReverseArr[StrLenReverse-1-i])
}

// console.log(nStrReverseArr);
console.log(`The reverse of ${nStrReverse} is ${nStrReverseResult.join("")}`);