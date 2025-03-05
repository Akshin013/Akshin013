const div = document.getElementById("main-div")

const btnGrey =   document.getElementById("krug1")
const btnRed =    document.getElementById("krug2")
const btnBlue =   document.getElementById("krug3")
const btnYellow = document.getElementById("krug4")


function backgroundGrey() {
    div.style.backgroundColor="grey"
}

function backgroundRed() {
    div.style.backgroundColor="red"
}

function backgroundBlue() {
    div.style.backgroundColor="blue"
}

function backgroundYellow() {

    div.style.backgroundColor="yellow"
}
btnGrey.addEventListener("click", backgroundGrey)
btnRed.addEventListener("click", backgroundRed)
btnBlue.addEventListener("click", backgroundBlue)
btnYellow.addEventListener("click", backgroundYellow)

