const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

var canWalk = true;


function setupInput(){

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
}

function keyPressed(e){
    checkCurrentPlayerImage();
    collisionDetection();
    collisionGameDetection(x);
    hideWelcomeMessage();
    var key = e.keyCode;

    switch(key){
        case LEFT_KEY:
            walkLeft();         
            break;
        case RIGHT_KEY:
            walkRight();
            break;
        case UP_KEY:
            walkUp();
            break;
        case DOWN_KEY:
            walkDown();
            break;
    }
    e.preventDefault();

}
function keyReleased(e){
    var key = e.keyCode;

    switch(key){
        case LEFT_KEY:
            standingLeft();         
            break;
        case RIGHT_KEY:
            standingRight();
            break;
        case UP_KEY:
            standingUp();
            break;
        case DOWN_KEY:
            standingDown();
            break;
        }
        e.preventDefault();
}
function standingLeft(){
    playerIdle.src = playerIdleArray[0];
   
}
function standingRight(){
    playerIdle.src = playerIdleArray[1];
   
}
function standingUp(){
    playerIdle.src = playerIdleArray[2];
   
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
function walkLeft(){

    player.x = parseInt(player.x) - 5 + "px";
    playerIdle.style.left = player.x;
    
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
function walkRight(){
  
    player.x = parseInt(player.x) + 5 + "px";
    playerIdle.style.left = player.x;
       

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
function walkUp(){
      
        player.y = parseInt(player.y) - 5 + "px";
        playerIdle.style.top = player.y;

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
function walkDown(){

    player.y = parseInt(player.y) + 5 + "px";
    playerIdle.style.top = player.y;

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
function checkCurrentPlayerImage(){
    currentPlayer = playerIdle.getAttribute('src');
}
