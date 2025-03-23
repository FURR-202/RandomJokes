let jokeBox = document.querySelector("#joke-box");
let btn = document.querySelector("button");
async function getjokes(){
try{
    btn.disabled = true
    jokeBox.innerText ="🥱🥱🥱🥱🥱Loading............."
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    jokeBox.innerText = data.value;
}
catch(error){
    jokeBox.innerText = "Failed to generate joke........";
    jokeBox.style.color = "red";
}
finally{
    btn.disabled = false
}
}
btn.addEventListener("click",()=>{
    getjokes();
})