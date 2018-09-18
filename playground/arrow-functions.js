// Arrow functions with one argument do not require the parameter to be enclosed in the parenthesis.
let square = (x) => x * x;
console.log(square(9));

let user = {
    name: 'Aditya',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hello. I am ${this.name}`)
    },
    // ES6 feature to define functions for an object.
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hello. I am ${this.name}`)

    }
};
console.log('\n---sayHi---');
user.sayHi(1, 2, 3, 4);

console.log('---sayHiAlt---');
user.sayHiAlt(1, 2, 3, 4);