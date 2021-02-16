//WRITE YOUR CODE BELOW
let students = ["Beth", "Dalton", "Sally", "Michael"];

for (i = 0; i < students.length; i++) {
    console.log("Great to see you, " + students[i] + "!");
}

console.log(students.length + " students in the class.");
console.log("--");

for (i = students.length - 1; i >= 0; i--) {
    console.log("Great to see you, " + students[i] + "!");
}