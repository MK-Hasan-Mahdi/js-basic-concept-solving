let computerPrice = 165000;
let fridgePrice = 75000;
let phonePrice = 250000;

// compare 3 by if else
if (computerPrice > fridgePrice && computerPrice > phonePrice) {
    console.log('computer is bigger:', computerPrice);
}
else if (fridgePrice > computerPrice && fridgePrice > phonePrice) {
    console.log('fridge is bigger:', fridgePrice);
}
else {
    console.log('phone is bigger:', phonePrice);
}

// math method compare 3
var maxPrice = Math.max(computerPrice, fridgePrice, phonePrice);
console.log('shobchaite beshi price:', maxPrice);


// largest price find by function 
function largestPrice(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}

var lPrice = largestPrice(computerPrice, fridgePrice, phonePrice);
console.log('largest price by function:', lPrice);