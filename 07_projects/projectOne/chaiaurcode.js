const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log(buttons);

buttons.forEach((b) => {
    // console.log(b);
    b.addEventListener('click', (e) => {
        // console.log('Clicked');
        // console.log(e.target);
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id
                break;
            case "white":
                body.style.backgroundColor = e.target.id
                break;
            case "blue":
                body.style.backgroundColor = e.target.id
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;
            default:
                break;
        }
    })
})