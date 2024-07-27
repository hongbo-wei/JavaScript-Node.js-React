// console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
console.log(a); // 5

function testLet() {
    a = 10;
    let b = 10;
    if (true) {
        let b = 20; // Different variable
        console.log(b); // 20
    }
    console.log(b); // 10
}

testLet();
console.log("Hello", a); // 10