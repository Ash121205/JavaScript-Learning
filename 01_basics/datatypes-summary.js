// Primitive Data Types

// 7 types : String, Number, Boolean, Undefined, Null, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherid = Symbol('123');

// console.log(id === anotherid); // false

const bigNumber = 1234567890123456789012345678901234567890n;


// Reference (non-primitive) Data Types

// 3 types : Object, Array, Functions

const heros = ["nagraaj", "shaktiman", "doga"]

let myObj={
    name: "ashesh",
    age: 22,
}

const myFunction = function() {
    console.log("hello")
}

// console.log(typeof heros);


// *******************************************

// stack(primitive), heap(non-primitive)


let myYoutubeName = "ashesh"

let anothername = "chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);

let user = {
    name: "ashesh",
    email: "ash@as.cap"
}
let user2 = user

user2.email = "a@g.com"

console.log(user.email);
console.log(user2.email);

