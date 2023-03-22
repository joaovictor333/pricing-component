const toggle = document.querySelector(".toggle")
const cards = document.querySelector(".primary")

toggle.addEventListener("change", () => {
    cards.classList.toggle("show-monthly")
})