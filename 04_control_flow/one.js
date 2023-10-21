// If Statement

// const temperature = 30
// if (temperature < 35) {
//     console.log(`Temperature is less than 35`);
// } else {
//     console.log(`Temperature is greater than 35`);
// }
// Operators

// <, >, <=, >=, ==, !=, ===, !==, &&, ||

// const score = 200

// if (score > 100) {
//     let power = 'fly'
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

const balance = 550

// if (balance > 500) console.log('Test');

// ---------------- Nested If-Else ----------------------

if (balance < 500) {
    console.log(`Balance is less than 500: ${balance}`);
} else if (balance > 500 && balance <= 750) {
    console.log(`Balance is more than 500 but less than 750: ${balance}`);    
} else {
    console.log(`Balance is more than 500: ${balance}`);    
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log('Allow to buy course.');
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('User Logged In');
}