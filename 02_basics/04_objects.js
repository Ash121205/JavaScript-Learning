// const tinderUser = new Object(); // Object constructor

const tinderUser = {}; // Object literal

tinderUser.id = "123abc"
tinderUser.name = "sri"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ashesh",
            lastname: "Karan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: 'c',
    4: "d",
}

// const obj3 = {obj1, obj2}
// console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({},obj1, obj2)

// console.log(obj3)


const obj3 = {...obj1, ...obj2}
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email: ""
    },
    {
        id: 2,
        email: ""
    },
    {
        id: 3,
        email: ""
    }
]

users[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ashesh",
}

const {courseInstructor: instructor} = course;

// console.log(courseInstructor) // ashesh
// console.log(instructor) // ashesh

// {
//     "name": "Ashesh", 
//     "coursename": "js in hindi",
//     "price": "free",
// }


[
    {},
    {},
    {}
]

