// Reduce

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 10]

const total = myNums.reduce((acc, cv) => {
    // console.log(`acc: ${acc}, cv: ${cv}`);
    return acc + cv
}, 0)

console.log(total);

const shoppingCart = [
    {
        item: 'Milk',
        qty: 2,
        price: 10
    },
    {
        item: 'Fruits',
        qty: 5,
        price: 20
    },
    {
        item: 'Bread',
        qty: 2,
        price: 6
    }
]

const cartTotal = shoppingCart.reduce((acc, item) => {
    return acc + (item.qty * item.price)
}, 0)

console.log(cartTotal);