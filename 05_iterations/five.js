const coding = ['js', 'cpp', 'py', 'rb', 'swift']

coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach( (item) => {
    // console.log(item);
} )

function printMe(item) {
    // console.log(item);
}

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(`item is ${item} and index is ${index} and arr is ${arr}`);
// })

const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    }
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
})

