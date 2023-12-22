const jokeEl =document.getElementById('Blague')
const jokebBtn = document.getElementById('BlagueBtn')

BlagueBtn.addEventListener('click', generateBlague)

generateBlague()

async function generateBlague(){
    const config = {
        headers:{
            Accept:'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
    
}