/***** Overlay at the beginning  ******/
let overlayAlpha = 0.65;
let showStartOverlay = sessionStorage.getItem("startOverlayHidden") === "true";


window.addEventListener('keydown', startFadingOverlay);
window.addEventListener('touchstart', startFadingOverlay);
window.addEventListener('click', startFadingOverlay);

function startFadingOverlay() {
    // Fade out smoothly over a few milliseconds
    let fadeTimer = setInterval(() => {
        overlayAlpha -= 0.04;
        if (overlayAlpha <= 0) {
            overlayAlpha = 0;
            clearInterval(fadeTimer);
                     
            window.removeEventListener('keydown', startFadingOverlay);
            window.removeEventListener('touchstart', startFadingOverlay);
            window.addEventListener('click', startFadingOverlay);
        }
    }, 20);

    showStartOverlay = true;
    sessionStorage.setItem("startOverlayHidden", "true");
}


function drawPlayerSpotlightOverlay(ctx, player) {console.log("show");
    if (overlayAlpha <= 0) return; 
    ctx.save();

    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = canvas.width;
    maskCanvas.height = canvas.height;
    const mctx = maskCanvas.getContext('2d');

    mctx.fillStyle = `rgba(112, 123, 81, ${overlayAlpha})`; 
    mctx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);

    mctx.globalCompositeOperation = 'destination-out';

    mctx.beginPath();
    const maskRadius = 20; 
    const playerCenterX = player.x + 8; 
    const playerCenterY = player.y; 

    mctx.arc(playerCenterX, playerCenterY, maskRadius, 0, Math.PI * 2);
    mctx.fill();

    mctx.globalCompositeOperation = 'source-over'; 
    let gradient = mctx.createRadialGradient(
        playerCenterX, playerCenterY, maskRadius - 15, 
        playerCenterX, playerCenterY, maskRadius       
    );
 
    gradient.addColorStop(0, 'rgba(0,0,0,1)'); 
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    
    mctx.globalCompositeOperation = 'destination-out';
    mctx.fillStyle = gradient;
    mctx.beginPath();
    mctx.arc(playerCenterX, playerCenterY, maskRadius, 0, Math.PI * 2);
    mctx.fill();
    ctx.drawImage(maskCanvas, 0, 0);
    ctx.restore();
}
