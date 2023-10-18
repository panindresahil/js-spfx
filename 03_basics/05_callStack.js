// Javascript Execution Context

// {} -> Global Execution Context (Referes This variable)

// Function Execution Context

// Eval Execution Context

// {} (code) -> Memory Creation Phase -> Execution Phase


// ------------------------------- E.G. -----------------------------------

// let val1 = 2
// let val2 = 4

// function addNum(num1, num2) {
//     let total = num1 + num2
//     return total
// }

// let result = addNum(val1, val2)
// let result2 = addNum(8, 9)

// 1) Global Creation -> this

/*
2) Memory Phase
-> val1 - Undefined
-> val2 - Undefined
-> addNum - defination of function
-> result1 - undefined
-> result2 - undefined
*/

/*
3) Execution Phase
val1 -> 2, val2 -> 4
addNum -> [New Execution Phase]
*/
