const firstImg = document.getElementById("img-1")
const secondImg = document.getElementById("img-2")
const thirdImg = document.getElementById("img-3")

document.addEventListener("DOMContentLoaded", function () {

    const firstCard = document.getElementById("card-1")
    const secondCard = document.getElementById("card-2")
    const thirdCard = document.getElementById("card-3")

    firstCard.addEventListener("click", function () {
        event.stopPropagation();
        firstImg.style.display = "block"
        secondImg.style.display = "none"
        thirdImg.style.display = "none"
        firstCard.style.borderColor = " !important"
    })

    secondCard.addEventListener("click", function () {
        event.stopPropagation();
        secondImg.style.display = "block"
        firstImg.style.display = "none"
        thirdImg.style.display = "none"
        secondCard.style.borderColor = "yellow"
    })

    thirdCard.addEventListener("click", function () {
        thirdImg.style.display = "block"
        firstImg.style.display = "none"
        secondImg.style.display = "none"
        thirdCard.style.borderColor = "yellow"
    })
})






