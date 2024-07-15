// if

// const temperature = 41;
// if(temperature < 50) {
//     // code
//     console.log("less than 50")
// } else{
//     // code
//     console.log("greater than 50")
// }

// const score = 200

// if( score > 100) {
//     const power = "fly"
//     console.log(`User power is ${power}`)
// }

// const balance = 1000

// if (balance > 500) console.log("test")

// if (balance < 500) {
//   console.log("less than")
// }else if(balance > 500){
//   console.log("greater than")
// }else{
//     console.log("less than 1200")
// }


const userLoggedIn = true;

const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard ) {
    console.log("You can purchase")
}

if(userLoggedIn || loggedInFromGoogle || loggedInFromEmail ) {
    console.log("User logged in")
}

