let tinderUser = new Object() // Singleton Object

tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "panindresahil@gmail.com",
    fullName: {
        f_name: 'Sahil',
        l_name: 'Panindre'
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.f_name);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

const obj3 = {...obj1, ...obj2}

console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));