let openBtn = document.getElementById("openModal")
let modal = document.getElementById("modal")
let closeBtn = document.getElementById("close")

openBtn.addEventListener("click" , function() {
    modal.style.display = "block"
})
closeBtn.addEventListener("click" , function() {
    modal.style.display = "none"
})


