const array = [1,2,3,4,5]

// const new_arr = array.map(function(num){
//     return num*2
// })

// const new_arr = array.filter(function(num){
//     return num>3
// })

// const num = array.reduce(function(accumulator,num){
//     return accumulator + num
// },0)

// console.log(num)

// console.log(func(1))
// function func(num) {
//     return num
// }
// console.log(func(1))

// const func = (num) => {
//     return num
// }



// const func = num =>  num 



//SPREAD & REST
// const obj = {
//     name: 'Tech',
//     age: '12'
// }

// const new_obj = {
//     has: 'none',
//     ...obj
// }

// console.log(new_obj)


// function numbers (...num) {
//     console.log(num)
// }

// numbers(1,2,3,6,34,7676,3434)
// var data= null
// const myPromise = new Promise((resolve,reject)=>{
//     if(true){
//         resolve('Data fetch successful')
//     }
//     else{
//         reject('Data didnt come')
//     }
// })

// myPromise
//     .then((response)=>console.log('response:',response))
//     .catch((error)=> console.log('error:',error))


// ASYNC AWAIT
// var response;
// async function func(){
//     response = await myPromise
//     return response
// }
// func().then(result => console.log(result))

// REST 

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response=> response.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.log('error',error))


async function func(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
}
func()



    // JSON -> {  
    //     "first": true,  
    //     "second": false  
    //     }  

    //     Javascript Object -> {  
    //         first: true,  
    //         second: false  
    //         }  