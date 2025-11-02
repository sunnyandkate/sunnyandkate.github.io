function collisionGameDetection(x){

}
function collisionDetection(){

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
    
    objectsCollision(player, about, "about.html");
    objectsCollision(player, games, "games.html");
    objectsCollision(player, contact, "contact.html");
   
    objectsCollision(player, javaProjects, "javaProjects.html");
    objectsCollision(player, npc, "#", true);
}

function objectsCollision(player, object, page, value){

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
         window.location.href = page;
         speechBubble = value;      
    }
    if(speechBubble === true){
        npcSpeechBubble.style.display = "block";
        speechBubble = false;
    }else if(speechBubble === false){
        npcSpeechBubble.style.display = "none";
    }
   
}