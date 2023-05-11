let element = document.getElementsByTagName("div")
console.log(element)

let headelements=document.getElementsByClassName("heading")
console.log(headelements)
for(let i=0;headelements.length;i++){
    headelements[i].style.color="red";
    headelements[i].style.fontSize="65px"
}
let classelements= document.getElementsByClassName("sub")
console.log(classelements)
for(let i=0;classelements.length;i++){
    classelements[i].style.color="darkblue";
    classelements[i].style.fontSize="50px"
}

let drinks=["soda","fanta","mazza","coke"]
let h2=document.createElement('h2')
h2.append("my fav drinks are,")
document.body.appendChild(h2)

let ul = document.createElement("ul")

for(i=0;i<drinks.length;i++){
    let li=document.createElement('li')
    li.append(`${drinks[i]}`)
    ul.appendChild(li)
}
document.body.appendChild(ul)


