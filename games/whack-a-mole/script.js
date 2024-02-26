
let squares = document.querySelectorAll(".square")
let score = document.getElementById("score")


let currentPosition

let result = 0

let timer ;

squares.forEach(square=>{
    square.addEventListener("mousedown",()=>{
        if(currentPosition==square.id){
            result+=1
                score.innerText=result
                let randomColor= "#"+Math.floor(Math.random()*16777215).toString(16)
                document.body.style.backgroundColor=randomColor
                square.classList.remove("mole")
               
        }else{
            result -= 1
            score.innerText=result
        }
    })
   })

let startGame=()=>{
   console.log(result);
   squares.forEach(square=>{
    square.classList.remove("mole")
   })
    
    
    let randomNumber = Math.floor(Math.random()*9)
   let randomSquare= squares[randomNumber]
   randomSquare.classList.add("mole")
   currentPosition= randomSquare.id


}

// start Game
document.getElementById("start").addEventListener("click",()=>{
   
  timer= setInterval(startGame,2000)
    
 
    })

 


       
    document.getElementById("pause").addEventListener("click",()=>{
        result=0;
        score.innerText=result
        squares.forEach(square=>{
            square.classList.remove("mole")
           })
           
           document.body.style.backgroundColor="white"
        clearInterval(timer)
    })

