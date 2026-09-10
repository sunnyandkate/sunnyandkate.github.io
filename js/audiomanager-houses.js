console.log("playing: " + isPlaying);
console.log("volume: " + baseVolume);
bgMusic.volume = baseVolume * 0.2;
 
if (isPlaying) {
    bgMusic.play().catch(err => {
        console.log("Autoplay blocked. Waiting for movement keys...");
        
        const playFallback = () => {
            bgMusic.volume = baseVolume * 0.3;
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