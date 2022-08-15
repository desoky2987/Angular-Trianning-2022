//Task 1 Check The Number Is Even or Odd

// take input from the user
const number = prompt("Enter a number: ");
if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}
//********************************************************************************************************************* */

//Task 2 Fizz Buzz Game

//for loop to print numbers from 1 to 100
for (var i = 1; i < 101; i++) {
    //if the number multiple of three and five
    if (i % 15 == 0) console.log("FizzBuzz");
    //if the number multiple of three
    else if (i % 3 == 0) console.log("Fizz");
    //if the number multiple of five
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
//************************************************************************************************************************* */

//Task 3 Reverse String for example welcome => emoclew

//function with prameters string
function reverseString(str) {
    //empty string that will host the new string after reversing
    var newString = "";
    //for loop to trace charactars of the string from the last charactar
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('welcome'));
//************************************************************************************************************************** */

//Task 4 Compute Circle Area and Circumference

// take input from the user
const radius = prompt("Enter a radius: ");
//function of circle calculations
function circle(radius) {
    this.radius = radius;
    // area method
    this.area = function () {
        return console.log("The area is : " + Math.PI * this.radius * this.radius);
    };
    // circumference method 
    this.circumference = function () {
        return console.log("The circumference is : " + 2 * 3.14 * this.Radius);
    };
}
//**************************************************************************************************************************** */

//Task 5 check two given numbers and return true if one of the number is 50 or if their sum is 50.

// take input from the user
const no1 = prompt("Enter a no1: ");
const no2 = prompt("Enter a no2: ");
//check function 
function test50(no1, no2) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
//******************************************************************************************************************************* */

//Task 6 check from two given integers, whether one is positive and another one is negative.

// take input from the user
const nu1 = prompt("Enter a nu1: ");
const nu2 = prompt("Enter a nu2: ");

function positive_negative(nu1, nu2)
{
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
//******************************************************************************************************************************* */

//Task 7 check whether a given positive number is a multiple of 5 or a multiple of 8.

// take input from the user
const no = prompt("Enter no");
function task7 (no){
    if(no % 5==0){
        return console.log("The number is multiple of 5");
    }
    else if (no%8==0){
        return console.log("The number is multiple of 8");
    }
    else {
        return console.log("The number is not multiple 5 or 8");
    }
}

//************************************************************************************************************************* */

//Task 8 find the largest of three given integers

// take input from the user
const number1 = prompt("Enter number1");
const number2 = prompt("Enter number2");
const number3 = prompt("Enter number3");

function task8 (number1,number2,number3){
    if(number1>number2 && number1>number3){
        return console.log("The largest number is : " + number1)
    }
    else if (number2>number1&&number2>number3){
        return console.log("The lagest Number is : " + number2);
    }
    else if (number3>number1&&number3>number2){
        return console.log("The largest number is : " + number3);
    }
    else {
        return console.log("The numbers are equals");
    }
}
//****************************************************************************************************************************** */

//Task 9 Compute The sum of the numbers from 1 to 10

const N = 10;
function numberSum(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      return total;
}
//*************************************************************************************************************************** */

//Task 10 display the pattern like right angle triangle using an asterisk. ***********************

// task 11 check whether a given number is positive or negative.

// take input from the user
const num = prompt("Enter Numer : ");
function task11 (num){
    if (num>0){
        return console.log("The number is Positive");
    }
    else if (num < 0 ){
        return console.log("The number is nigative");    
    }
    else {
        return console.log("The number is zero");
    }
}
//********************************************************************************************************************************** */

//Task 12 store elements in an array and print it. ************************

//Task 13 print the sum of two numbers

const num1 = prompt("Enter num1");
const num2 = prompt("Enter num2");
function task13 (num1,num2){
    var sum = num1+num2;
    return console.log("The sum of two number is : " + sum);
}
//******************************************************************************************************************************** */

//Task 14 calculate the factorial of a given number ************************

//Task 15 Create Simple Calculator (+ , - , * , /)

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');
// take the operand input
const op1 = prompt('Enter first number: ');
const op2 = prompt('Enter second number: ');
let result;

if (operator == '+') {
    result = op1 + op2;
}
else if (operator == '-') {
    result = op1 - op2;
}
else if (operator == '*') {
    result = op1 * op2;
}
else {
    result = op1 / op2;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);

//*********************************************************************************************************************************** */


