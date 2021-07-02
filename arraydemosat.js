// var prodname=prompt('enter product name')
// var price=prompt('enter price')
// var description=prompt('enter description')
// cartArr=[]
// cartArr.push({"name":prodname,"price":200})
// arr=[1,2,3,45,4,'abhui']

// person={"name":"archit"}
// console.log("arr",arr[5])
// // push pop
// arr.push(person)
// console.log("arr",arr)
// arr.pop("archit")
// console.log("arr",arr)

// products=[{name:'tv',price:2000}]
// products.push({name:'ac',price:44000})
// products.push({name:'refrigrator',price:44000})
// console.log("product",products)

// products.splice(0, 2); 
// console.log("products",products)
// productsone=[{name:'nike',price:200}]
// producttwo=[{name:'addidas',price:300}]
// finalproduct=productsone.concat(producttwo)

// var ages = [1, 1, 1, 1];

// function checkAdult(age) {
//   return age >= 18;
// }

// value=ages.some(checkAdult)
// console.log("value",value)

// const arr=[1,2,3,4,5,6]
// const newArr=arr.map(a=> a%2!=0)
// console.log("newArr",newArr)
var ages = [21, 21, 20, 21];

function checkAdult(age) {
  return age >= 18;
}
data=ages.every(checkAdult);
console.log('data',data)