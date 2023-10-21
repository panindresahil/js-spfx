const userEmail = 'panindresahil@gmail.com'
// const userEmail = ''
// const userEmail = {}

if (userEmail) {
    console.log('Got User Email');
} else {
    console.log("Don't have User Email");    
}


// ----------------- Truthy Values -------------

// [], {}, "0", 'false', true, "sds", " ", function(){}

// ----------------- Falsy Values  -------------

// false, 0, -0, BigInt 0n, "", null, Undefined, NaN

const arr = []

const obj = {}

if (arr.length === 0) {
    console.log('Empty Array');
}

if (Object.keys(obj).length === 0) {
    console.log('Empty Object');
}

// Nullish Coalescing Operator (??) : null undefined

let val1;

val1 = null ?? 10

console.log(val1);

// Ternary Operator

const iceTeaPrice = 100

iceTeaPrice > 80 ? console.log('Expensive') : console.log('Cheap')