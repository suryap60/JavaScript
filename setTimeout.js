// setTimeout
var a = setTimeout(()=>{
    console.log("hai");
},5000)


// setInterval


// var a =setInterval(()=>{
//     console.log("hello")
// },2000)


// setTimeout + setInterval

// var a =setInterval(()=>{
//     console.log("hello")
// },2000);

// setTimeout(()=>{
//     clearInterval(a)
//     console.log("stopped execution")
// },10000)


// linkedln -problem
function fetchDAta(callback){
    setTimeout(()=>{
        callback("data Fetched");
    },2000)
}
fetchDAta((message)=>{
    console.log(message);
})