const userEmail = "a@ashesh.ai"

if(userEmail){
    console.log("Email is present")
}else {
    console.log("Email is not present")
}

// falsy values // In JavaScript, a value is considered "falsy" if it is treated as false when encountered in a boolean context.
false, 0, -0, 0n, "", null, undefined, NaN

// truthy values // In JavaScript, a value is considered "truthy" if it is treated as true when encountered in a boolean context.
"0", " ", [], {}, function(){}, 'false'


const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}


// Nullish coalescing operator (??) : null undefined // The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // basically a safety check

// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20


console.log(val1)


// Ternary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")

