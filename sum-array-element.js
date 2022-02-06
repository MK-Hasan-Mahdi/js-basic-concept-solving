
// const ageFamilymember = [68, 45, 42, 40, 36, 33];
// let sumElement = 0;
// for (let m = 0; m < ageFamilymember.length; m++) {
//     let element = ageFamilymember[m];
//     sumElement = sumElement + element;
//     console.log('eguli element:', element, 'eguli index:', m);
// }
// console.log('element er jogfol:', sumElement);

function sumArray(numbers) {
    let sumAelement = 0;
    for (let i = 0; i < numbers.length; i++) {
        let elementArray = numbers[i];
        sumAelement = sumAelement + elementArray;
    }
    return sumAelement;
}

let totalElement = sumArray([10, 5, 10]);
console.log(totalElement);