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

function colorSwitch() {

    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    } 
    return color
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
        childDivs.dataset.count = 0
        childDivs.style.width = `${squareSize}px`
        childDivs.style.height = `${squareSize}px`   
        principalDiv.appendChild(childDivs)
        
        childDivs.addEventListener("mouseover", () => {
            let count = parseInt(childDivs.dataset.count) || 0
            if (count < 10) count ++
            childDivs.dataset.count = count

            const opacity = count / 10

            childDivs.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`
    })
}
}

document.getElementById("dimensionsButton").addEventListener("click", () => {
    const userNumber = changeDimensions()
    createGrid(userNumber)

})

document.getElementById("blackButton").addEventListener("click", () => {
    document.querySelectorAll(".child-div").forEach((e) => {
        e.style.backgroundColor = ""
        e.dataset.count = 0

        e.onmouseover = () => {
            let count = parseInt(e.dataset.count) || 0
            if (count < 10) count ++
            e.dataset.count = count 

            const opacity = count / 10
            e.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`
        }
    })
}
)

document.getElementById("rainbowButton").addEventListener("click", ()=>{
        document.querySelectorAll(".child-div").forEach((e) => {
            e.style.backgroundColor = ""
        })
        document.querySelectorAll(".child-div").forEach((e) => {
            e.onmouseover = () => {
                e.style.backgroundColor = colorSwitch()
            }
        })
    })

document.getElementById("resetButton").addEventListener("click", () => {
    
    const shakeImage = document.querySelector(".sketch-img")
    
    document.querySelectorAll(".child-div").forEach((e) => {
        e.style.backgroundColor = ""
        e.dataset.count = 0
    })

    shakeImage.classList.add("shake")

    shakeImage.addEventListener("animationend", () => {
        shakeImage.classList.remove("shake")
    }, {once: true })
})    
 
createGrid(30)

   
