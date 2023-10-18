const user = {
    userName: 'Sahil',
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.userName}, Welcome to the website.`);
        // console.log(this);
    }

}

// user.welcomeMessage()

// user.userName = 'Sam'

// user.welcomeMessage()

// console.log(this);


function chai() {
    let userName = 'Sahil'
    // console.log(this.userName);
}

// chai()

const chai2 = () => {
    let userName = 'Sahil'
    console.log(this);
}

// chai2()

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(8,9));

const addOne = (num1) => num1 + 1 // Implicit Function/

// console.log(addOne(3));

const obj = () => ({userName: "Sahil"})

console.log(obj());

