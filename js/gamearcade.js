window.addEventListener("DOMContentLoaded", () => document.getElementById("fade-box").classList.add("fade-out"));

const canvas = document.getElementById('arcadeCanvas');
const ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = false;

window.onload = function(){
   resizeGame('arcadeCanvas');
   arcadeSetup();
   arcadeLoop();  
}
function arcadeSetup(){
   
    canvas.width = 320;
    canvas.height = 180;

    player.x = 8 * tileSize;
    player.y = 7 * tileSize;

}

function drawGameArcadeInterior(ctx){
    ctx.drawImage(arcadeBackgroundImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(arcadeYogaCatImg, arcadeYogaCat.x, arcadeYogaCat.y, arcadeYogaCat.width, arcadeYogaCat.height);
    ctx.drawImage(arcadeCatDetectiveImg, arcadeCatDetective.x, arcadeCatDetective.y, arcadeCatDetective.width, arcadeCatDetective.height);
    ctx.drawImage(arcadeCatDetectiveAdventuresImg, arcadeCatDetectiveAdventures.x, arcadeCatDetectiveAdventures.y, arcadeCatDetectiveAdventures.width, arcadeCatDetectiveAdventures.height);
    ctx.drawImage(nextProjectImg, nextProject.x, nextProject.y, nextProject.width, nextProject.height);
    ctx.drawImage(arcadeGuideImg, arcadeGuide.x, arcadeGuide.y, arcadeGuide.width, arcadeGuide.height);   
    ctx.drawImage(mobileConsoleImg, mobileConsole.x, mobileConsole.y, mobileConsole.width, mobileConsole.height);
    ctx.drawImage(arcadeDeskImg, arcadeDesk.x, arcadeDesk.y, arcadeDesk.width, arcadeDesk.height);
    ctx.drawImage(plantImg, plant.x, plant.y, plant.width, plant.height);
}
function drawBackground(){
    ctx.fillStyle = "rgba(40, 56, 62, 0.4)"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function arcadeUpdate(){   
   checkCurrentPlayerImage();
   checkPlayerMoving();
   collisionWithGrid();
   setupInput();
   checkCollisionWithAnyObject();
   arcadeCollision();
}
function arcadeDraw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
    drawGameArcadeInterior(ctx);   
    drawBackground();    
    ctx.drawImage(playerIdle, Math.round(player.x), Math.round(player.y), player.width, player.height);
}

function arcadeLoop(){
    arcadeUpdate();
    arcadeDraw();
    requestAnimationFrame(arcadeLoop);
}

