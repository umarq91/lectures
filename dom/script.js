// method 1 of random color
const btn = document.getElementById('btn')
console.log(btn);
// type of an event , action of an event
btn.addEventListener("click",function(){
 let colors = ["blue","green","yellow","red"]
let rndm=  Math.floor(Math.random()*colors.length)
let color = colors[rndm]

document.body.style.background= color
})

// method 2 of random color

