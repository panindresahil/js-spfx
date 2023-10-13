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

console.log(realAnotherArray);
