// for of

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world"

// for (const letter of greetings) {
//     console.log(`each char is ${letter}`);
// }

//maps

const map = new Map()

map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")

// console.log(map);

for (const [key, value] of map) {
    console.log(`key is ${key} and value is ${value}`);
}

const myObject = {
    "game1" : "NFS",
    "game2" : "FIFA",
}

for (const [key, value] of Object.entries(myObject)) {
    console.log(`key is ${key} and value is ${value}`);
}