// Question 1: Create a function to convert Excel sheet column title to its corresponding column number.
function convertExcel(colTitle){
    let num = 0;
    for (let i=0; i<colTitle.length; i++){
        num = colTitle[i].charCodeAt() - 64 + num * 26;
    }
    return num;
}

// let text = "ZZ"
// console.log(convertExcel(text))

// Question 2: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
function findSingle(inputArr){
    arrSort = inputArr.sort();
    for (let i=0; i<inputArr.length; i++){
        if (inputArr[i] !== inputArr[i+1] && inputArr[i] !== inputArr[i-1]){
            return inputArr[i];
        }
    }
}

// let input = [2, 2, 1]
// console.log(findSingle(input))

// Question 3: Given two strings s and t, return true if t is an anagram of s, and false otherwise.
function isAnagram(s, t){
    sArr = s.split("");
    tArr = t.split("");
    sSort = sArr.sort();
    tSort = tArr.sort();
    isTrue = true

    console.log(sSort)
    console.log(tSort)

    if (sSort.length == tSort.length){
        while(isTrue == true){
            for (i=0; i<sSort.length; i++){
                if (sSort[i] != tSort[i]){
                    isTrue = false
                }
            }
            break;
        }
    }
    else{
        isTrue = false;
    }

    return isTrue
}
// let a = "nagaram"
// let b = "anagram"
// console.log(isAnagram(a, b))

// Question 4: Stairs

// I guess this involves fibonacci?
function stairSteps(n){
    let a = 0
    let b = 1
    for (i=0; i<n; i++){
        next = a+b
        a = b
        b = next
    }
    return b
}

console.log(stairSteps(5))