
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
let btn = document.querySelector("button")
let temp = document.querySelector("#box1");
let des = document.querySelector("#box2");
let wind = document.querySelector("#box3");
async function whether(){
    try{
        btn.disabled = true
        let response = await fetch("https://goweather.herokuapp.com/weather/ny");
        let data = await response.json();
        let t = document.createElement("h2");
        let d = document.createElement("P");
        let w = document.createElement("p");
        t.innerText = data.temperature;
        d.innerText = data.description;
        w.innerText = data.wind;
        temp.appendChild(t)
        des.appendChild(d)
        wind.appendChild(w)
        console.log(data)
    }
    catch(error){
        console.log("Some error occurred")
    }
    finally{
        btn.disabled = false
    }
}
btn.addEventListener("click",()=>{
    whether();
})