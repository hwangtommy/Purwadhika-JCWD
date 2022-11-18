// Question 1: Write a function to get the lowest, highest and average value in the array (without sort function)
function minMaxAvg(inputArr){
    let min = 0;
    let max = 0;
    let avg = 0;

    // Calculate Average
    for (i=0; i<inputArr.length; i++){
        avg += inputArr[i];
    }
    console.log(`The average of the array is ${avg / inputArr.length}`);

    // Calculate Minimum
    for (i=0; i<inputArr.length; i++){
        if (i == 0){
            min = inputArr[i];
        }
        else if (inputArr[i] < min){
            min = inputArr[i]
        }
        else{
            continue
        }
    }
    console.log(`The minimum value of the array is ${min}`)

    // Caclulate Maximum
    for (i=0; i<inputArr.length; i++){
        if (i == 0){
            max = inputArr[i];
        }
        else if (inputArr[i] > max){
            max = inputArr[i]
        }
        else{
            continue
        }
    }
    console.log(`The maximum value of the array is ${max}`)
}

// minMaxAvg([1, 2, 3]);

// Question 1: Write a function to get the lowest, highest and average value in the array (with sort function)
function minMaxAvgSort(inputArr){
    // Find maximum value
    max = Math.max.apply(null, inputArr);
    console.log(`The maximum value is ${max}`);

    // Find minimum value
    min = Math.min.apply(null, inputArr);
    console.log(`The minimum value is ${min}`)
}

// minMaxAvgSort([1, 2, 3]);

// Question 2: Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
function wordsConcat(words){
    result=[];

    // Create a loop
    for (i=0; i<words.length; i++){
        if (i != words.length-1){
            result.push(`${words[i]}, `);
        }
        else{
            result.push(`and ${words[i]}`);
        }
    }

    // Combine arrays
    return result.join('');
}

// console.log(wordsConcat(["dog", "cat", "duck"]))

// Question 3: Write a function to split a string and convert it into an array of words (function method)
function splitString(inputArr){
    result = inputArr.split(" ");
    return result;
}

console.log(splitString("The quick brown fox jumps over the lazy dog"));

// Question 4: Write a function to calculate each element in the same position from two arrays of integer.
function arrSum(arr1, arr2){
    result=[];
    for(i=0; i<arr1.length; i++){
        result.push(arr1[i] + arr2[i])
    }
    return result
}

console.log(arrSum([1, 2, 3], [3, 2, 1]));

// Question 5: Write a function that adds an element to the end of an array.
function addElement(inputArr, newElement){
    result = [];
    let temp = 0;
    for (i=0; i<inputArr.length; i++){
        if (newElement != inputArr[i]){
            result.push(inputArr[i]);
        }
        else if (newElement == inputArr[i]){
            temp = 1;
        }
        else{
            result.push(newElement)
        }
    }
    if (temp == 1){
        result.push(newElement);
    }
    return result
}

console.log(addElement(['The', 'quick', 'brown'], 'fox'));

// Question 6: Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
function removeOdd(inputArr){
    result = [];
    for (i=0; i<inputArr.length; i++){
        if (inputArr[i]%2 == 0){
            result.push(inputArr[i])
        }
        else{
            continue
        }
    }
    return result
}

console.log(removeOdd([1, 2, 3, 4, 5]));