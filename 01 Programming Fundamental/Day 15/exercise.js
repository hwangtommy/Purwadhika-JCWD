// Question 1: Write a code to check whether the date is a weekend.
function isWeekend(date){
    if (date.getUTCDay() == 0 || date.getUTCDay() == 6){
        return "Weekend"
    }
    else{
        return "Weekday"
    }
}

let date = new Date("2022-11-26");
console.log(isWeekend(date))

// Question 2: Write a code to find GCD of two numbers 
function findGCD(numA, numB){
    let a = numA
    let b = numB
    let r = 0
    while (a%b > 0){
        r = a%b
        a = b
        b = r
    }
    return b;
}

console.log(findGCD(1220, 516))

// Question 3: Write a code to find LCM of two numbers
function findLCM(numA, numB){
    let a = numA
    let b = numB
    let r = 0
    do{
        r = a%b
        a = b
        b = r
    }
    while(a%b > 0)

    return ((numA * numB)/b)
}

console.log(findLCM(15, 20))

// Question 4: Write a code to find most common character from a string
function mostCommonChar(string){
    string = string.toLowerCase()
    string = string.replace(/\s/g, '')
    let stringArr = string.split("")
    stringArr = stringArr.sort()
    let arrLength = stringArr.length
    let max = 0;
    let current = 0
    let result = stringArr[0]
    
    for (let i = 1; i < stringArr.length; i++){
        if (stringArr[i] == stringArr[i-1]){
            current++
        }
        else{
            current = 1;
        }
        if (current > max){
            max = current
            result = stringArr[i-1]
        }
    }
    return result
}

console.log(mostCommonChar("today is a great day"))

// Question 5: Write a code to sort a string alphabetically (with and without sort function)
function sortStrSort(string){
    string = string.toLowerCase()
    string = string.replace(/\s/g, "")
    let stringArr = string.split("")
    stringArr = stringArr.sort()
    return stringArr.join("")
}

console.log(sortStrSort("today is a great day"))

function sortStr(string){
    string = string.toLowerCase()
    string = string.replace(/\s/g, "")
    let stringArr = string.split("")
    let result = [];
    for (var i = 1; i < stringArr.length; i++){
        for (var j = 0; j < i; j++){
            if (stringArr[i] < stringArr[j]) {
            let x = stringArr[i];
            stringArr[i] = stringArr[j];
            stringArr[j] = x;
            }
        }
    }
    return stringArr.join("")
}

console.log(sortStr("today is a great day"))

// Question 6: Write a code to get minimum date from array of dates.
function getMinDate(inputArr){
    let dateArr = [];
    for (let i in inputArr){
        dateArr.push(new Date(inputArr[i]))
    }
    let minDate = new Date(Math.min(...dateArr))
    return minDate
}

let tanggal = ["2022-11-28", "2022-12-29", "2022-02-01"];
console.log(getMinDate(tanggal))

// Question 7: Write a code that calculates the sum of all elements of a two-dimensional array
function sumArr(inputArr){
    let result = 0;
    for (let i in inputArr){
        result += inputArr[i]
    }
    return result
}

console.log(sumArr([5,4,3,2,1]))

// Question 8: Write a code to find the longest common prefix string amongst an array of strings.
function findCommon(inputArr){
    inputArr.sort();
    let end = Math.min(inputArr[0].length, inputArr[inputArr.length-1].length)
    console.log(end)

    let i = 0;
    while (i < end && inputArr[0][i] == inputArr[inputArr.length-1][i] )
        i++;
   
    let pre = inputArr[0].substring(0, i);
    return pre;
}

let input=["geeksforgeeks", "geeks", "geek", "geezer"]
console.log(findCommon(input))

// Question 9: Write a code that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half
function copyHalf(inputArr){
    if (inputArr%2 == 0){
        while(i=1)
    }
}

