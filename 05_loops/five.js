// For Each - Loop

const coding = ['Js', 'Python', 'C', 'Power Automate']

coding.forEach((item) => {
    console.log(`Length of ${item} is ${item.length}`);
})

function printeMe(item) {
    console.log(item);
}

coding.forEach(printeMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})