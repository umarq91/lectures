let bulb = document.getElementById('circle')
let btn = document.getElementById('btn')

let isOn = false

btn.addEventListener('click',()=>{

    if(isOn==false){

        bulb.style.background="yellow"
        btn.innerText="off"
        isOn=true
    }else{
        btn.innerText="On"
        bulb.style.background="transparent"
        isOn=false
    }
})