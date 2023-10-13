const myArr = [1,2,3,4,5,6, true, 'Sahil', false]

const  myHeroes = ['Iron Man', 'Thor', 'Hulk', 'Cap']

const arr = new Array(1,2,3,4,5,6)

// console.log(arr[0]);

// ------------------- Methods --------------------

myArr.push('Iron Man') // Add Elements at the end.
myArr.push('Hawk Eye')
// console.log(myArr);
myArr.pop() // Remove elements from the end.
// console.log(myArr);

arr.unshift(10) // Add an element at the start of the array.

// console.log(arr);

arr.shift() // Removes an element at the start of the array.

// console.log(arr);

// console.log(myHeroes.includes('Thor'));

// console.log(myHeroes.indexOf('Barton'));

console.log(arr.slice(1, 4)); // A part of Data from an array specified at the range.
console.log(arr);

console.log(arr.splice(1, 4));
console.log(arr);


