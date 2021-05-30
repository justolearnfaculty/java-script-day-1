// function myfunc(func){

//     console.log("hello")
//     func("abhi")
// }
// // function yourFunc(name){
// //     console.log("name",name)

// // }

// myfunc(yourFunc=(name)=>{
//     console.log("name",name)
// })
function callBack(){
    console.log("hello done")
}

setInterval(callBack, 1000);