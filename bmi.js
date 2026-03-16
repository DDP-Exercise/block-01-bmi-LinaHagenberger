"use strict";

let bmr, bmi, normal, danger;

let firstName = prompt("First name:");
let lastName = prompt("Last name:");
let age = Number(prompt("Age in years:"));
let height = Number(prompt("Height in cm:"));
let weight = Number(prompt("Weight in kg:"));

let gender = prompt("Gender (male/female):");
while (gender !== "female" && gender !== "male") {
    gender = prompt("Wrong input! Are you male or female?")
}

if (gender === "female") {
    bmr = 655 + (10 * weight) + (2 * height) - (6 * age);
} else {
    bmr = 66 + (14 * weight) + (5 * height) - (7 * age);
}

bmi = (10000 * weight) / (height * height);

if (bmi >= 18 && bmi <= 25) {
    normal = "Yes";
    danger = "No";
} else if (bmi < 16 || bmi >= 30) {
    normal = "No";
    danger = "Yes";
} else {
    normal = "No";
    danger = "No";
}


const LINE = "---------------------------------------------";

console.log(LINE);
console.log("Name:\t\t\t\t\t " + lastName.toUpperCase() + ", " + firstName);
console.log(LINE);
console.log("Age:\t\t\t\t\t " + age + " Years");
console.log("Height:\t\t\t\t\t " + (height/100) + " m");
console.log("Weight:\t\t\t\t\t " + weight + " kg");
console.log("Basal Metabolic Rate:\t " + bmr + " kcal");
console.log("Body Mass Index:\t\t " + bmi);
console.log("Normal Weight:\t\t\t " + normal);
console.log("Danger:\t\t\t\t\t " + danger);
console.log(LINE);