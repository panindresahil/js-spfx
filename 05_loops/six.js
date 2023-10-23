// const coding = ['Js', 'Python', 'C', 'Java', 'Power Automate', 'Power BI']

// coding.forEach((item) => {
//     console.log(item);
// })

// Map, Filter, Reduce

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const values = myNums.filter((num) => num % 2 == 0)

// const values2 = myNums.filter((num) => {
//     return num % 2 == 0
// })

// console.log(values);
// console.log(values2);

// Filter with FOR EACH

// const newNums = []
// myNums.forEach((num) => {
//     if (num % 2 == 0) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter((book) => {
    return (book.genre === 'History' && book.publish >= 1995)
})

console.log(userBooks);