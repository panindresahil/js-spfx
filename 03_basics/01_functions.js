function sayMyName() {
    console.log('S');
    console.log('A');
    console.log('H');
    console.log('I');
    console.log('L');
}

// sayMyName() //Callling a Function.

// function add(num1, num2) {
//     console.log(`Addition of ${num1} and ${num2} is ${num1 + num2}`);
// }

function add(num1, num2) {
    return (`Addition of ${num1} and ${num2} is ${num1 + num2}`);
}
// const result = add(2,4)
// console.log(result);

function loginUserMessage(userName) {
    if (!userName) {
        console.log('Please Enter a User Name.');
        return
    }

    return `${userName} just logged in.`
}

// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500))

const user = {
    userName: 'Hitesh',
    Age: 24
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.Age}`);
}

handleObject(user)