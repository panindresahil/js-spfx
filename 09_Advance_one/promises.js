const promiseOne = new Promise((resolve, reject) => {
    //  Do an Async Task
    // DB Calls, Cryptography, Network
    setTimeout(() => {
        console.log('Async Task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log('Promise Consumed');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task 2');
        resolve()
    }, 1000)
}).then(() => {
    console.log('Async 2 Resolved');
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            userName: "Sahil",
            emali: "panindresahil@gmail.com"
        })
    }, 1000)
}).then((user) => {
    console.log(user);
})

const promiseFour = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            res({
                userName: "Atharva",
                password: "S@hil2910"
            })
        } else {
            rej({
                error: "Something went wrong"
            })
        }
    }, 2000)
})

promiseFour.then((u) => {
    console.log(u.userName);
}).catch((e) => {
    console.log(e.error);
}).finally(() => {
    console.log("The Promise is either resolved or rejected.");
})