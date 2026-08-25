function standingUp(){
    playerIdle.src = playerIdleArray[2];   
}
function standingLeft(){
    playerIdle.src = playerIdleArray[0]; 
}
function standingDown(){
    if(currentPlayer === playerIdleArray[1] || currentPlayer === playerLeftArray[1] 
        || currentPlayer === playerLeftArray[0] || currentPlayer === playerRightArray[1] 
        || currentPlayer === playerRightArray[0]  || currentPlayer === playerUpArray[0]
        || currentPlayer === playerUpArray[1] ||currentPlayer === playerDownArray[0]
        || currentPlayer === playerDownArray[1]){
        playerIdle.src = playerIdleArray[3];
    }
}

function standingRight(){
    playerIdle.src = playerIdleArray[1];   
}

function walkUp(){  
    player.y -= 5;    
    if(currentPlayer === playerIdleArray[1] || currentPlayer === playerIdleArray[0]
        || currentPlayer === playerIdleArray[2] || currentPlayer === playerIdleArray[3]){
        playerIdle.src = playerUpArray[1];    
    }
    else if(currentPlayer === playerUpArray[1]){
        playerIdle.src = playerUpArray[0];
    }
    else if(currentPlayer === playerUpArray[0]){
        playerIdle.src = playerUpArray[1];
    }       
}
function walkLeft(){    
   
    player.x -= 5;
    
    if(currentPlayer === playerIdleArray[0] || currentPlayer === playerIdleArray[1]
        || currentPlayer === playerIdleArray[2] || currentPlayer === playerIdleArray[3]){
        playerIdle.src = playerLeftArray[1];    
    }
    else if(currentPlayer === playerLeftArray[1]){
        playerIdle.src = playerLeftArray[0];
    }
    else if(currentPlayer === playerLeftArray[0]){
        playerIdle.src = playerLeftArray[1];
    }      
}
function walkDown(){
 
    player.y += 5;
    
    if(currentPlayer === playerIdleArray[1] || currentPlayer === playerIdleArray[0]
        || currentPlayer === playerIdleArray[2] || currentPlayer === playerIdleArray[3]){
        playerIdle.src = playerDownArray[1];
    }
    else if(currentPlayer === playerDownArray[1]){
        playerIdle.src = playerDownArray[0];
    }
    else if(currentPlayer === playerDownArray[0]){
        playerIdle.src = playerDownArray[1];
    }   
}

function walkRight(){

    player.x += player.speed;
     
    if(currentPlayer === playerIdleArray[1] || currentPlayer === playerIdleArray[0]
        || currentPlayer === playerIdleArray[2] || currentPlayer === playerIdleArray[3]){
        playerIdle.src = playerRightArray[1];    
    }
    else if(currentPlayer === playerRightArray[1]){
        playerIdle.src = playerRightArray[0];
    }
    else if(currentPlayer === playerRightArray[0]){
        playerIdle.src = playerRightArray[1];
    }  

}

function checkCurrentPlayerImage(){
    currentPlayer = playerIdle.getAttribute('src');
}

function updatePlayerPosition(){
     //save current position
    prevX = player.x;
    prevY = player.y;
}

function checkPlayerMoving(){

    player.tick++; 
    if (player.tick % 12 === 0) { 
        walkFrameIndex = (walkFrameIndex + 1) % playerRightArray.length;
    }

    switch(buttonPressed){
        case 'upBtnPressed':
            updatePlayerPosition();
            walkUpMobile();         
            break;
        case 'rightBtnPressed':
            updatePlayerPosition();
            walkRightMobile();            
            break;
        case 'downBtnPressed':
            updatePlayerPosition();
            walkDownMobile();            
            break;
        case 'leftBtnPressed':
            updatePlayerPosition();
            walkLeftMobile();            
            break;       
    }
}

function walkRightMobile(){
    player.x += player.speed;
      
    if (playerIdle.src !== playerRightArray[walkFrameIndex]) {
        playerIdle.src = playerRightArray[walkFrameIndex];
    }
}

function walkDownMobile(){
    player.y += player.speed;
       
    if (playerIdle.src !== playerDownArray[walkFrameIndex]) {
        playerIdle.src = playerDownArray[walkFrameIndex];
    }
}
function walkLeftMobile(){
    player.x -= player.speed;
        
    if (playerIdle.src !== playerLeftArray[walkFrameIndex]) {
        playerIdle.src = playerLeftArray[walkFrameIndex];
    }
}

function walkUpMobile(){
    player.y -= player.speed;
    
    if (playerIdle.src !== playerUpArray[walkFrameIndex]) {
        playerIdle.src = playerUpArray[walkFrameIndex];
    }
}
