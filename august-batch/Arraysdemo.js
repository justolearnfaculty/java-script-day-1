//push

// var myArr=[1,2,3,4]

// myArr.push(5)

// console.log(myArr)
// myArr.pop()
// console.log(myArr)
//pop
//splish

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

// myarr=[1,2,3,4,5,6]
// myarr.splice(1,3)
// console.log(myarr)
// //filter
// myArrayData=[1,2,3,4,5,6]
// arr=myArrayData.filter((data=>{
// return data>3
// }))
// console.log("arrdata",arr)
//find
// arr=myArrayData.find((data=>{
//     return data>3
//     }))
//     console.log("arrdata",arr)
//find index 

// arr=myArrayData.findIndex((data=>{
//     return data>3
//     }))
//     console.log("arrdata",arr)
// 
// products=[{id:1,name:'addidas'},{id:1,name:'nike'}]
// products.forEach(element => {
//     console.log("element",element.id)
// });
// mydata=[1,2,3,4]
// data=mydata.includes(3)
// console.log("data",data)

// mydata=[1,2,3,4]
// data=mydata.indexOf(3)
// console.log("data",data)

// map method
products=[{id:1,name:'addidas',price:100},{id:1,name:'nike',price:100}]
// var updatedProducts=products.map(element => {
   
//    // if(element.name==='nike')
//     {
//         console.log("element",element)
//         element.price=element.price+1000
//         return element
//     }
   
// });
var updatedProducts=products.map(updatedArr)


function updatedArr(element){

    console.log(element)
    element.price=element.price+1000
        return element
}
console.log("updatedProducts",updatedProducts)