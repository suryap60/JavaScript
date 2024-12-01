// array-it is a data structure
//values in the array called elements
//var array = [2,"string",true]; //mulgtiple values are stored in the array
//console.log(array);

// accessing array elements

// var array =["a","b",122,"codeme"];
// console.log(array[2]);
// console.log(array.length);

// push-  insert the elements into last -at a time multiple values insert

// var arr =[1,2,3,4,5];
// arr.push(6);
// console.log(arr);
// arr.push(7,8)

// pop - remove array element - at one pop only one element remove the last of array.

// arr.pop();
// console.log(arr);

// splice -.splice(startin indexnumber,deletecount,adding count)

// var array =[1,2,3,4,5];
// array.splice(2,1)
// array.splice(2,0)
// array.splice(2,1,2.5,"codeme")
// console.log(array)

// sort method

// var array =[6,3,7,5,1,2]
// array.sort()
// console.log(array);

// includes

// var array =[6,3,7,5,1,2];
// var check = array.includes(7);
// console.log(check);

// reference
// var array =[1,2,3,4,5];
// var newArray= array; //assigning reference to new array
// newArray.push(6);
// console.log(newArray);
// console.log(array)

// *
// **
// ***
// ****

var star ="*";
for(i=0;i<=5;i++){
    console.log(star);
    star = star+" "+"*";
    
}