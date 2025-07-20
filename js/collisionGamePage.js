function collisionDetection(){
    
}
function collisionGameDetection(x){

    //if player is touching wall, he cannot walk
    //if player is touching a field, get click event to get to that page

    if(player.x === (screenWidth-200) + "px"){
        player.x = parseInt(player.x) - 5 + "px";
    }
    if(player.x <= 0 + "px"){
        player.x = parseInt(player.x) + 5 + "px";
       
    }
    if(player.y === screenHeight + "px"){
        player.y = parseInt(player.y) - 5 + "px";
    }
    if(playerIdle.style.top === 0 + "px"){
        player.y = parseInt(player.y) + 5 + "px";
        
    }

  
   
    //check collision with any objects
   
    objectsCollision(player, cloudGame, "games/JumpingClouds.apk");
    objectsCollision(player, coinCollector, "games/CoinCollector.apk");
    objectsCollision(player, jumpingCat, "games/JumpingCat.apk");
    objectsCollision(player, platformer, "games/Platformer/index.html");
    if(x.matches){
        objectsCollision(player, catDetective, "games/CatDetectiveMobileGame.apk");
    }else{
        objectsCollision(player, catDetective, "games/CatDetective/index.html");
    }
    
    objectsCollision(player, slidePuzzle, "games/SlidePuzzle/index.html");
    
}

function objectsCollision(player, object, page){

    //player and objects positions
    let playerPositionY = parseInt(player.height) + parseInt(player.y);
    let objectPositionY = parseInt(object.height) + parseInt(object.y);
    let playerPositionX = parseInt(player.width) + parseInt(player.x);
    let objectPositionX = parseInt(object.width) + parseInt(object.x);
    let playerX = parseInt(player.x);
    let playerY = parseInt(player.y);
    let objectX = parseInt(object.x);
    let objectY = parseInt(object.y);
    
    //is player colliding with any object
    //open that page
    if(playerX < objectPositionX
        && playerPositionX > objectX
        && playerY  < objectPositionY
        && playerPositionY > objectY){
            
           
           
           // confirmToDownload();
          window.location.href = page;
            console.log(confirmToDownload());
            /* if(confirmToDownload() === true){
                window.location.href = page;
            } else{
                window.location.href = "games.html";
            } */
        
    }
   
   
}

//confirm downloading the game
function confirmToDownload(event){
    if(confirm('Do you want to download the game?')){
        return true;
    }else{
        window.location.href = "games.html";
        event.preventDefault();
        
    }
}
