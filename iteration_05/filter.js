
const myArray = [1,2,3,4,5,6,7,8,9,10];

const newArray = myArray.filter( (item) => item > 4)
// console.log(newArray)

myArray.forEach(element => {
    if(element> 4){
        // console.log(element)
    }
});

for (const num of myArray) {
    if(num >= 4){
        // console.log(num);
    }
}
for (const num in myArray) {
    if(num >= 4){
        // console.log(num);
    }
}


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const bookDb = books.filter( (bk) => bk.title == 'Book Six')
// const bookDb = books.filter( (bk)=> bk.genre == 'Non-Fiction' && bk.edition > 2000 )
    // const bookDb = books.filter((bk)=> bk.publish >= 2000)
    // const bookDb = books.filter((bk)=> bk.edition < 2000);

//   console.log(bookDb)


const arr = ["preeti","pri","neha","sakshi","ramkumar","rajbaipal","aniruddha"];

const newArr = arr.filter((key)=> {return key.length > 6})
// console.log(newArr)