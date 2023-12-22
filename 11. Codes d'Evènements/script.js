const insert = document.getElementById('insert')

window.addEventListener('keydown',(event) =>{
    insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>Touche</small>
</div>

<div class="key">
    ${event.keyCode}
    <small>Numéro</small>
</div>

<div class="key">
    ${event.code}
    <small>Evènement</small>
</div>
    `
})