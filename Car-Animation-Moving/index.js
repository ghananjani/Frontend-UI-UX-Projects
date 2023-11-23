var audio = new Audio("sound/sound.mp3");
audio.autoplay = true;
audio.loop = true;
audio.volume = 0.1;
document.body.addEventListener("keypress", function(){
    audio.play();
})
