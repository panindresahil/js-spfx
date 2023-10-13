marvelHereos = ['Thor', 'Iron Man', 'Hulk', 'Spider Man', 'Panther']

dcHeroes = ['Bat Man', 'Super Man', 'Aqua Man', 'Flash']

// marvelHereos.push(dcHeroes)
// marvelHereos.pop()

// console.log(marvelHereos);

const allHeroes = marvelHereos.concat(dcHeroes)
// console.log(allHeroes);

const allNewHeroes = [...marvelHereos, ...dcHeroes] // Spread Operator

// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5], 6, [7, [8, 9], 10]]

const realAnotherArray = anotherArray.flat(Infinity)

// console.log(realAnotherArray);

console.log(Array.isArray('Sahil'));

console.log(Array.from('Sahil'));

console.log(Array.from({name: 'Sahil'}));

let score = 100

let score2 = 200

let score3 = 300

console.log(Array.of(score, score2, score3))


