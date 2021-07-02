console.log("hello")
//hoisting
function outer(){
var a=0
    console.log("outer method")
    function inner(){

        console.log("inner",a)
    }
    inner()
}
outer()