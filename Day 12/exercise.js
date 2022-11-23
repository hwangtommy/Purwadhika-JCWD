// Question 1 : Given an array nums of size n, return the majority element.
function majorNum(inputArr){
    let majority = Math.floor(inputArr.length/2)
    let arrSort = inputArr.sort();
    
    if (arrSort.length % 2 == 0){
        return arrSort[arrSort.length/2]
    }
    else{
        return arrSort[(arrSort.length-1)/2]
    }
}

// let input = [2, 1, 1, 2, 2];
// console.log(majorNum(input));

// Question 2: Create a function to convert roman numeral to integer.
function romanToInt(roman){
    let count = 0;
    arrRoman = roman.split("")

    for (let i in arrRoman){
        if (arrRoman[i] == "I" && arrRoman[i+1] == "V"){
            count += 4;
        }
        else if (arrRoman[i] == "I" && arrRoman[i+1] == "X"){
            count += 9;
        }
        else if (arrRoman[i] == "X" && arrRoman[i+1] == "L"){
            count += 40;
        }
        else if (arrRoman[i] == "X" && arrRoman[i+1] == "C"){
            count += 90;
        }
        else if (arrRoman[i] == "C" && arrRoman[i+1] == "D"){
            count += 400;
        }
        else if (arrRoman[i] == "C" && arrRoman[i+1] == "M"){
            count += 900;
        }
        else if (arrRoman[i] == "I"){
            count += 1;
        }
        else if (arrRoman[i] == "V"){
            count += 5;
        }
        else if (arrRoman[i] == "X"){
            count += 10;
        }
        else if (arrRoman[i] == "L"){
            count += 50;
        }
        else if (arrRoman[i] == "C"){
            count += 100;
        }
        else if (arrRoman[i] == "D"){
            count += 500;
        }
        else if (arrRoman[i] == "M"){
            count += 1000;
        }
    }

    return count;
}

console.log(romanToInt("XVII"))

// Question 3: Given an integer numRows, return the first numRows of Pascal's triangle.
function pascalTriangle(numRows){
    result = [];

    if (numRows == 0){
        return [[]];
    }
    else if(numRows == 1){
        return [[1]];
    }
    for (let i = 1; i<=numRows; i++){
        tempArr = [];
        for (let j = 0; j<i; j++){
            if (j == 0 || j == i-1){
                tempArr.push(1)
            }
            else{
                tempArr.push((result[i-2][j-1] + result[i-2][j]))
            }
        }
        result.push(tempArr)
    }

    return result;
}

// console.log(pascalTriangle(5))

// Question 4: You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
function maxProfit(prices){
    lowest = prices[0];
    lowestPos = 0;
    highest = 0;
    for (let i in prices){
        if (prices[i] < lowest){
            lowest = prices[i]
            lowestPos = i
        }
    }
    for (i=lowestPos; i<prices.length; i++){
        if (prices[i] > highest){
            highest = prices[i]
        }
    }

    return highest-lowest;
}

console.log(maxProfit([7,6,4,3,1]))