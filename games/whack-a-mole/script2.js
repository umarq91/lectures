 let squares = document.querySelectorAll(".square")
 let active;
 
 
 const game=()=>{
    squares.forEach((square)=>{
        square.classList.remove("mole")
    })

   let random=Math.floor(Math.random()*9)
   squares[random].classList.add("mole")
   active=squares[random].id;
//    console.log(active)



    
 }
 squares.forEach((square)=>{
    square.addEventListener("click",()=>{
    //    console.log(square.id)
    if(square.id==active){
        console.log("yes")
    }
    })
 })
 setInterval(game,1000)