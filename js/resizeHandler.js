//for resizing
function resizeGame(canvasName) {

    const canvas = document.querySelector('canvas');
    const uiLayer = document.getElementById('ui-layer'); 

    const container = document.querySelector(".container");
    
    const GAME_WIDTH = 320;
    const GAME_HEIGHT = 180; 
    const nativeRatio = GAME_WIDTH / GAME_HEIGHT;

    // Get exact mobile screen dimensions
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    // Detect if mobile phone is vertically held (Portrait)
    const isPortrait = windowHeight > windowWidth;

    let newWidth, newHeight;

    if (isPortrait) {
        // Force the game layout to span the entire phone width
        newWidth = windowWidth;
        newHeight = windowWidth / nativeRatio;
    } else {
        // Landscape Mode: Scale to fit perfectly up to maximum height bounds
        let windowRatio = windowWidth / windowHeight;
        if (windowRatio > nativeRatio) {
            newHeight = windowHeight;
            newWidth = windowHeight * nativeRatio;
        } else {
            newWidth = windowWidth;
            newHeight = windowWidth / nativeRatio;
        }
    }
    const finalWidth = Math.floor(newWidth);
    const finalHeight = Math.floor(newHeight);
    if (container) {
            container.style.width = `${finalWidth}px`;
            container.style.height = `${finalHeight}px`;
    }
    
    canvas.style.width = `${finalWidth}px`;
    canvas.style.height = `${finalHeight}px`;

    if (uiLayer) {
        uiLayer.style.width = `${finalWidth}px`;
        uiLayer.style.height = `${finalHeight}px`;
    }

    if(canvasName === "gameCanvas"){
        resizeHutElements();
    }
    
}

window.addEventListener('load', resizeGame);
window.addEventListener('resize', resizeGame);

function resizeHutElements(){
  
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const currentScale = canvas.clientWidth / canvasWidth;
    const infoHouseX = infoHouse.x + (infoHouse.width/2); 
    const infoHouseY = infoHouse.y + (infoHouse.height/2 + (infoHouse.height/8));  

    const screenX = (infoHouseX / canvasWidth) * 100;
    const screenY = (infoHouseY / canvasHeight) * 100;

    //resize info stand title
    const infoStandTitle = document.querySelector('.infoStand');
    const infoStandImageWidth = 30; 
    const percentImgWidth = (infoStandImageWidth / canvasWidth) * 100;
    
    infoStandTitle.style.left = screenX + '%';
    infoStandTitle.style.top = screenY + '%';
    infoStandTitle.style.width = percentImgWidth + '%';

    //resize resume button
    const resumeButton = document.querySelector('.resumeBtnGame');
    const resumeButtonX = infoHouse.x + infoHouse.width;
    const resumeButtonY = infoHouse.y;
    const resumeFontSize = 4;

    resumeButton.style.left = ((resumeButtonX / canvasWidth) * 100) + "%";
    resumeButton.style.top = ((resumeButtonY / canvasHeight) * 100) + "%";
    resumeButton.style.fontSize = (resumeFontSize * currentScale) + "px";

    resumeButton.style.padding = `${1 * currentScale}px ${2 * currentScale}px`;
    resumeButton.style.borderWidth = `${1 * currentScale}px`;
  
}