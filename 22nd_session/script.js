// Allowed variable names
// var variable_name;
// var var12;
// var $varName;


// Not Allowed variable names
// var var-name;
// var var@12;
// var 1var;
// var #varname;

// var a = 1;
// let b = 2;
// const c = 1;

// if(true){
//     var var_variable = 10; // var is functional scoped
//     let let_variable = 10; // let is block scoped
//     const const_variable = 10; //const is also block scoped

    
// }
// console.log(let_variable)


// var a =1; //can redeclare
// var a = 2;
// var a ="Tech";
// var b;
// console.log(a)

// let b = 1; //cannot redeclare
// b = 2;
// let e;
// console.log(b)

// const c = 1; //cannot redeclare
// c = 2; //Invalid statement, cannot reassign a const variable
// const d; //Invalid statement


//Hoisting



// if(true){
  
// console.log(a)
// let a = 'JS'
// }

// var result = add(1,4)
// console.log(result)

// function add (a,b=2){    //Regular function 
//     return a+b
// }



// console.log(func)
// var func = function (a,b){ //function expression
//     return a*b
// }
// console.log(func(5,2))



// function sum (a,b,c){
//     console.log(arguments) //argument object in every function
// }

// sum(1,2,3)


//Higher Order FUnction 
// function operateOnNumbers(a, operation){
//     return print(a)
// }

// const print = function(a){
//     return a
// }

// console.log(operateOnNumbers(5,print))
// console.log(operateOnNumbers(7,print))

var a = [4,1,2,3]
var new_arr = a.map(item=>item*2)
console.log(new_arr)
console.log(a.sort((a,b)=>a-b))

















