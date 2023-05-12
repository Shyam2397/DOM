// let element = document.getElementsByTagName("div")
// console.log(element)

// let headelements=document.getElementsByClassName("heading")
// console.log(headelements)
// for(let i=0;headelements.length;i++){
//     headelements[i].style.color="red";
//     headelements[i].style.fontSize="65px"
// }
// let classelements= document.getElementsByClassName("sub")
// console.log(classelements)
// for(let i=0;classelements.length;i++){
//     classelements[i].style.color="darkblue";
//     classelements[i].style.fontSize="50px"
// }

// let drinks=["soda","fanta","mazza","coke"]
// let h2=document.createElement('h2')
// h2.append("my fav drinks are,")
// document.body.appendChild(h2)

// let ul = document.createElement("ul")

// for(i=0;i<drinks.length;i++){
//     let li=document.createElement('li')
//     li.append(`${drinks[i]}`)
//     ul.appendChild(li)
// }
// document.body.appendChild(ul)


// ----------------------------------day2=-------------------------------


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





