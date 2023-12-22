const sounds = ['Boaz and Ruth', 'ukwatchiche', 'Onction du Lion', 'Il est capable', 'Je dois partir', 'Je parlerai', 'KWE2', 'Contre toute attente', 'Le jour de ma mort']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()


        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}