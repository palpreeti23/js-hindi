// any hard core value like PI can not get changed coz its not writable

// show the value of PI of math module
// const desc = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(desc)

// we can make our own object property descriptor

const newCourse ={
    coursename : "javasvript",
    price : 340,
    isAvail : true,

    newcourse : function(){
        console.log("no new courses available right at the point..!!")
    }
}

console.log(Object.getOwnPropertyDescriptor(newCourse,'coursename'))
// we can change our object's descriptions

Object.defineProperty(newCourse, 'coursename', {

    writable:false,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(newCourse,'coursename'));

//for of loops are better for objects

 for (const [key, value] of Object.entries(newCourse)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`)
    }
   
 }