console.log(x); // undefined due to hoisting
var x = 5;
console.log(x); // 5

function testVar() {
    x = 10;
    var y = 10;
    if (true) {
        var y = 20; // Same variable
        console.log(y); // 20
    }
    console.log(y); // 20
}

testVar();

console.log(x); // 10