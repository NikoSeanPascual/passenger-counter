let homeEl = document.getElementById("home-score-el")
let guestEl = document.getElementById("guest-score-el")

function home1() {
    homeEl.textContent = Number(homeEl.textContent) + 1
}
function home2() {
    homeEl.textContent = Number(homeEl.textContent) + 2
}
function home3() {
    homeEl.textContent = Number(homeEl.textContent) + 3
}

function away1() {
    guestEl.textContent = Number(guestEl.textContent) + 1
}
function away2() {
    guestEl.textContent = Number(guestEl.textContent) + 2
}
function away3() {
    guestEl.textContent = Number(guestEl.textContent) + 3
}