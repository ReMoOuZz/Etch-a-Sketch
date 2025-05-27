const principalDiv = document.getElementById("container")

for (let i = 0; i < 256; i++) {
const childDivs = document.createElement("div") 
childDivs.classList.add("child-div")   
principalDiv.appendChild(childDivs)
}