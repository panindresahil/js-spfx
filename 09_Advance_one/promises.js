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

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({
                userName: "Javascript",
                password: "123"
            })   
        } else {
            reject({
                error: "ERROR: JS went wrong"
            })
        }
    }, 1000)
})

consumePromiseFive = async () => {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

const getAllUsers = async () => {
    try {
        const response = await fetch('https://api.github.com/users/panindresahil')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUsers()

fetch('https://api.github.com/users/panindresahil').then(
    (res) => {
        return res.json()
    }
).then((data) => {
    console.log(data);
})
.catch(
    (err) => {
        console.log(err);
    }
)