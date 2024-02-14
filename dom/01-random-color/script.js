// method 1 of random color
const btn = document.getElementById('btn')
// type of an event , action of an event
// btn.addEventListener("click",function(){
//  let colors = ["blue","green","yellow","red"]
// let rndm=  Math.floor(Math.random()*colors.length)
// let color = colors[rndm]

// document.body.style.background= color
// })

// method 2 of random color


btn.addEventListener('click',()=>{

let randomRed = Math.floor(Math.random()*256)
let randomGreen = Math.floor(Math.random()*256)
let randomBlue = Math.floor(Math.random()*256)
document.body.style.background= `rgb(${randomRed},${randomGreen},${randomBlue}`

})