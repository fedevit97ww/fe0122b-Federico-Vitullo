//var globali
var listAudio = document.querySelector('#audio')
var listVideo = document.querySelector('#video')
var audioControl = document.querySelector('#audioControl')
var videoControl = document.querySelector('#videoControl')
var audio = [];
var video = [];

fetch('media.json')
    .then(response => response.json())
    .then(risposta => {
        risposta.audio.forEach(element => {
            audio.push(element)
        });
        risposta.video.forEach(element => {
            video.push(element)
        })
        creaAudio(audio)
        creaVideo(video)
    })

function creaAudio(el) {
    el.forEach(elemento => {
        var li = document.createElement('li')
        listAudio.append(li)
        li.innerText = elemento.title
        li.setAttribute('id',elemento.url)
        li.addEventListener('click',riproduciAudio)
    })
}

function creaVideo(el){
    el.forEach(elemento => {
        var li = document.createElement('li')
        listVideo.append(li)
        li.innerText = elemento.title
        li.setAttribute('id',elemento.url)
        li.addEventListener('click',riproduciVideo)
    })
}

function riproduciAudio(){
    audioControl.setAttribute('src','assets/audio/' + this.id)
}

function riproduciVideo(){
    videoControl.setAttribute('src','assets/video/' + this.id )
}



