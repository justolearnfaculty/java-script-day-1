
hello()
function hello(){
  a=0
  console.log("hello")  
  var a;
  function inner(){
    var b=0
    console.log("a",a)
  }
  inner()
}