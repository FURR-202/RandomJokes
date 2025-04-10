
// question 1(beginner)
// async function sayHello(){
//     return "Hello, World!"
// }
// sayHello().then((value)=>{
//     console.log(value)
// })

// // question 2(beginner)
// async function getNumber(){
//     let p1 = new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(10)
//         },2000);
//     })
//     let a = await p1
//     console.log(a)
// }
// getNumber();


// // question 3(beginner)
// async function fetching(){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         let data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log("some error happened while fetching data")
//     }
// }
// fetching()

// // question 4(intermediate)
// async function op() {
//     let p1 = new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("step 1 complete")
//         }, 2000);
//     })
//     let p2 = new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("step 2 complete")
//         }, 4000);
//     })
//     let a = await p1;
//     console.log(a)
//     let b = await p2;
//     console.log(b)
// }
// op()


// // question 6(intermediate)
//  function wait(ms) {
//     let p1 = new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("done waiting")
//         },ms);
//     })
//     return p1;
    
// }
// async function crazy(){
//     let result = await wait(2000)
//     console.log(result)
// }
// crazy();

// // question 7(Advance)
// async function fetchMultipleData(){
//     let response1 =  fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let response2 = fetch("https://jsonplaceholder.typicode.com/users/1");
//     try {
//         let p = await Promise.all([response1,response2])
//         console.log(p)
//     }
//     catch(error){
//         console.log("error")
//     }
// }
// fetchMultipleData()

// // question 8(Advance)
// async function sequentialCalls(){
//     try{
//         let response1 =  await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         let data1 = await response1.json()
//         console.time()
//         let response2 = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         let data2 = await response2.json()
//         console.time()
//     }
//     catch(error){
//         console.log("error happened")
//     }
// }
// sequentialCalls()

// async function loadscript(src){
//    return new Promise((resolve,reject)=>{
//     let body = document.body;
//     let script = document.createElement("script")
//     script.src= src
//     script.onload = ()=>{
//         resolve(src)
//     }
//     body.append(script)
//    })
   
// }
// async function f(){
//     let a = await loadscript("https://cdnjsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
// }
// f();
let temp1  = document.querySelectorAll(".temp")[0].querySelector("h2");
let temp2  = document.querySelectorAll(".temp")[1].querySelector("h2");
let temp3  = document.querySelectorAll(".temp")[2].querySelector("h2");
let description = document.querySelector("#description");
let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
let temperature = JSON.parse(localStorage.getItem("Temperature"));
let decrip = JSON.parse(localStorage.getItem("Description"));
let temp_arr = [temp1,temp2,temp3];
function change() {
    if(temperature.includes("°C")){
        temperature = `${parseInt((parseInt(temperature)*9)/5) + 32} °F`;
        temp_arr.forEach(ele => {
            ele.innerText = temperature;
        });
    }
    else{
        temperature = JSON.parse(localStorage.getItem("Temperature"));
        temp_arr.forEach(ele => {
            ele.innerText = temperature;
        });
    }
}

async function weather(){
    try{
        let response = await fetch("https://goweather.xyz/weather/US");
        let data = await response.json();
        localStorage.setItem("Temperature",JSON.stringify(data.temperature));
        localStorage.setItem("Wind",JSON.stringify(data.wind));
        localStorage.setItem("Description",JSON.stringify(data.description));
        let temperature = JSON.parse(localStorage.getItem("Temperature"));
        let decrip = JSON.parse(localStorage.getItem("Description"));
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

temp_arr.forEach(ele => {
    ele.innerText = temperature;
});
description.innerText = decrip;

