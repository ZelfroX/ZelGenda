var StartCreateButton = document.querySelector(".StartCreateButton")
var StartCreateButtonText = document.querySelector(".StartCreateButtonText")

StartCreateButton.addEventListener("mouseover", ()=>{
    StartCreateButtonText.style.color = 'rgb(206, 255, 206)'
})

StartCreateButton.addEventListener("mouseout", ()=>{
    StartCreateButtonText.style.color = 'white'
})