// function calculateTotal(price, taxRate, shippingcost){
//     return price + (price*taxRate ) +shippingcost
// }

// const total = calculateTotal(100, 0.2, 20)
const total = calculateTotal(100, 0.2, 200)

// console.log(total)

function curryCalculateTotal (price){
    return function (taxRate) {
        return function(shippingcost){
            return price + (price*taxRate ) +shippingcost
        }
    }
}

const calculateWithTax = curryCalculateTotal(100)

var calculateWithShipping = calculateWithTax(0.2)


// const totalCurried = calculateWithShipping(20)
// const totalCurried = calculateWithShipping(40)
var totalCurried = calculateWithShipping(100)
var totalCurried2 = calculateWithShipping(200)
var totalCurried3 = calculateWithShipping(2300)

console.log(totalCurried2)