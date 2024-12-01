
// var number =20;

// simple if 
// if(number >10){
//     console.log("the value is greater than 10")
// }


// if - else

// if(number == 10){
//     console.log("both numbers are equal")
// }else{
//     console.log("Both numbers are not equal")
// }


// positive numbers or not 

// if(number >0){
//     console.log("The number is positive")
// }else{
//     console.log("the number is negative")
// }


// even number or not

// if(number%2 == 0){
//     console.log("The number is  even")
// }else{
//     console.log("The number is not  even")
// }


// number is divisible by 3

// if(number%3 == 0){
//     console.log("The number is divisible by 3")
// }else{
//     console.log("The number is not divisible by 3")
// }


// if - else - if
// var day = "monday";

// if(day == "monday"){
//     console.log("Today is Monday")
// }else if (day == "tuesday"){
//     console.log("Today is Tuesday")
// }else if (day == "wednesday"){
//     console.log("Today is Wednesday")
// }else {
//     console.log("No Match")
// }


// Nested if

// var num =21;
// if(num >20){
//     if(num % 2 == 0){
//         console.log("The number is even and greater than 20")
//     }else{
//         console.log("The number is odd and greater than 20")


//     }
// }else{
//     console.log("The number is smaller than 20")
// }

// using logical statements - if else

// var num =  22;

// if((num > 20) && (num%2 == 0)){
//     console.log("The number is greater than 20 and even number")
// }
// else{
//     console.log("The number is neither not greater than 20 or odd number or both")
// }

// multiple of 5 or not -home work

// var num = 9;

// if(num%5 == 0){
//     console.log("The number is multiple of 5")
// }else{
//     console.log("The number is not multiple of 5")
// }

// the number is between 50-100

// var num =65;

// if(num <=100 && num>=50){
//     console.log("the number is between 50 and 100")
// }else{
//     console.log("the number is not between 50 and 100")
// }
 
// sum of two number

// var num1 =10;
// var num2 =20;
// console.log(`sum of two numbers ${num1} and ${num2} is`,num1 + num2);

// difference of two numbers

// var num1 =100;
// var num2 =20;
// console.log("The difference of two numbers is",num1 - num2);

// average of three numbers


// var num1 = 10;
// var num2 = 20;
// var num3 = 30;
// console.log("average of three number is",(num1+num2+num3)/3)


// var num4 = 30
// var num5 =50

// if(num4<num5){
//     console.log(`${num4} is smallest number than ${num5}`)
// }
// else{
//     console.log(`${num5} is smallest number ${num4}`)
// }

// var num4 = 30
// var num5 =50

// if(num4>num5){
//     console.log(`${num4} is largest number than ${num5}`)
// }
// else{
//     console.log(`${num5} is largest number than ${num4}`)
// }


// switch- alternative of if-else and only used in single value-case
var day = "tuesday";

switch(day){
    case "sunday":
        console.log("The day is sunday");
        break;
    case "monday":
        console.log("The day is monday");
        break;
    case "tuesday":
        console.log("The day is tuesday");
        break;
    case "wednesday":
        console.log("The day is wednesday");
        break;
    case "thursday":
        console.log("The day is thursday");
        break;
    default:
        console.log("No Match");
}