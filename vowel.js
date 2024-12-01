var str = "english";
var vowels = ["a", "e", "i", "o", "u"];
var res = "";

for (var i = 0; i <= str.length; i++) {
  for (var j = 0; j <= vowels.length; j++) {
    if (str[i] == vowels[j]) {
      res = res + str[i];
    }
  }
}
console.log(res);
