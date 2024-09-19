/* 1. Write a function reverseString(str) that takes a string and returns it reversed. Ex: reverseString("hello"); // Output: "olleh"*/

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
