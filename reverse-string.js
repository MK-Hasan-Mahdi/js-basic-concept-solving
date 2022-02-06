// eita 1st way 
/*let ektaString = 'Hello, how are you?';

function reverseKoro(text) {
    let reverse = '';
    for (const letter of text) {
        // console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}


let reversed = reverseKoro(ektaString);
console.log(reversed);
*/


// eita 2nd way

const secondString = "Indonesia";

function reverseStr(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
        // console.log(reversed)
    }
    return reversed;
}


let revString = reverseStr(secondString);
console.log(revString);