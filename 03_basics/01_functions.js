function sayMyName() {
    console.log('a')
    console.log('a')
    console.log('a')
    console.log('a')
    console.log('a')
    console.log('a')
}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2) {
    // let result = (number1 + number2)
    // console.log('This will run')
    // return result

    return number1 + number2
    // console.log('This will not run')
}

const result = addTwoNumbers(3, 5)

// console.log(result);

function loginUserMessage(username = "sri") {
    if(!username) {
        console.log('Please provide a username')
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Ashesh'))
// console.log(loginUserMessage()) 

function calculateCartPrice(val1, val2, ...num1){
    return num1;

}


console.log(calculateCartPrice(100, 200, 400, 2000)) 

const user = {
    username: "ashesh",
    price: 199
}

function handleObject(anyobj) {
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`)
}

// handleObject(user)

handleObject({
    username: "sri",
    price: 299
})

const myNewArr = [200, 400, 500, 6000]

function returnSecondValue(getArray) {
    getArray[1]
}

// console.log(returnSecondValue(myNewArr))
console.log(returnSecondValue([200, 400, 500, 6000]))

