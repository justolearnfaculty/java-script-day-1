

function hello(){
//outer 
  console.log("hello")  
  var a;
  a=0
  //inner
  function inner(){
    var b=0
    console.log("a",a)
  }
  inner()
}

hello()