let score = 33
console.log(typeof score);
let valueInString = String(score)
console.log(isNaN(valueInString));
console.log(typeof valueInString);

/* 
"33" => 33
"33abc" => NaN (Not a Number)
true <=> 1 || false <=> 0
"" => false || "sahil" => true
*/

console.log(typeof String(true));