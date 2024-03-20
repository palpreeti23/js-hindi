// const promiseOne = new Promise(function(resolve,reject){
//     //db connect,tasks
//     setTimeout(function(){
//         console.log("its working though");
//         resolve();
//     },1000);

// })

// promiseOne.then(function(){
//     console.log('does this work');
// })

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("second promise");
//         resolve();
//     }, 1000);
// }).then(()=>{
//     console.log('second promise resolved')
// })


// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({userName : "palpreeti", passward:"0523"})
//     }, 2000);
    
// })

// promiseThree.then((user)=>{
//     console.log(user)
//     return user.userName;
// }).then((name)=>{
// console.log(name)
// })

// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({userName : "piyapal34", passward:"6575"})
//         }
//         else{
//             reject("ERROR: something went wrong !!")
//         }
//     }, 2000);
// })


// // for multiple then's we can use chaining 
// //if we return something in the uppr then function then it will be taken by the next .then function 

// promiseFour
// .then((userInfo)=>{
//     console.log(userInfo);
//     return userInfo.passward;
// })
// .then((passcode)=>{
//     console.log(passcode);
// })
// .catch((err)=>{
// console.log(err);
// })
// .finally(()=>{
//     //finally is like a default ...
//     //it will be executed either ways 
//     console.log("the problem is either resolved or rejected")
// })

// const promiseFive = new Promise(function (resolve, reject){
//     setTimeout(function() {
//         let error = false;
//         if(!error){
//             resolve({userName : "javascript", passward:"09809"})
//         }
//         else{
//             reject("ERROR: js went wrong !!")
//         }
//     }, 1000);
// });

// // async function consumePromiseFive(){
// //     const response = await promiseFive
// //     console.log(response);
// // }

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//        console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()

// async function newFetch(){
//    try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response)
//     let data = await response.json();
//     console.log(data)
//    } catch (error) {
//     console.log(error)
//    }
// }

// newFetch()

 

 fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>{
// return data.json();
// })
.then((response) => {
    console.log(response);

}).catch((error)=>{
    console.log(error)
})
// console.log('hii preeti')