// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 5;
console.log(c); // 5

// c = 10; // TypeError: Assignment to constant variable.

function testConst() {
    const d = 10;
    if (true) {
        const d = 20; // Different variable
        console.log(d); // 20
    }
    console.log(d); // 10
}

testConst();

// For objects and arrays
const obj = { name: 'John' };
obj.name = 'Doe'; // This is allowed
console.log(obj.name); // Doe

// obj = {}; // TypeError: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); // This is allowed
console.log(arr); // [1, 2, 3, 4]

// arr = [5, 6]; // TypeError: Assignment to constant variable.
