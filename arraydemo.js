// myarray=[1,"hello","abhishek"]
// console.log("myarray",myarray[0])

// //push

// myarray.push("raj")
// console.log("myarray",myarray)

// myarray.pop()
// console.log("myarray",myarray)

//  const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.push("sweet lime")
// console.log("fruits",fruits)
// fruits.unshift("Sweet Lime")
// console.log("fruits",fruits)
// fruits.shift()
// console.log("fruits",fruits)
// var fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);

// function myFunction(item, index) {
//   document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
// }
// var fruits = ["Banana", "Orange", "Apple", "Meango"];
// var n = fruits.includes("Mango");
// console.log("n",n)
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var a = fruits.indexOf("Apple");
// console.log("a",a)

//filter method 
const  numbers =[1,2,3,4,5,6,7,8,9,10]
const even=numbers.filter(isEven)
console.log("even",even)
function isEven(value){
    return value % 2!=0;
}