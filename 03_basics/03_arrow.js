const user = {
    username: 'batman',
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} says hello`)
        // console.log(this)
    }
}

// user.welcomeMessage // batman says hello
// user.username = "sri"

// user.welcomeMessage() // batman says hello

//console.log(this)

// function chai() {
//     let username = "ashesh"
//     console.log(this.username)
// }

// chai() 


// const chai = function() {
//     let username = "ashesh"
//     console.log(this.username)
// }

// chai() // undefined

const chai = () => {
    let username = "ashesh"
    console.log(this.username)  
}

// chai() // undefined

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => ({username: "Ashesh"}) 



// console.log(addTwo(10, 20)) // 30   



