// Immediately Invoked Function Expression (IIFE)

// IIFE is a function that is executed immediately after it is created.

(function chai() {
    console.log("DB connected")
}) ();

( (name) => {
    console.log(`DB connected two ${name}`)
} )("ashesh")



