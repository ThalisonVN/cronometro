const minutosEl = document.querySelector("#minutos")
const segundosEl = document.querySelector("#segundos")
const milissegundosEl = document.querySelector("#milissegundos")
const iniciarBtn = document.querySelector("#iniciarBtn")
const pausarBtn = document.querySelector("#pausarBtn")
const continuarBtn = document.querySelector("#continuarBtn")
const resetarBtn = document.querySelector("#resetarBtn")

let interval
let minutos = 0
let segundos = 0
let milissegundos = 0
let isPause = false

iniciarBtn.addEventListener("click", startTimer)
pausarBtn.addEventListener("click", pauseTimer)
continuarBtn.addEventListener("click", continueTimer)
resetarBtn.addEventListener("click", resetTimer)

function startTimer() {
    interval = setInterval(() => {
        if (!isPause) {

            milissegundos += 10

            if (milissegundos === 1000) {
                segundos++
                milissegundos = 0
            }

            if (segundos === 60) {
                minutos++
                segundos = 0
            }
        }

        minutosEl.textContent = fortmatTime(minutos)
        segundosEl.textContent = fortmatTime(segundos)
        milissegundosEl.textContent = fortmatMilissegundos(milissegundos)

    }, 10)

    iniciarBtn.style.display = "none"
    pausarBtn.style.display = "block"
}

function pauseTimer() {
    isPause = true
    pausarBtn.style.display = "none"
    continuarBtn.style.display = "block"
    resetarBtn.style.display = "block"
}

function continueTimer() {
    isPause = false
    continuarBtn.style.display = "none"
    pausarBtn.style.display = "block"
}

function resetTimer() {
    clearInterval(interval)

    isPause = false

    minutos = 0
    segundos = 0
    milissegundos = 0

    minutosEl.textContent = "00"
    segundosEl.textContent = "00"
    milissegundosEl.textContent = "000"

    iniciarBtn.style.display = "block"
    continuarBtn.style.display = "none"
    pausarBtn.style.display = "none"

}

function fortmatTime(time) {
    return time < 10 ? `0${time}` : time
}

function fortmatMilissegundos(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}