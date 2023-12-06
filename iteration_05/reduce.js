const myArray = [1,2,3,4,5,6,7,8,9,10];
const myNewArray = myArray.reduce( ( acc, curval)=> acc+curval,0)
// console.log(myNewArray);

// Turn an array of numbers into a long string of all those numbers.
const myAnotherArray = myArray.map( (item) => item.toString()).reduce( (sum, item)=> sum+item,0)
// console.log(myAnotherArray);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const sumPrice = shoppingCart.reduce( ( sum,item)=> sum + item.price ,0 )
// console.log(sumPrice);

//Turn an array of voter objects into a count of how many people voted
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const totalVoters = voters.filter( (item )=> item.voted == true).reduce( (sum,item)=> sum + item.voted,0)
// console.log(totalVoters);

//Given an array of arrays, flatten them into a single array
const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const newArr = arrays.flat();
console.log(newArr)