/*
functions , objects ,  arrays and loops

                HIGH ORDER FUNCTIONS 

*/
// hoisting
// function declaration
// anonymous function , function expression 

// const addTwo=function(a,b){
//     return a+b
// }

// const addThree= (a,b,c)=>{
// return a+b+c
// }



// Higher order Functions 

// const test3=(fn)=>{
    // console.log("hellow orld");
    
    // }
    
    // const hof=()=>{
        //     console.log("testtttt");
        // }
        
        // test3(hof)
        

// array method => shift(4),unshift , pop,push, indexOf, includes()
// forEach . map , filter , reduce

// forEach 


// create a function that takes function as an arguent and that function should say Hello Worl and paramter
// function should be called after that hello world that returns "Hello Boss"
const poker = [1,2,3,4,5,2,]


const newArr = poker.map(e=> e*5 )

const filtered = poker.filter(function(num){
    return num==2
})


console.log(newArr);