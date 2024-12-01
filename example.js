// var str = "codeme kozhikode";
// console.log(str.substring(3));
// console.log(str.substring(3,8));
// console.log(str.substring(10,2));

// var sli ="codeme hub";
// console.log(sli.slice(3))
// console.log(sli.slice(-5))
// // console.log(sli.slice(-1,-3))
// console.log(sli.includes("hu"))
// console.log(sli.replace("hub","calicut"))

// var str1 ="surya"
// var str2 ="p"
// console.log(str1+" "+str2)
// console.log(str1.concat(" " +"p"))
// console.log(str1.length)
// console.log(str1[3])
// console.log(str1.indexOf("u"))
// console.log(str1.toUpperCase())
// console.log(str1.toLowerCase())
// console.log(str1.split("r",1))

// var stra ="abcd"
// var strb ="abcd"
// console.log(stra == strb)

// var i =1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// var j =10;
// while(j>=5){
//     console.log(j);
//     j--;
// }

// var k =1;
// while(k<=10){
//     if(k%2==0){
//         console.log(k);

//     }k++;
// }

// while(k<=10){
//     if(k%2!=0){
//         console.log(k);

//     }k++;
// }

// var num =1;
// do{
//     if(num%2 ==0){
//         console.log(num);
//     }

//     num++;
// }while(num<=10)

// var num =1;
// do{
//     if(num%2 !=0){
//         console.log(num);
//     }

//     num++;
// }while(num<=10)

// var num =10;
// do{
//     if(num%2 !=0){
//         console.log(num);
//     }

//     num--;
// }while(num>=1)

// var num =10;
// do{
//     if(num%2 ==0){
//         console.log(num);
//     }

//     num--;
// }while(num>=1)

// var i =0;
// var sum =0;

// do{
//     if(i<=10){
//         sum = sum+i;
//     }

//     console.log(sum)

// }while(i<=10)

// for(var i =0;i<=10;i++){
//     console.log(i);
// }

// var array =[1,"hi",true];
// console.log(array)
// console.log(array[2]);
// console.log(array.length)
// array.push(3,"hello");
// console.log(array)
// array.pop()
// array.splice(3,1,"hello","how are you")
// console.log(array)
// var arr = [5,9,2,7,3,2,0,8]
// arr.sort()
// console.log(arr)

// var check =arr.includes(3)
// console.log(check)

// for(var i=0;i<=5;i++){
//     var str="";
//     for(var j=1;j<=i;j++){
//         str+="*"
//     }
//     console.log(str)

// }

// 08/10/2024
// var count =20;
// for(i=2;i<=20;i++){
//     var check=true;
//     for(var j=2;j<i;j++){
//         if(i%j ==0){
//             check =false;

//         }

//     }if(check){
//         console.log(i)
//     }
// }

// list of prime number up to 20
// var count=20;
// for(var i=2;i<=20;i++){
//     var check=true;
//     for(var j=2;j<i;j++){
//         if(i%j == 0){
//             check=false;
//         }
//     }if(check){
//         console.log(i)
//     }
// }

// var array =[1,2,3,5,9];
// for(var i=0;i<=4 ;i++){
//     console.log(i*2)
// }

// for(var element of array){
//     console.log(element)
// }

// var sum =0;
// for(var i=0;i<=4;i++){
//     sum = sum+array[i]
// }console.log(sum)

// for(var i=0;i<=4;i++){
//     console.log("the index of" + " "+array[i]+" is"+i)
// }

// object

// var student ={
//     name :"Surya",
//     age:22,
//     course:"Mernstack"
// }
// console.log(student);
// console.log(student.name)
// student.name ="Alia";
// console.log(student);

// delete student.age;
// console.log(student)

// var studentKeys = Object.keys(student);
// console.log(studentKeys)

// var star ="*";
// for(i=0;i<=5;i++){
//     console.log(star);
//     star = star +" "+ "*"
// }

// a number is prime or not
// var number = 23;
// if(number <=1){
//     console.log("is not a prime number");
// }else{
//     var check =true;
//     for(var i =2;i< number;i++){
//         if(number%i == 0){
//             check= false;
//         }
//     }if(check){
//         console.log("is a prime number");
//     }else{
//         console.log("is not a prime number");
//     }
// }

// print prime numbers upto 20

// var count =20;
// for(var i =2;i<=20;i++){
//     var check =true;
//     for(var j=2;j<i;j++){
//         if(i%j == 0){
//             check =false;
//         }

//     }if(check){
//         console.log(i)
//     }

// }

// for(var i=0;i<=10;i++){
//     console.log(i+" * 5" + " = " +i*5 )
// }

// sum of even numbers
// var sum = 0;
// for(var i = 0;i<=20;i++){
//     if(i%2 ==0){
//         sum = sum + i;
//     }

// }
// console.log(sum)

// var lang = "nivin";
// var backward = "";

// for (var i = lang.length - 1; i >= 0; i--) {
//   backward = backward + lang[i];
// }

// if (lang == backward) {
//   console.log("palindrome");
// } else {
//   console.log("not Palindrome");
// }

// var lang = "english";
// backward= "";

// for(i=lang.length-1;i>=0;i--){
//   backward = backward +lang[i];

// }if(lang==backward){
//   console.log("it is palindrome")
// }else{
//   console.log("not palindrome")
// }


// arrow function 
 
// var arrow =(a,b)=>{
//   console.log(a+b)
// }
// arrow(10,20)

// var hey =()=>{
//   console.log("hey")
// }
// hey()

// var sum= (a,b)=> console.log(a+b); sum(100,50)

// var products=(a,b) =>{
//   return a * b;
// }
// console.log(products(7,5))


// var first = (num1,num2,result)=>{
//   var result =num1 + num2;
//   sum(result)
  
// }
// var sum=(a)=>{
//   console.log(a);
// }
// first(100,50,sum)


// map

var array = [1,2,3,4,5,6];

// var newArray = array.map((item)=>{
//     console.log(item)
// })

var newArray = array.map((item)=>{
    return item +2
})
console.log(newArray)