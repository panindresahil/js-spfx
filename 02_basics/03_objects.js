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

console.log(user['age'])
console.log(user.f_name);
console.log(user[sym]);