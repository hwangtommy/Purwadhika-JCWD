// store palindrome in variable
// create array of alphabets
// split palindrome letters into array
// filter palindrome array
//     allow letter if letter is an alphabet
// join palindrome array
// run a loop for every half length of palindrome
//     if all the i-th letter is the same as the length - i-th - 1
//     then it is a palindrome
//  else, it is not a palindrome

let palindrome = "race, car";
const arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
palindrome = palindrome.split("")


palindrome = palindrome.filter((letter) => {
    return arrAlpha.includes(letter);
})
palindrome = palindrome.join("")

console.log(palindrome)

let isPalindrome = false
for (i=0; i<=palindrome.length/2; i++){
    if (palindrome.charAt(i) == palindrome.charAt(palindrome.length-i-1)){
        isPalindrome = true
    }
    else{
        isPalindrome = false
    }
}


console.log(isPalindrome)