let input = document.querySelector('input')
let btn = document.querySelector('button')
let h1 = document.querySelector('h1')


function checkInput(){
let value = input.value;

// text should not be empty and if shouldnt be a number
if(value==='') return ; 

const reverse = value.toLowerCase().split('').reverse().join('').split(' ').join('')
console.log(reverse);

let spaceRemovedFromOriginal  = value.toLowerCase().split(' ').join('') // to avoid spaces diffference
console.log(spaceRemovedFromOriginal);

if(reverse===spaceRemovedFromOriginal){
    console.log(true);
    h1.innerText=`Yes " ${value} " is Palindrome`
}else{
    h1.innerText=`No ${value} is not a Palindrome`
}
}

btn.addEventListener('click',checkInput)