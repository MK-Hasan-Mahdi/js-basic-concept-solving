// 1. variable type
var textSome = "Javascript";
var rollNum = 21;
var positive = true;

// 2. let, const variable
let age = 26;
const myName = "Hasan Kamrul";
age = 34;
// let myName = "hasan"; myName variable already declared by const

// 3. operator workings
let tomarNumber = 85;
let amarNumber = 55;
let totalNumberAdd = tomarNumber + amarNumber;
console.log(totalNumberAdd);
let totalNumberMul = tomarNumber * amarNumber;
console.log(totalNumberMul);
let accounting = 60;
let businessMath = 78;
let avgTwoSub = (accounting + businessMath) / 2;
console.log(avgTwoSub);
let calcVagshesh = 78 % 2;
console.log(calcVagshesh);


// 4. comparison workings
let firstInvest = 40;
let secondInvest = 70;
let bigInvest = secondInvest > firstInvest;
console.log(bigInvest);

if (firstInvest < secondInvest) {
    console.log("tumi second bar valo invest korso, abar koiro..");
}
else if (secondInvest == firstInvest) {
    console.log("2bar er invest ki shoman invest?")
}
// else if (firstInvest != secondInvest) {
//     console.log("Tomar protibar same invest kora uchit.")
// }
else if (secondInvest <= firstInvest) {
    console.log("Tumi second bar o kom invest korso prothom bar er chaite!")
}
else if (secondInvest >= firstInvest) {
    console.log("Wow! tomar invest thik ase");    //eita hoi nai
}

// 5. logical opertaor workings
let yourMoney = true;
let yourEducation = false;

let theyNeedMoney = (yourMoney || yourEducation);
console.log(theyNeedMoney);

let preResult = 80;
let labResult = 70;
let finalResult = (preResult > labResult && labResult < preResult);
console.log(finalResult);

// 6. if else condition related workings
let tomarLand = 20;
let tomarTaka = 99;
if (tomarLand > 10 && tomarTaka >= 100) {
    console.log("Taratari bari banao");
}
else if (tomarLand >= 30 && tomarTaka <= 99) {
    console.log("Tomar land ase kintu tomar taka nai, so tumi taka banao");
}
else {
    console.log("Tumi prithibite - kaida kore beche thako.");
}


// 7. while loop using for find odd numbers
let nums = 7;
while (nums <= 19) {
    // nums % 2 != 0;
    // console.log(nums);
    nums = nums + 2;
    console.log(nums);
}

// 8. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 


// 9. array thake loop diye element show korte hobe

const classSevenStudents = ["Mohammad", "Yousuf", "Musa", "Khalid", "Salahuddin"];
for (let s = 0; s < classSevenStudents.length; s++) {
    let studentSeven = classSevenStudents[s];
    console.log(studentSeven);
}

const classTenStus = ["Abbas Uddin", "Fazar Ali", "Amanat Shah", "Pakija", "Bulbul Mirja"];
for (const classTenStu of classTenStus) {
    console.log(classTenStu);
}

// 10. find largest from 80, from an array

function largestSpecificElement(arr) {
    let greaterEighty = [];
    for (let i = 0; i < arr.length; i++) {
        let numElement = arr[i];
        if (numElement > 80) {
            greaterEighty.push(numElement);
        }
    }
    return greaterEighty;
}
const numArr = [40, 75, 33, 22, 80, 36, 90, 10, 99, 100, 86, 36, 94];
const numArr2 = [80, 45, 90, 55, 87, 89, 88];

const largElementArr = largestSpecificElement(numArr2);
console.log(largElementArr);

// 11. three numbers multiplication return 
function mulThreeNums(a, b, c) {
    return a * b * c;
    // return mulResult;
}
var nummulti = mulThreeNums(2, 2, 6);
console.log(nummulti);

// 12. object 
const myusedPhone = {
    compName: "Citycell",
    model: "mone_nai",
    color: "silver"
};
myusedPhone.compName = "Nokia";
console.log(myusedPhone);