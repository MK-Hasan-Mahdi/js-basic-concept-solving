function duplicateFind(arrname) {
    let unique = [];
    // for (let i = 0; i < arrname.length; i++) {
    //     let element = arrname[i];
    //     console.log(element);
    // }

    for (const element of arrname) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }

    return unique;
}

const students = ['Shagor', 'Tufan', 'Yousuf', 'Wasim', 'Umar', 'Ali', 'Tufan', 'Yousuf', 'Umar', 'Uthman', 'Ali'];
let output = duplicateFind(students);
console.log(output);