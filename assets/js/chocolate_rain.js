console.log("Chocolate Rain activated")
let chocolateRainWrapper = document.createElement('div')
chocolateRainWrapper.classList.add('chokolate-rain-wrapper')
chocolateRainWrapper.id = "chokolate-rain-by-csomor"

let chocolateRainMusicController = document.createElement('div')
let audio = document.createElement('audio')
audio.controls = true
let src = document.createElement('source')
src.src = document.location.origin + '/wp-content/plugins/chocolate-rain/assets/music/Chocolate_Rain.mp3'
audio.appendChild(src)

chocolateRainMusicController.classList.add('music-controller')
chocolateRainMusicController.id = "chokolate-rain-music-controller-by-csomor"
chocolateRainMusicController.appendChild(audio)
for(let i=0; i<100; i++){
  let rainDrop = document.createElement('div')
  rainDrop.classList.add('rain')
  chocolateRainWrapper.appendChild(rainDrop)
}

window.addEventListener("DOMContentLoaded",()=>{
  document.body.appendChild(chocolateRainWrapper)
  document.body.appendChild(chocolateRainMusicController)
})

