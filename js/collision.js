let collision = false;
let houseClick = false;
const infoStand = document.querySelector(".infoStand");

let currentCollision = "";

function collisionDetection(){
     
    //if player is touching wall, he cannot walk
    if(player.x + player.width > (canvas.width) ){
        player.x -= 5;
    }
    if(player.x <= 0 ){
        player.x += 5;
    }
    if(player.y + player.height > (canvas.height)){
        player.y -= 5;
    }
    if(player.y === 0 ){
        player.y += 5;
    } 
}

 function getGameClickCoords(e){

    if (!e) {
        return { clickX: 0, clickY: 0 };
    }
    const rect = canvas.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    
    const clickX = screenX * scaleX;
    const clickY = screenY * scaleY;
    return{
        clickX: clickX,
        clickY: clickY
    };
 }

function objectCollision(player, object, page, value, dialogText){
   
    if(player.x < (object.x + object.width)
        && (player.x + player.width) > object.x
        && player.y < (object.y + object.height) 
        && (player.height + player.y) > object.y){
            
            dialogBoxOpen = value;
            collision = true;                 
        }else{
            collision = false;            
        }
        if(dialogBoxOpen === true){
            dialogBox.style.display = "flex";
        }else if(dialogBoxOpen === false){
            dialogBox.style.display = "none";           
        }        
}

function checkCollisionWithAnyObject(){
    //if there is no collision at all, the dialogbox is hidden
   if(collision === false  && houseClick === false){
        closeAllDialoges();
        dialogBoxOpen = false;
        dialogContent.textContent = "";
   }   
}

function collisionWithGrid(){
    let tileSize = 16;

    let yOffset = player.height * 0.6;    
    let xOffset = player.width * 0.25;  
    
    let feetX = player.x + xOffset;
    let feetY = player.y + yOffset;
    let feetWidth = player.width - (xOffset * 2);
    let feetHeight = player.height - yOffset;

    const startCol = Math.floor(feetX / tileSize);
    const endCol   = Math.floor(((feetX + feetWidth) - 1) / tileSize);
    const startRow = Math.floor(feetY / tileSize);
    const endRow   = Math.floor(((feetY + feetHeight) - 1) / tileSize);

    for(let row = startRow; row <= endRow; row++){
        for(let col = startCol; col <= endCol; col++){

            //out of bounds check
            if (row < 0 || row >= mapGrid.length || col < 0 || col >= mapGrid[row].length) {
                player.x = prevX;
                player.y = prevY;
                return; 
            }
            const tileID = mapGrid[row][col];

            let tileLeft = col * tileSize;
            let tileRight = col * tileSize + tileSize;
            let tileTop = row * tileSize;
            let tileBottom = row * tileSize + tileSize;
            
            //tileID: 1 -> water, wall
            //tileID: 2 -> half Tiles

            if(tileID === 2 || tileID === 3){
                let tileOffset = 4;
                tileLeft += tileOffset;
                tileRight -= tileOffset;
                tileTop += tileOffset;
                tileBottom -= tileOffset;
            }
            if(tileID === 1 || tileID === 2){
                if(feetX < tileRight
                    && (feetX + feetWidth) > tileLeft
                    && feetY < tileBottom 
                    && (feetHeight + feetY) > tileTop){
                        player.x = prevX;
                        player.y = prevY;
                    }
            }
        }
    }   
}




