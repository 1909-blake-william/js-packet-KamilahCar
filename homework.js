// Javascript Homework
// Due next Friday Morning
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.
function fib(n){
    if (typeof n !== "number"){
        alert("Please enter a number");
    } else if (n === 1){
        return 0;
    }
    else if (n == 2){
        return 1;
    } else {
        return fib(n-1)+fib(n-2);
    }
   
}
console.log(fib(10));

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray){
    //Filling array with numbers from numArray argument
    let arrayToSwap = Array.from(numArray);
    let temp;
    
    //Without this for loop each number in the array will only be swapped once (if they need to be swapped)
    for(let multipleCycles = 0; multipleCycles< arrayToSwap.length-1; multipleCycles++) {
    //Swapping numbers two at a time
    for (let iterateArray = 0; iterateArray < arrayToSwap.length; iterateArray++){
        if (arrayToSwap[iterateArray] > arrayToSwap[iterateArray + 1]){
            temp = arrayToSwap[iterateArray];
            arrayToSwap[iterateArray] = arrayToSwap[iterateArray + 1];
            arrayToSwap[iterateArray+1] = temp;
        }
    }
}
    return arrayToSwap;
      
}
console.log(bubbleSort([1, 5, 2, 1, 6]));

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr){
    if (typeof someStr !== "string"){
        alert("Please enter a string");
    } else {
    //characters array
    let characters = someStr.split("");
    //another character array
    //with reversed characters
    let reversed = characters.reverse();
    //final array
    let finalString = reversed.join("");
    
    return finalString; 
    } 
}
console.log(reverseStr("Hello"));

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum){
    if (typeof someNum !== "number"){
        alert("Please enter a number");
    } else if (someNum === 0){
        return 0;
    } else if (someNum === 1){
        return 1;
    } else {
        return someNum * factorial(someNum - 1);
    }
   

}
console.log(factorial(10));

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function substring(someStr, length, offset){
    //console.log(typeof someStr);
    if (typeof someStr !== "string"){
        alert("Please enter a string");
    } else {
        return someStr.slice(offset, offset + length);
    }
}
//Should return up World?
console.log(substring("What up World?", 9, 5));

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven (someNum){
    let evenCheck = someNum/2;
    //console.log(evenCheck);
    if (typeof someNum !== "number"){
        alert("Please enter a number");
    } else if (Number.isInteger(evenCheck)){
        return true;
    } else {
        return false;
    }
}
console.log(isEven(10));
console.log(isEven(11));

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr){
     //characters array
     let characters = someStr.split("");
    //another character array
    //with reversed characters
    let reversed = characters.reverse();
    //final array
    let finalString = reversed.join("");
    if (finalString === someStr){
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("Pokemon"));
console.log(isPalindrome("trert"));
console.log(isPalindrome("tre ! ert"));

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character){
    if (shape === "Square"){
        for (let i = 0; i < height; i++){
            for (let j = 0; j < height; j++){
                document.write(character);
            }
            document.write('<br>');
        }
    } else if (shape === "Triangle"){
        for(let i = 0; i < height; i++){
            for(let j = 0; j < height; j++){
                document.write(character);
            }
            document.write(character);
        }
    } else {

    }
}
printShape("Square", 3, "%");
printShape("Square", 10, "*");
/*printShape("Triangle", 3, "%"));
printShape("Diamond", 5, "%"));*/

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){

}


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr){
    
    for (let i = 0; i < someArr.length; i++){
        if (i === 3){

        }
    }
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);


// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);
