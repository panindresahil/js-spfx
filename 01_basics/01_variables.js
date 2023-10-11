const accountId = 1068854
let accountEmail = 'Sahil.106833854@ltimindtree.com'
var accountPassword = '8879827958@Dubai'
accountCity = 'Mumbai'
let accountState;

// accountId = 2 'Const Variables cannot be reassigned'

/*
Prefer not to use var because of issue in block scope and fuctional scope
*/

accountEmail = 'Sahil.Panindre@ltimindtree.com'
accountPassword = '8879827958@bali'
accountCity = 'Pune'

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])