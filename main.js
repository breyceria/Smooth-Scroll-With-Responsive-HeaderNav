const toggle = document.querySelector('.nav-toggle')
const listbuttons =document.querySelector('.links')

toggle.addEventListener("click", function(){
    listbuttons.classList.toggle("show-links")
})



