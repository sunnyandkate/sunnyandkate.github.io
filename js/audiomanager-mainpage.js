const playBtn = document.querySelector(".play-btn");
const volumeSlider = document.getElementById('volumeSlider');

bgMusic.volume = baseVolume;

playBtn.textContent = isPlaying ? "Pause" : "Play";

if(isPlaying){
    bgMusic.play().catch(err => console.log("click required for autoplay"));
}

playBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        playBtn.textContent = 'Pause';
        sessionStorage.setItem('musicPlaying', true);
    } else {
        bgMusic.pause();
        playBtn.textContent = 'Play';
        sessionStorage.setItem('musicPlaying', false);
    }
});

volumeSlider.value = baseVolume;
volumeSlider.addEventListener('input', (e) => {
    bgMusic.volume = e.target.value;
    sessionStorage.setItem('musicVolume', e.target.value);
});


if (isPlaying) {
    bgMusic.play().catch(err => {
        console.log("Autoplay blocked. Waiting for movement keys...");
        
        const playFallback = () => {
            bgMusic.play().catch(() => {});
            window.removeEventListener('keydown', playFallback);
            window.removeEventListener('click', playFallback);
            window.removeEventListener('touchstart', playFallback);
        };
        
        window.addEventListener('keydown', playFallback);
        window.addEventListener('click', playFallback);
        window.addEventListener('touchstart', playFallback);
    });
}