const names  = ['Sahil', 'Manish', 'Monuag', 'Jagruti']
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

const user = {
    name: 'Sahil',
    age: 24,
    profession: 'Enginner'
}

for (let i = 0; i < Object.keys(user).length; i++) {
    console.log(`${Object.keys(user)[i]} : ${user[Object.keys(user)[i]]}`);
}

// Break, Continue

