var canWalk = true;
let isMoving = false;

function setupInput(){  
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
}

function keyPressed(e){
    let keyCode = e.key;
    if(keyCode.length === 1){
        keyCode = keyCode.toLowerCase();
    }
  
    updatePlayerPosition();
    
    isMoving = true;
  
    switch(keyCode){
        case 'ArrowUp':
        case 'w':
            walkUp();
            break;
        case 'ArrowLeft':
        case 'a':
            walkLeft();         
            break;
        case 'ArrowDown':
        case 's':
            walkDown();
            break;
        case 'ArrowRight':
        case 'd':
            walkRight();
            break;   
        case 'Escape':
            closeDialogBox();
            closeArcadeInfoBox();
            break;    
    }
    e.preventDefault();
  
}

function keyReleased(e){
    let keyCode = e.key;
    if(keyCode.length === 1){
        keyCode = keyCode.toLowerCase();
    }
    switch(keyCode){
        case 'ArrowUp':
        case 'w':
            standingUp();
            break;
        case 'ArrowLeft':
        case 'a':
            standingLeft();         
            break;
        case 'ArrowDown':
        case 's':
            standingDown();
            break;
        case 'ArrowRight':
        case 'd':
            standingRight();
            break;
    }        
        e.preventDefault();
}