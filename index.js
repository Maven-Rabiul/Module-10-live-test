/* 1. Write a function reverseString(str) that takes a string and returns it reversed. Ex: reverseString("hello"); // Output: "olleh"  */


function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));



/*2. Write a function sumArray(arr) that takes an array of numbers and returns the sum of all the numbers. Ex: sumArray([1, 2, 3, 4]); // Output:10   */



function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}
console.log(sumArray([1, 2, 3, 4]));



/* 3. Write a function removeDuplicates(arr) that takes an array and returns a new array with only unique values (duplicates removed). Ex: removeDuplicates([5, 5, 5, 6, 7]); // Output: [5, 6, 7]  */


function removeDuplicates(arr) {
    let seen = {};
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (!seen[arr[i]]) {
            uniqueArr.push(arr[i]);
            seen[arr[i]] = true;
        }
    }

    return uniqueArr;  // Return the array of unique values
}

console.log(removeDuplicates([5, 5, 5, 6, 7]));



/* 4.  Write a function celsiusToFahrenheit(celsius) that takes a temperature in Celsius and converts it to Fahrenheit. The formula to convert Celsius to Fahrenheit is:

Fahrenheit=(celsius * 9/5)+32

Example: console.log(celsiusToFahrenheit(25)); // Output: 77   */



function celsiusToFahrenheit(celsius) {

    let fahrenheit = (celsius * 9 / 5) + 32;  // formula to convert Celsius to Fahrenheit
    return fahrenheit;
}

console.log(celsiusToFahrenheit(25));