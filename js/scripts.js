window.addEventListener("DOMContentLoaded", () => document.getElementById("fade-box").classList.add("fade-out"));

//------------------Canvas---------------//

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = false;

window.onload = function(){
    resizeGame('gameCanvas');
    setupGame();
    gameLoop();  
    checkWelcomeMessage();
}
function setupGame(){
    const urlParams = new URLSearchParams(window.location.search);
    const spawnX = sessionStorage.getItem('spawnX');
    const spawnY = sessionStorage.getItem('spawnY');
   
    if(spawnX && spawnY){
        player.x = parseInt(spawnX, 10) * tileSize;
        player.y= parseInt(spawnY, 10) * tileSize;

        sessionStorage.removeItem('spawnX');
        sessionStorage.removeItem('spawnY');
    }else{
        player.x = 6 * tileSize;
        player.y = 4 * tileSize;
    }
}

function update(){
    checkCurrentPlayerImage();
    checkPlayerMoving();
    collisionWithGrid();
    setupInput();   
    checkCollisionWithAnyObject();
    collisionWithHousesandNPC();     
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(backgroundimage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(gamesHouseImg, gameHut.x, gameHut.y, gameHut.width, gameHut.height);
    ctx.drawImage(javaHouseImg, javaHut.x, javaHut.y, javaHut.width, javaHut.height);
    ctx.drawImage(webdevHouseImg, webDevHut.x, webDevHut.y, webDevHut.width, webDevHut.height);
    ctx.drawImage(phoneBoothImg, phoneBooth.x, phoneBooth.y, phoneBooth.width, phoneBooth.height);
    ctx.drawImage(mailboxImg, mailbox.x, mailbox.y, mailbox.width, mailbox.height);
    ctx.drawImage(infoNPCImg, infoNPC.x, infoNPC.y, infoNPC.width, infoNPC.height);
    ctx.drawImage(infoHouseImg, infoHouse.x, infoHouse.y, infoHouse.width, infoHouse.height);
    ctx.drawImage(catNPCImg, catNPC.x, catNPC.y, catNPC.width, catNPC.height);
    ctx.drawImage(bunnyNPCImg, bunnyNPC.x, bunnyNPC.y, bunnyNPC.width, bunnyNPC.height);
    ctx.drawImage(wizardNPCImg, wizardNPC.x, wizardNPC.y, wizardNPC.width, wizardNPC.height);
   
    ctx.drawImage(playerIdle, Math.round(player.x), Math.round(player.y), player.width, player.height);
   if (!showStartOverlay) {
        drawPlayerSpotlightOverlay(ctx, player);
    }
}

function gameLoop(){

    update();
    draw();
    requestAnimationFrame(gameLoop);
}

