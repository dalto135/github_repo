// WRITE YOUR CODE HERE
let array = ["Dalton", "Steve", "Ashley", "Allie"];
let firstName = array[0];

console.log(array.length);
console.log("Welcome to class " + array[0]);
console.log("Welcome to class " + array[1]);
console.log("Welcome to class " + array[2]);
console.log("Welcome to class " + array[3]);

array[0] = "Bob";
console.log("Welcome to class " + array[0]);

if (array[0] !== firstName) {
    console.log(array[0] + " is in class");
}