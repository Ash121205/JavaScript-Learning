// var c = 300
let a = 300

if(true) {
    let a = 10
    const b = 20
    // console.log("Inside block: ", a)
}

// console.log(a)
// console.log(b)
// console.log(c) // 30
// c is accessible outside the block because it is declared using var\


function one() {
    const username = "ashesh"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()

if(true) {
    const username = "ashesh"
    if(true) {
        const website = " youtube"
        // console.log(username + website)
    }

    // console.log(website) // ReferenceError: website is not defined
}

// console.log(username) // ReferenceError: username is not defined


// ++++++++++++++++++++++++++++++++++++++++ointeresting++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(value) {
    return value + 1
}


addtwo(5) // TypeError: addtwo is not a function
const addtwo = function(num) {
    return num + 2
}

