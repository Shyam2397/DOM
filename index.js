let value= 0;

let h1= document.createElement('h1')
h1.innerHTML="Counter"
h1.setAttribute("id","head")
document.body.appendChild(h1)

let div = document.createElement('div')
div.setAttribute("id","wrapper")
document.body.appendChild(div)

let button1 = document.createElement("button1")
button1.innerHTML="-"
button1.setAttribute("id","button")
button1.addEventListener('click',decrement)
document.getElementById("wrapper").appendChild(button1)

let p = document.createElement('p')
p.innerHTML=value
p.setAttribute("id","value")
document.getElementById("wrapper").appendChild(p)

let button2 = document.createElement('button2')
button2.innerHTML="+"
button2.setAttribute("id","button")
button2.addEventListener('click',increment)
document.getElementById("wrapper").appendChild(button2)

function increment(){
    document.getElementById(value).innerHTML= ++value
}

function decrement(){
    document.getElementById(value).innerHTML= --value
}




// let reset=document.createElement('button')
// reset.innerHTML='Reset'
// reset.setAttribute('id','rbut')
// document.body.appendChild(reset)


// let input = document.createElement('input')
// input.setAttribute('type','text')
// input.setAttribute('placeholder','Enter your name')
// input.addEventListener('change',(e)=>{
//     console.log(e.target.value)
// })
// document.body.appendChild(input)