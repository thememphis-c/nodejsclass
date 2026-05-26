// Write a javaScript code to reverse your name
// write a javaScript code to change the value of an array
// Write a javaScript code to find the factorials of a number using the consept
// of recursion                                 

//1
let name = "Courage";
let reversedName = name.split("").reverse().join("");

console.log(reversedName);

//2
let fruits = ["Apple", "Orange", "Banana"];
fruits [1] = "watermelon";

console.log(fruits);

let man = ["Money", "Responsibility", "Rich"];
man [2]= "Healthy";

console.log(man);

//3
function factorial(p) {
    if (p === 1) {
        return 1;
    }
    return p * factorial(p - 1);
}

console.log(factorial(5));