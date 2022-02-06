// function feet to inch convert
function feetToInch(feet) {
    let inch = feet * 12;
    return inch;
}
let tableFeet = 5;
let convertedInch = feetToInch(tableFeet);
console.log("Feet to Inch:", convertedInch);

function inchToFeet(inch) {
    let feet = inch / 12;
    return feet;
}
let doorInch = 180;
let convertedFeet = inchToFeet(doorInch);
console.log("Inch to Feet:", convertedFeet);

// function centimeter to meter convert
function centimeterToMeter(centi) {
    let meter = centi * 0.01;
    return meter;
}
let busCenti = 1000;
let convertedMeter = centimeterToMeter(busCenti);
console.log("Centimeter to Meter:", convertedMeter);



// function largest name string find out from array
function bestFriend(arrnam) {
    let longestName = "";
    for (let i = 0; i < arrnam.length; i++) {
        let element = arrnam[i];
        // console.log(element);
        if (element.length > longestName.length) {
            longestName = element;
        }
    }
    return longestName;
}
const nameofFriend = ["Mohammad Ahmed", "Umar", "Amit Ahmed Mridha Tonmoy", "Ali", "Khalid", "Salahuddin", "Muaz"];
let giveFriendName = bestFriend(nameofFriend);
console.log(giveFriendName);

// function of positive number push in array and after negative number stop loop
function positiveNumberFind(arrnam) {
    let onlyPositiveNumber = [];
    for (let i = 0; i < arrnam.length; i++) {
        let element = arrnam[i];
        if (element >= 0) {
            onlyPositiveNumber.push(element);
        }
        else {
            continue;
        }              /*evabe continue dile negative number ta overstep kore next positive number gulo soho show kore array te*/
        // else if (element < 0) {
        //     return onlyPositiveNumber;
        // }           //evabe else if korle negative number pawar por ar overstep kore onno number show kore na.
    }
    return onlyPositiveNumber;
}
const posNegArr = [2, 5, 8, 7, -3, 4, 1, 6];
let numCheck = positiveNumberFind(posNegArr);
console.log(numCheck);



// books papper requirement
function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
    // if (typeof firstBookCopy, secondBookCopy, thirdBookCopy != "number") { 
    //     return "Please give quantity in number";
    // } evabe hobe na, variable name aleda aleda dite hobe

    let firstBookPerCopyPageNeed = 100;
    let secondBookPerCopyPageNeed = 200;
    let thirdBookPerCopyPageNeed = 300;

    let totalFirstBookPageNeed = firstBookCopy * firstBookPerCopyPageNeed;
    let totalSecondBookPageNeed = secondBookCopy * secondBookPerCopyPageNeed;
    let totalThirdBookPageNeed = thirdBookCopy * thirdBookPerCopyPageNeed;

    let totalPaperRequiredAllBook = totalFirstBookPageNeed + totalSecondBookPageNeed + totalThirdBookPageNeed;

    return totalPaperRequiredAllBook;
}
let paperReq = paperRequirements(5, 2, 3);
console.log(paperReq);