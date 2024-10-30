const firstCard = document.getElementById("card-1")
const secondCard = document.getElementById("card-2")
const thirdCard = document.getElementById("card-3")
const firstImg = document.getElementById("img-1")
const secondImg = document.getElementById("img-2")
const thirdImg = document.getElementById("img-3")

firstCard.addEventListener("click", function () {
    firstImg.style.display = "block"
    secondImg.style.display = "none"
    thirdImg.style.display = "none"
    firstCard.style.borderColor = "black"
})

secondCard.addEventListener("click", function () {
    secondImg.style.display = "block"
    firstImg.style.display = "none"
    thirdImg.style.display = "none"
    secondCard.style.borderColor = "yellow"
})

thirdCard.addEventListener("click", function () {
    thirdImg.style.display = "block"
    firstImg.style.display = "none"
    secondImg.style.display = "none"
    secondCard.style.borderColor = "yellow"
})






