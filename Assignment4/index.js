"use strict";
// 1. Hello Variable. let greeting; // Assign "Hello, World!" to this variable and print it.
let greeting = "Hello World!";
console.log(greeting);
// 2. Basic Math. let num1, num2; // Assign integer values and perform arithmetic operations.
let num1 = 40;
let num2 = 15;
let Addition = num1 + num2;
let Diffrence = num1 - num2;
let Product = num1 * num2;
let Quotient = num1 / num2;
console.log(Addition); // 55
console.log(Diffrence); // 25
console.log(Product); // 600
console.log(Quotient); // 2.6666666666666665
// 3. Swaping Values. let p = 67, q = 49; // Swap these values without using a new variable.
let p = 67;
let q = 49;
//Before Swapping
console.log(p); // 67
console.log(q); // 49
// After Swapping
[p, q] = [q, p];
console.log(p); // 49
console.log(q); // 67
// 4. Type Annotation (TypeScript)let message: string; // Now try assigning a number to it and see what happens.
let message = 100;
console.log(message); // It is impossible so it gives Error
// 5. Modulus Operator. let num1, num2; // Use the modulus operator (%) to find the remainder.
let num7 = 70;
let num8 = 20;
let num9 = num7 % num8;
console.log(num9); // 10
// 6. Increment Challenge. let counter =93; // Increment this value by 1 in two different ways.
let counter = 93;
counter++;
console.log(counter); // 94
// 7. Logical Gates. let a = true, b = false, c = true, 
// Write expressions using these.Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a = true;
let b = false;
let c = true;
// AND
console.log(a && b); // false
console.log(b && c); // false
console.log(c && a); // true
// OR
console.log(a || b); // true
console.log(b || c); // true
console.log(c || a); // true
// NOT 
console.log(!a == b); // true
console.log(!b == c); // true 
console.log(!a == !c); // true
// 8. Compound Assignment Operators: . Compound Assignment: Instructions: Show examples of using compound assignment operators.
let myNum = 18;
myNum += 5;
myNum -= 5;
myNum *= 5;
myNum /= 5;
myNum %= 5;
console.log(myNum); // 3
// In TypeScript, a compound assignment operator is a shorthand way to update 
// the value of a variable using an operation. In each of these examples, the compound assignment operator (+=, -=, *=, /=)
// is used to update the value of mynum in a single step.
// 9. Even or Odd: Instructions: Write a program to check if a number is even or odd.
let num15 = 21;
let num16 = 10;
if (num15 % 2 == 0) {
    console.log(`${num15} is an even number`);
}
else {
    console.log(`${num15} is an Odd number`); // 21 is an Odd number
}
// Second Way to solve this Problem:
let result1 = num15 % 2 == 0 ? "Yes" : "No";
console.log(result1); // No
let result2 = num16 % 2 == 0 ? "Yes" : "No";
console.log(result2); // Yes
// 10. Voting Eligibility: Instructions: Check if a person is eligible to vote.
let currentYear = 2024;
let birthYear = 2009;
let eligibleAge = (currentYear - birthYear);
console.log(eligibleAge); // 15
if (eligibleAge >= 18) {
    console.log("The Person is eligible to Vote. Go and change the System.");
}
else {
    console.log("The Person is not eligible to Vote. Sit inside your House."); // The Person is not eligible to Vote. Sit inside your House.
}
// 11. Grading System: Instructions: Assign a grade based on a numerical score.
let score = 85;
let grade;
grade = score >= 80 ? "Your Grade is A. Congratulations!" :
    score >= 70 ? "Your Grade is B" :
        score >= 60 ? "Your Grade is C" :
            score >= 50 ? "Your Grade is D" :
                score >= 40 ? "Your Grade is E" : "Your Grade is F. Your are Fail";
console.log(grade); // Your Grade is A. Congratulations!
// 12. Max of Three: Instructions: Find the maximum of three numbers.
let x = -89;
let y = 200;
let z = 900;
if (x > y && x > z) {
    console.log(`${x} is the greatest number`);
}
else if (y > x && y > z) {
    console.log(`${y} is the gretest number`);
}
else {
    console.log(`${z} is the greatest number`); // Ans: 900 is teh greatest number
}
// 13. Leap Year Checker: Instructions: Check if a given year is a leap year.
let leapYear = 2024;
if (leapYear % 4 === 0 && leapYear % 100 !== 0 || leapYear % 400 === 0) {
    console.log(`${leapYear} It's a Leap Year`);
}
else {
    console.log("It's not a Leap Year"); // Ans: 2024 It's a Leap Year
}
// 14. Fahrenheit to Celsius Converter: Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let temperatureinCelcius;
let temperatureinFarenheite = 98;
temperatureinCelcius = (temperatureinFarenheite - 32) * 5 / 9;
console.log(`${temperatureinCelcius} This is the required Temperature in Celcius Degree`); // Ans: 36.666666666666664 This is the required Temperature in Celcius Degree
// 15. Positive, Negative, or Zero: Instructions: Check if a number is positive, negative, or zero.
let number = 25;
if (number > 0) {
    console.log(`${number} It is a Positive Number`);
}
else if (number < 0) {
    console.log(`${number} It is a Negative number`);
}
else {
    console.log("It is ZERO"); // Ans: 25 It is a Positive Number
}
// 16. Multiplication Table: Instructions: Write a program that prints the multiplication table of a given number up to 10.
let number1 = 24.5;
console.log(`${number1} X 1 = ${number1 * 1}`);
console.log(`${number1} X 2 = ${number1 * 2}`);
console.log(`${number1} X 3 = ${number1 * 3}`);
console.log(`${number1} X 4 = ${number1 * 4}`);
console.log(`${number1} X 5 = ${number1 * 5}`);
console.log(`${number1} X 6 = ${number1 * 6}`);
console.log(`${number1} X 7 = ${number1 * 7}`);
console.log(`${number1} X 8 = ${number1 * 8}`);
console.log(`${number1} X 9 = ${number1 * 9}`);
console.log(`${number1} X 10 = ${number1 * 10}`);
// Table OUTPUT: 
// 24.5 X 1 = 24.5
// 24.5 X 2 = 49
// 24.5 X 3 = 73.5
// 24.5 X 4 = 98
// 24.5 X 5 = 122.5
// 24.5 X 6 = 147
// 24.5 X 7 = 171.5
// 24.5 X 8 = 196
// 24.5 X 9 = 220.5
// 24.5 X 10 = 245
