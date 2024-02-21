let container = document.getElementById("container")
let btn = document.getElementById("btn")
const base_url= "https://www.superheroapi.com/api.php/2145484058984269"

function getSuperHero(id){
fetch(`${base_url}/${id}`)
.then((res)=>res.json())
.then((data)=>{
    
displayData(data)
return;
})
}

btn.addEventListener("click",()=>{

console.log("called");
const random=  Math.floor(Math.random()*372)
console.log(random);
getSuperHero(random)

})

function displayData(data) {
    console.log(data);
    // let img = document.createElement("img");    
    // img.src = data.image.url;
    // img.width="400"
    // container.appendChild(img);
    container.innerHTML += `<img src="${data.image.url}" width='400px' />`
}
