/******** sort ********* */
var arry = [10, 20, 80, 90, 45];
document.write(arry.sort());
document.write("<br>");
var ary1 = ["f", "a", "c", "e", "z", "i"];
document.write(ary1.sort());
document.write("<br>");
var ary2 = ["f", "a", "z", true, "i", false, 145.5, 145];
document.write(ary2.sort());
document.write("<br>");
/**************************reverse array *************************************/
var ary1 = ["f", "a", "c", "e", "z", "i"];
var ary2 = ["f", "a", "z", true, "i", false, 145.5, 145];
console.log(ary2);
const reversed = ary2.reverse();
console.log("reversed:", reversed);
/************************************ POP and push Array in java script  ****************************/
var ary1 = ["f", "a", "c", "e", "z", "i"];
ary1.push("xyz");
console.log(ary1);
ary1.pop();
console.log(ary1);
/**********************************************Shift and unShift array ********************************************/
var ary1 = ["f", "a", "c", "e", "z", "i"];
ary1.shift();
console.log(ary1);
ary1.unshift("Lemon", "Pineapple");
console.log(ary1);
/***********************************************Concant Array Element **************************************************************/
var ary1 = ["f", "a", "c", "e", "z", "i"];
var ary2 = ["f", "a", "z", true, "i", false, 145.5, 145];
var s = ary1.concat(ary2, arry);
console.log(s);
/******************************************Join array Elemnt********************************/
/**return array as string  */
var ary2 = ["f", "a", "z", true, "i", false, 145.5, 145];
var j = ary2.join();

console.log(j);
/************************************ Splice Array and  Slice Array*********************************/
/***********The slice() method returns selected elements in an array, as a new array.

slice() selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

slice() does not change the original array. */

/*************The splice() method adds and/or removes array elements. */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.splice(2, 0, "Lemon", "Kiwi"); //2 repersent the index of elemnet and 0 represent no of element should be delete
console.log(fruits);
let slicefruits = fruits.slice(1, 3);
console.log(slicefruits);

/************************************  copyWithin() and Array entries() ******************/
/* The copyWithin() method copies array elements to another position in an array, overwriting existing values. */
/*The entries() method returns an Array Iterator object with key/value pairs.*/
var city = [
  " Shimla",
  "Bangalore",
  " Vishakhapatnam",
  "INDORE",
  " Guwahati",
  "GOA",
  "Kochi",
];
let cityname = city.copyWithin(2, 0);
console.log(cityname);
let indexarray = city.entries();
for (let x of indexarray) {
  console.log(x);
}
/*************** every and Fill *****************
 * The every() method returns true if all elements in an array pass a test (provided as a function).**/
/*fill changes the element of array */
var electonics = ["mobile", "mobile", "mobile", "mobile", "mobile", "mobile"];
function checkName(name) {
  if (name === "mobile") {
    console.log("welcome to mobile world ");
  }
}
let z = electonics.every(checkName);
console.log(z);

var ages = [22, 25, 26, 78, 87, 100];
let age = ages.every(checkAge); // Returns false

function checkAge(age) {
  return age > 18;
}
console.log(age);

/***fill****** */
var food = ["chhat", "panipuri", "cack", "Rasmali", "samosa", "pavbhaji"];
console.log(food);
var fillarray = food.fill("MasalaDhosa", 2, 5);
console.log(fillarray);

/************* find ************** */
/*The Array.find() method returns the value of the first element in an array that passes a test (provided by a function)*/
function foodcheck(checkFood) {
  return checkFood == "MasalaDhosa";
}
let f = food.find(foodcheck);
console.log(f);
/**find index**/
var number = [2, 3, 5, 8, 19, 20];
function checkNumber(num) {
  return num > 10.5;
}
let n = number.findIndex(checkNumber);
console.log("index number of array " + n);
/****       for each */

/***The forEach() method calls a function once for each element in an array, in order.

forEach() is not executed for array elements without values. */
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
console.log(sum);

function myFunction(item) {
  sum += item;
}
/**  from** */
/***The Array.from() method returns an Array object from any object with a length property or any iterable object. */
const myArr = Array.from("ABCDEFG");
console.log(myArr);

/**include */
/***The includes() method returns true if an array contains a specified element, otherwise false.

 */
var a = ["apple", "Mango"];
var r = a.includes("Mango");
console.log(r);

/**The Array.indexOf() method searches an array for a specified item and returns its position. */
var a1 = a.indexOf("apple");
console.log(a1);

/***Array isArray()
The isArray() method returns true if an object is an array, otherwise false. */

var a2 = Array.isArray(a);
console.log(a2);
/**key***/
/**The keys() method returns an Array Iterator object with the keys of an array.

keys() does not change the original array. */
const fruitsyummy = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Orange",
  "Apple",
  "Mango",
];
const keys = fruitsyummy.keys();
let text = "";
for (let x of keys) {
  text += x;
}
console.log(text);
/***length */
let ff = fruitsyummy.length;
console.log(ff);
/**index of ********/
/***The lastIndexOf() method returns the last index (position) of a specified value. */
var jj = fruitsyummy.lastIndexOf("Apple");
console.log(jj);
/***   Map *** */
var numbers1 = [4, 9, 16, 25];
var no = numbers1.map(Math.sqrt);
console.log(no);
/***valueOf */
var fr = fruitsyummy.valueOf();
console.log(fr);
/***prototype */
/**The prototype constructor allows you to add new properties or methods to the Array() object. */
Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
var ar = ["aa", "bb", "cc", "dd"];
ar.myUcase();
console.log(ar);
