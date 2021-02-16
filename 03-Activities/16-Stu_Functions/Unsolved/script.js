// Write Your Code Below
function equalValues(x, y) {
    if (x === y) {
        console.log("They are equal in type and value");
    }
    else if (x == y) {
        console.log("They are equal in value")
    }
    else {
        console.log("They are not equal")
    }
}

let x = equalValues;

x(2,'2');