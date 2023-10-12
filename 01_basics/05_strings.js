const name = 'Sahil'
const repoCount = 12

console.log(`Hello, my name is ${name} and I have total ${repoCount} github repositeries.`);

const nameId = new String('pxnindresxhil')

console.log(nameId[1]);

console.log(nameId.length);

console.log(nameId.toUpperCase());

console.log(nameId.charAt(3));

console.log(nameId.includes('w'));

console.log(nameId.indexOf('x'));

console.log(nameId.substring(0, 5));

const newString = "  Sahil   "
console.log(newString);
console.log(newString.length);
console.log(newString.trim().length);

const url = 'https://sahil.com/Sahil%20Panindre'

const newUrl = url.replace('%20', '-')

console.log(newUrl);

const strArr = 'Sahil-Panindre-12-LTIM'

console.log(strArr.split('-'));