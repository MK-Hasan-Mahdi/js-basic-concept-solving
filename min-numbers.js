var firstNumber = 40;
var secondNumber = 38;
var thirdNumber = 36;

function smallestNumber(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}

var smNumber = smallestNumber(firstNumber, secondNumber, thirdNumber);
// var smNumber = smallestNumber(2023, 1458, 8546);
console.log('small number by function:', smNumber);

var sNumber = Math.min(firstNumber, secondNumber, thirdNumber);
console.log('smallest number by math method:', sNumber);