// Generate random Color

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor((Math.random() * 16))]
    }
    return color
}
let inetervalId;

const startChangingColor = () => {
    if(!inetervalId) {
        inetervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = () => {
    clearInterval(inetervalId)
    inetervalId = null
    document.body.style.backgroundColor = '#212121'
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)