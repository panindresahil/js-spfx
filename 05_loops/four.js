// For In - Loop

const myObj = {
    js: 'Javascript',
    py: 'Python',
    cpp: 'C++'
}

for (const key in myObj) {
    console.log(`${key} is shortcut for ${myObj[key]}`);
}

const languages = ['js', 'sql', 'c', 'c++']

for (const key in languages) {
    console.log(languages[key]);
}