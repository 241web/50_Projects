const canvas = document.getElementById('canvas'); //tous les exemples et tutos sur 'https://developer.mozilla.org/fr/docs/Web/API/Canvas_API/Tutorial/'
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) => { //Utiliser le pointer de la souris pour dessiner
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})
    
function drawCircle (x, y) { // fonction dessiner un cercle
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2) // dessin du cercle - x et y afin de donner n'importe qu'elle taille
    ctx.fillStyle = color 
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) { //dessiner des lignes
    ctx.beginPath()
    ctx.moveTO(x1, y1)
    ctx.lineTO(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size < 5) {
       size = 5 
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size > 50) {
       size = 50 
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value) // changer les couleurs

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height)) // effacer tout le contenu de l'appli