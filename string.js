// space considere a character
var str = "a ab"
console.log(str);



// concatenation
// 1.Method 1

var str1 = "Codeme";
var str2 = "Kozhikode";
// var combined = str1 + " " + str2;
// console.log(combined);

// 2.Method2

var con = str1.concat(" ","Hub"," ",str2);
console.log(con);


// string length
var strlen = "abcdef";
console.log(strlen.length);

// accessing characters of an array

var strAccess = "codeme";
console.log(strAccess[3]);
console.log(strAccess[2]);
console.log(strAccess.indexOf("d"));
console.log(strAccess.indexOf("e")+2)

// upper-case
var toUp = "mverievievivio";
console.log(toUp.toUpperCase());

// lower-case
var toLo = "SHFURFREJVJRJ";
console.log(toLo.toLowerCase());


// split

var str = "Palazhi, is in Kozhikode,District";
console.log(str.split(","))
console.log(str.split(",",2))
console.log(str.split(" "))
console.log(str.split("a",3))



// home work
// 1.emptystring

var stra = "";
console.log(stra);


// 2.more than 10 character
var strb = "abcdefghijklmnop"
console.log(strb.length)
console.log(strb.length>10)

// 3.equal

var str3 = "Surya"
var str4 = "Surya"


console.log(str3 == str4);

// 4.concatenate

var str5 = "Surya";
console.log(str5.concat(" ","P"));


// 5.uppercase
var strd = "Surya";
console.log(strd.toUpperCase());

// 3/10/2024 -continue-string


//substring- extracting the string -  here we extract kozhikode from the string using their index number-- starting to upto
var str = "codeme kozhikode";
var sub = str.substring(7,16);
console.log(sub);

// var sub = str.substring(-6,4);IT STRAT FROM INDEX 0 BECAUSE -5 VALUE  START 0 INDEX
console.log(sub);



// slice - extracting the string.here -ve values are used to identify the result

// var sli = str.slice(2);
// console.log(sli);

// var sli = str.slice(2,5);
// console.log(sli);

// var sli = str.slice(-5);
// console.log(sli);

// var sli = str.slice(2,5);
// console.log(sli);

// var sli = str.slice(2,-5);
// console.log(sli);

// find the content  occur in the string //console.log(str.includes(""))
var str ="codeme kozhikode";
console.log(str.includes("kozhi"));
console.log(str.includes("23"));

// Replace the string value  // console.log(str.replace("replacing content","Adding content"))

var rep = str.replace("kozhikode","Malappuram");
console.log(rep)