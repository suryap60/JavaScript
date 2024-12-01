// 18/10/2024

// Promise
// var a = fetch ("https://fakestoreapi.com/products");
// console.log(a);

// Async - doesn't affect any other client resquest based on first request  

// method1-async

// fetch ("https://fakestoreapi.com/products")
//     .then((res)=>{      //.then() receive the result from the server
        // return res.json();     // .json() -- convert json format into normal format
//     })
//     .then((result)=>{      
//         console.log(result);
//     })

// method 2

const fetchData = async()=>{
    const data = await fetch("https://fakestoreapi.com/products");
    const response = await data.json();
    console.log(response);
};
fetchData();

