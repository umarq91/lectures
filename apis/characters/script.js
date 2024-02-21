let container = document.getElementById("container")
let btn = document.getElementById("btn")
let input = document.querySelector("input")
const base_url= "https://www.superheroapi.com/api.php/2145484058984269"

function getSuperHero(id){
fetch(`${base_url}/${id}`)
.then((res)=>res.json())
.then((data)=>{
    
displayData(data)
return;
})
}




function getSuperHeroBySearch(name){
    fetch(`${base_url}/search/${name}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.results);
   displayData(data.results)
    return;
    })
    }



btn.addEventListener("click",()=>{

console.log(input.value);
getSuperHeroBySearch(input.value)

})



// img

function displayData(data) {

    if(!data){
        container.innerHTML = `<h1 class="text-6xl text-red-800 font-bold"> No DATA FOUND </h1>`
        return;
    }
   
        container.innerHTML = `<img src="${data[0].image.url}" width='400px' />`

}
