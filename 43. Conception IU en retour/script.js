const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfait'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    } 
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class = "fas fa-heart"></i>
        <strong>Merci!</strong>
        <br />
        <strong>Feedback: ${selectedRating}</strong>
        <p>Nous nous servirons de votre retour d'expérience afin d'améliorer  notre service support clients.</p>
    `
})

function removeActive() {
    for (let i=0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}