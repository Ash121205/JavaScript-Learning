//reduce

//reduce is a function that takes an array and reduces it to a single value. It takes a callback function and an initial value. The callback function takes an accumulator and the current value of the array and returns a new value for the accumulator. The initial value is the initial value of the accumulator.

//reduce is a very powerful function that can be used to solve a wide variety of problems. It is a very flexible function that can be used in many different ways.

const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log('acc:', acc, 'currval:', currval);
//     return acc + currval;
// },0)
const myTotal = myNums.reduce((acc, currval) => {
//   console.log("acc:", acc, "currval:", currval)
  return acc + currval
}, 0)

// console.log(myTotal)

const shoppingCart = [
  { name: "apples", price: 2 },
  { name: "oranges", price: 3 },
  { name: "bananas", price: 1 },
]


const total = shoppingCart.reduce( (acc, item) => acc + item.price,0)

console.log(total)