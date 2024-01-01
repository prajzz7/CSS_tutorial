// var a = null
// var a='a';
// console.log(typeof a)
// console.log(1==='1')

// var . let .const 

// function fucn() {
//     const num3 = 1;
//     num3 = 2
//     let num2 = 2
//     if(true){
//         var num = 1
//         // let num2=2;
//         console.log(num2)
//         // console.log(num)
//     }
//     console.log(num2)
//     // console.log(num)
// }

// fucn()

// function func(name='Tech'){
//     console.log(name)
// }

// func()


//Closure

// function outer(){
//     var a = 10;
//     return function (){
//         var b = 20;
//         console.log(a,b)
//     }
// }

// outer()()


const obj = {
    key: 'val',
    name: 'Techpaathshala',
    func: function () {
        console.log('I am a function')
    }
}

obj.func()

