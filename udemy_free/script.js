"use strict";
/* let myName = "Anton";

let bool = true;

let modal;

let obj = {
    dog: "pop",
    cat: " cat"
};

let arr = [1, 2, "sdt", false];
arr[0] = 2;

console.log(myName);

console.log(-4/0);
console.log("gggg"*9);

/* let answer = confirm("hy");
console.log(answer); */
/*let answer = prompt("How old are you", "");
console.log(answer); */

let answer = [],
    question = [
        "What is your name?",
        "what is your second name",
        "How old are you?"
    ];

for (let i = 0; i < question.length; i++) {
    answer[i] = prompt(question[i], "");
}

document.write(answer);