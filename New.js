var a="this is bsc csit";
console.log(a);

//print the length of the string
console.log("the length of the stirng is",a.length);

//print the index of a string 
console.log("the index of string is",a.charAt(4));

//print the character code of the string at given index
console.log("the character code of the given string is",a.charCodeAt(5));

//print the sliced text of the string
console.log("the sliced part of the string is",a.slice(4,7));

//print the substring of the string
console.log("the sub string of the string is",a.substring(1,5));

//to return length of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
document.getElementById("demo").innerHTML = size;

//to return array as comma separated string
document.getElementById("demo3").innerHTML = fruits.toString();

//to remove first element of array
document.getElementById("demo1").innerHTML = fruits;
fruits.shift();
document.getElementById("demo2").innerHTML = fruits;

//slice out a part of an array
const citrus = fruits.slice(1);
document.getElementById("demo4").innerHTML = fruits + "<br><br>" + citrus;
