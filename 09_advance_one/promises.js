const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  //DB calls

  setTimeout(function () {
    console.log("Async task completed")
    resolve()
  }, 1000)
})

promiseOne.then(function () {
  console.log("promise consumed")
})

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2")
    resolve()
  })
}).then(function () {
  console.log("Async 2 resolve")
})

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" })
  }, 1000)
})

promiseThree.then(function (user) {
  console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
    let error = true
    if(!error) {
        resolve({username: "Ashesh", password: "123"})
    }else reject("Error: something went wrong")
  }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error) {
    console.log(error)
}).finally(function() {
    console.log("the promise is either resolved or rejected")
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "123"})
        }else reject("Error: JS went wrong")
      }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
        
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
        
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary").then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error);
})