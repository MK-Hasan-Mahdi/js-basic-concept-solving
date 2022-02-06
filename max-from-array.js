
function largestArray(numbers) {
    var largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;

}

var simpleArray = [72, 12, 18, 21, 36, 22, 34, 16, 4];
var findlElement = largestArray(simpleArray);
console.log(findlElement);