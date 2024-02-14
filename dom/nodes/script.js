
const ul = document.querySelector('ul')

let body= document.body

function creatList(name){
   let list = document.createElement('li')
   list.innerHTML=name
   ul.appendChild(list)
}


creatList("Peshawar")
creatList("New York")