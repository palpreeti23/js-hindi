const myArray = [1,2,3,4,5,6,7,8,9,10];
// newArray = myArray.map( (item)=> item*10)
// console.log(newArray);
// myArray.forEach( (item)=> )

const newArr = myArray
               .map( (item) => item*10)
               .map( (item) => item +5 )
               .filter((item)=> item >70)
                        
// console.log(newArr)


const arr = ["preeti","pri","neha","sakshi","ramkumar","rajbaipal","aniruddha"];

  const newArr2 = arr.map( (item) => {

   const firstAlphabet =  item.charAt(0).toUpperCase();
   const rest = item.slice(1).toLowerCase();
   return firstAlphabet+rest;

  }
  )
//   console.log(newArr2)

  const myArray2 = [{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}
];

const newMyArray = myArray2.map( (item) => item.name)
// console.log(newMyArray)

const myAnotherArray = myArray2.filter( (item)=> item.age > 20).map( (item) => item.name)
// console.log(`${myAnotherArray} can go to the matrix `)
console.log(`${myAnotherArray} can go to the matrix`)