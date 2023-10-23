// For of - Loop - Array Specific Loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num * 2);
}

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')

// for (const [key, value] of map) {
//     console.log(`${key} : ${value}`);
// }

const myObj = {
    game1: 'NFS',
    game2: 'Mario'
}

for (const [key, value] of myObj) {
    console.log(key, value);
}