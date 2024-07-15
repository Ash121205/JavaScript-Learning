// singleton
// Object.create => constructor method

// OBJECT LITERALS

const mySym = Symbol("key1")

const jsUser = {
  name: "Ashesh", // name is also percieved as a string,
  "full name": "Ashesh Karan", // "full name" is a string, so it should be in quotes
  age: 18,
  location: "Jaipur",
  email: "ashesh@google.com",
  [mySym]: "key1",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(typeof jsUser[mySym]) // symbol
// jsUser.email = "ashesh.openai.com"

// Object.freeze(jsUser)
// jsUser.email = "ashesh@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello JS user")
}
jsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
