window.addEventListener("DOMContentLoaded", () => document.getElementById("fade-box").classList.add("fade-out"));

const canvas = document.getElementById('javaHutCanvas');
const ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = false;

window.onload = function(){
   resizeGame('javaHutCanvas');
   javaHutSetup();
   javaHutLoop();  
}
function javaHutSetup(){
   
    canvas.width = 320;
    canvas.height = 180;

    player.x = 8 * tileSize;
    player.y = 7 * tileSize;

}

function drawJavaHutInterior(ctx){
    ctx.drawImage(javaHutBackgroundImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(javaHutGuideImg, javaHutGuide.x, javaHutGuide.y, javaHutGuide.width, javaHutGuide.height);
    ctx.drawImage(slotMachineImg, slotMachine.x, slotMachine.y, slotMachine.width, slotMachine.height);
    ctx.drawImage(calculatorImg, calculator.x, calculator.y, calculator.width, calculator.height);
    ctx.drawImage(textEditorImg, textEditor.x, textEditor.y, textEditor.width, textEditor.height);
    ctx.drawImage(javaCertificateImg, javaCertificate.x, javaCertificate.y, javaCertificate.width, javaCertificate.height);
    ctx.drawImage(plantImg, plant.x, plant.y, plant.width, plant.height);
}


function javaHutUpdate(){   
   checkCurrentPlayerImage();
   checkPlayerMoving();
   collisionWithGrid();
   setupInput();
   checkCollisionWithAnyObject();
   javaHutCollision();
}
function javaHutDraw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
    drawJavaHutInterior(ctx);   
    ctx.drawImage(playerIdle, Math.round(player.x), Math.round(player.y), player.width, player.height);

}

function javaHutLoop(){
    javaHutUpdate();
    javaHutDraw();
    requestAnimationFrame(javaHutLoop);
}



