// BGM: "Paradise Found" Kevin MacLeod (incompetech.com)
// Licensed under Creative Commons: By Attribution 4.0 License
bgMusic = new Audio('/audio/Paradise_Found.mp3');

bgMusic.loop = true;

let savedTime = sessionStorage.getItem('musicTime');
let isPlaying = sessionStorage.getItem('musicPlaying') === 'true';
let baseVolume = sessionStorage.getItem('musicVolume') || 0.4;

bgMusic.volume = baseVolume;

if(savedTime){
    bgMusic.currentTime = parseFloat(savedTime);
}
setInterval(() => {
    if(!bgMusic.paused){
        sessionStorage.setItem('musicTime', bgMusic.currentTime);
    }
}, 500);


window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('musicTime', bgMusic.currentTime);
})
