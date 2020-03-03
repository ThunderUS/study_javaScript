"use strict";

function myFirstApp(name, age) {
    alert(`Hi my name ${name} and it's my first program`);
    showSkills();

    function showSkills() {
        let skills = ['html', 'css', 'js'];
        for (let i = 0; i < skills.length; i++) {
            console.log(`i know ${skills[i]}`);
        }
    }

    chekAge();

    function chekAge() {
        if (age > 18) {
            console.log("You have good chance to be web programmer");
        }
         else {
            console.log("wait a litel");
        }
    }

    function calcPow(num) {
        return num * num;
    }

    console.log(calcPow(18));
}

myFirstApp("Anton",27);