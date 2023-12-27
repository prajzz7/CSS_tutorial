function outerFunction() {
    

    
        let num = 10;
    
    return function innerFunction(){
        let num2 = 20;
        console.log('num1',num,'num2',num2)
    }
    
}

const func = outerFunction()
console.log(func())

