// try-catch method :- Error handling method in js 


// normal method

// var a =10;
// var b = a.toUpperCase();
// console.log(b);
// console.log("hello")  //result is error -bcz -js is line by line execution method 





// trycatch method


// try{
//     var a =10;
//     var b = a.toUpperCase();
//     console.log(b);
// }catch(e){
//     console.log(e)
// }
// console.log("hello")




const fetchDAta = async()=>{
    try{
        const  data = await fetch("https://fakestoreapi.com/products")
        const response = await data.json();
        console.log(response)
    }catch(e){
        console.log(e)
    }
}
fetchDAta()

