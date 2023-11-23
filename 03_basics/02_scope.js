// console.log(a,b,c);

// {} // Scope

var c = 300
let a = 40
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log('inner', a);
}

console.log(a);
// console.log(b);
console.log(c);


function one() {
    const userName = 'Sahil'

    function two() {
        const website = 'youtube'
        console.log(userName);
    }
    console.log(website);

    two()
}

one()

if (true) {
    const userName = 'Sahil'
    if (true) {
        const website = 'youtube'
        // console.log(userName + ' ' + website)
    }
    // console.log(website);
}
// console.log(userName);

// ******************************* Interesting ************************************
// console.log(addone(3)); // In this case funtion can be accessed any where.

function addone(num) {
    return num + 1
}

// console.log(addTwo(3)); // In this case function cannot be accessed.

const addTwo = function(num) {
    return num + 2
}
