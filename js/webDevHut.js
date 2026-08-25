window.addEventListener("DOMContentLoaded", () => document.getElementById("fade-box").classList.add("fade-out"));

const canvas = document.getElementById('webDevHutCanvas');
const ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = false;

window.onload = function(){
   resizeGame('webDevHutCanvas');
   webDevHutSetup();
   webDevHutLoop();  
}
function webDevHutSetup(){
   
    canvas.width = 320;
    canvas.height = 180;

    player.x = 8 * tileSize;
    player.y = 7 * tileSize;

}

function drawWebDevHutInterior(ctx){
    ctx.drawImage(webDevHutBackgroundImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(webDevHutGuideImg, webDevHutGuide.x, webDevHutGuide.y, webDevHutGuide.width, webDevHutGuide.height);
    ctx.drawImage(invitationCardImg, invitationCard.x, invitationCard.y, invitationCard.width, invitationCard.height);
   // ctx.drawImage(websiteTwoImg, websiteTwo.x, websiteTwo.y, websiteTwo.width, websiteTwo.height);
    ctx.drawImage(nextWebsiteProjectImg, nextWebsiteProject.x, nextWebsiteProject.y, nextWebsiteProject.width, nextWebsiteProject.height);
    ctx.drawImage(cmsProjectImg, cmsProject.x, cmsProject.y, cmsProject.width, cmsProject.height);
    ctx.drawImage(fortuneCookieImg, fortuneCookie.x, fortuneCookie.y, fortuneCookie.width, fortuneCookie.height);
    ctx.drawImage(plantImg, plant.x, plant.y, plant.width, plant.height);
    ctx.drawImage(houseWindowImg, houseWindow.x, houseWindow.y, houseWindow.width, houseWindow.height);   
    ctx.drawImage(houseWindowTwoImg, houseWindowTwo.x, houseWindowTwo.y, houseWindowTwo.width, houseWindowTwo.height);   

}


function webDevHutUpdate(){   
   checkCurrentPlayerImage();
   checkPlayerMoving();
   collisionWithGrid();
   setupInput();
   checkCollisionWithAnyObject();
   webDevHutCollision();
}
function webDevHutDraw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
    drawWebDevHutInterior(ctx);   
    ctx.drawImage(playerIdle, Math.round(player.x), Math.round(player.y), player.width, player.height);

}

function webDevHutLoop(){
    webDevHutUpdate();
    webDevHutDraw();
    requestAnimationFrame(webDevHutLoop);
}

