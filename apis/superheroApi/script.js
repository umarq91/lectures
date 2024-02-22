

let container = document.getElementById("container")
let search = document.getElementById("input")


let randomButton = document.getElementById("random")
let searchButton = document.getElementById("search")


function displayData(data){
    container.innerHTML+=`
    <div>

    <h1 class="text-2xl font-bold">${data.name}</h1>
    <img src=${data.image.url} class="w-full" />
    </div>
    `
}

function getSuperHero(){
  let rndm=   Math.floor(Math.random()*700)
fetch('https://www.superheroapi.com/api.php/2145484058984269/'+rndm)
.then(response => response.json())
.then(data =>{


displayData(data)
})
}

function searchHero(){
   let input = search.value;

   fetch("https://www.superheroapi.com/api.php/2145484058984269/search/"+input)
   .then((res)=>res.json())
   .then((data)=>{

   
    if(!data.results) {
        container.innerHTML=`<h1 class="text-2xl text-red-700 font-bold">No results found</h1>`
        return
    }

data.results.map((hero)=>{
     displayData(hero)
})
 


   })
}

randomButton.addEventListener("click",getSuperHero)
searchButton.addEventListener("click",searchHero)

