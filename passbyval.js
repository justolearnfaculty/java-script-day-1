var a=false;
var b={id:false}// object
function myfunc(x,y){
x=true
y.id=true
console.log("inside x=",x)
console.log("inside y=",y)
}
myfunc(a,b)
console.log("a==",a)
console.log("b==",b)
// person={id:1}
// console.log(person.id)