
const myArray = [2,4,6,8,9];

myArray.forEach( function(value) {
    // console.log(value);

})

// we cant store forEach loop in any other variable. it gives undefined 
const newArray = myArray.forEach( (value) => { return(value*10)})
// console.log(newArray)

myArray.forEach( (item)=>{
    // console.log(item);
})

function print(value,index,arr){
    // console.log(value,index,arr)
}

// myArray.forEach(print);

const language = [
    {
        shortName : "js",
        fullName : "javascript"
    },
    {
        shortName : "py",
        fullName : "python"
    },
    {
        shortName : "c++",
        fullName : "cpp"
    },
    {
        shortName : "rb",
        fullName : "ruby"
    }
]

language.forEach( (key) => {
    // console.log(key.shortName);
})


// forEach loop does not work for objects
let myObj = {
    name:"preeti",
    age:20,
    lastName:"pal"
}

// myObj.forEach( (key)=>{
//     // console.log(Object.key);
// })

// Object.keys(myObj).forEach((key)=>{

//     console.log(key)
//     console.log(myObj[key])
// })

// let arr = [1,2,3,4,5,9]

// arr.forEach( function(value){
//     console.log(value);
// })

const obj = {
    fname:'preeti',
    age:20,
    clg:'chouksey'
}


// Object.keys gives you an array of the keys in that object.
// where as Object.entries returns an array of arrays containing key value pair.

// Object.keys(obj).forEach( function(value){
//     console.log(`${value} : ${obj[value]}`);
//     // console.log(obj[value])
// })

// Object.entries(obj).forEach( function(value){
//     // console.log(`${value} : ${obj[value]}`);
//     console.log(value)
// })


