// Singleton
// Object.create

// Object Literals

const sym = Symbol('Key 1')

const user = {
    f_name: 'Sahil',
    l_name: 'Panindre',
    age: 24,
    [sym]: 'Key 1',
    profession: 'Engineer',
    isLoggedIn: true
}

// console.log(user['age'])
// console.log(user.f_name);
console.log(user[sym]);

user.age = 25
// console.log(user);
// Object.freeze(user) // Now we cannot change the obj
user.age = 24
// console.log(user['age']);

user.greeting = function () {
    console.log(`Hello, ${this.f_name} ${this.l_name}`);
}

// console.log(user.greeting); // Returns the refrence of a Function.

user.greeting()