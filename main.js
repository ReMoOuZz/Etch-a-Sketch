function changeDimensions() {

    let message = "Choose a number of squares"
    let userChoice
    let number

    do {
        userChoice = prompt(message)
        number = parseInt(userChoice)

        if (userChoice === null || userChoice.trim() === "" || isNaN(number)) {
            message = "Please enter a valid number"
        } else if (number < 1 || number > 100) {
            message = "Please choose a number between 1 and 100"
        }
    } while (userChoice === null || userChoice.trim() === "" || isNaN(number) || number < 1 || number > 100)
    return number
}
    
function createGrid(userChoice) {

const principalDiv = document.getElementById("container")
    
    while (principalDiv.firstChild) {
        principalDiv.removeChild(principalDiv.firstChild)    
    }

    const squareSize = 500 / userChoice

    for (let i = 0; i < userChoice * userChoice; i++) {
        const childDivs = document.createElement("div") 
        childDivs.classList.add("child-div")
        childDivs.style.width = `${squareSize}px`
        childDivs.style.height = `${squareSize}px`   
        principalDiv.appendChild(childDivs)
    }

    document.querySelectorAll(".child-div").forEach((e) => {
        e.addEventListener("mouseover", () => {
        e.style.backgroundColor = "black"
    })
})
}

document.getElementById("dimensionsButton").addEventListener("click", () => {
    const userNumber = changeDimensions()
    createGrid(userNumber)

})

createGrid(16)
