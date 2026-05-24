

// Write a javaScript code to find the factorials of a number using the consept
// of recursion                                 

// Write a javaScript code to reverse your name
let name = "Courage";
let reversedName = name.split("").reverse().join("");

console.log(reversedName);

// write a javaScript code to change the value of an array
let fruits = ["apple", "orange", "banana"];
fruits [1] = "watermelon";

console.log(fruits);

//.Write a javaScript code to find the factorials of a number using the consept
// of recursion  

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));