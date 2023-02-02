let data = 0
document.querySelector('.contador').innerHTML = data

function incremento() {
    data++
    document.querySelector('.contador').innerHTML = data
}

function decremento() {
    data--
    document.querySelector('.contador').innerHTML = data
}

function reset() {
    data = 0
    document.querySelector('.contador').innerHTML = data
}