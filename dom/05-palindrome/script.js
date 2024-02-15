let input = document.querySelector('input')
let btn = document.querySelector('button')
let h1 = document.querySelector('h1')


function checkInput(){
let value = input.value;

// text should not be empty and if shouldnt be a number
if(value==='') return ; 


const reverse = value.toLowerCase().split('').reverse().join('')

let result =  reverse.toLowerCase().split(' ').join('')

let spaceRemovedFromOriginal  =  value.toLowerCase().split(' ').join('') // to avoid spaces diffference
 

if(result===spaceRemovedFromOriginal){
    console.log(true);
    h1.innerText=`Yes " ${value} " is Palindrome`
}else{
    h1.innerText=`No ${value} is not a Palindrome`
}
}

btn.addEventListener('click',checkInput)