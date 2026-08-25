
function collisionWithHousesandNPC(){
   
     //if player is touching a field, open the dialog
    collisionDetection();
    //check collision with any object and change the dialog text
    changeDialogText(player, catNPC, "#", true, "npcCatText");
    changeDialogText(player, bunnyNPC, "#", true, "npcBunnyText");
    changeDialogText(player, wizardNPC, "#", true, "npcWizardText");
    changeDialogText(player, gamesHouseDoor, "gameHut.html", true, "gameHut");
    changeDialogText(player, javaHouseDoor, "javaHut.html", true, "javaHut");
    changeDialogText(player, webdevHouseDoor, "webDevHut.html", true, "webDevHut");
    changeDialogText(player, phoneBooth, "#", false, "phoneBooth");
    changeDialogText(player, mailbox, "#", false, "mailboxText");

    checkInfoStandCollision(player, infoHouse, infoNPC.x, infoNPC.y + infoNPC.height);
}

//Click on Houses
canvas.addEventListener("click", function(e){

    const { clickX, clickY } = getGameClickCoords(e);

    enterHouseByClicking(clickX, clickY, gameHut, "enter", "gameHut.html", gameHut.x, gameHut.y + gameHut.height);
    enterHouseByClicking(clickX, clickY, javaHut, "enter", "javaHut.html", javaHut.x, javaHut.y + javaHut.height);
    enterHouseByClicking(clickX, clickY, webDevHut, "enter", "webDevHut.html",webDevHut.x, webDevHut.y + webDevHut.height);
    enterPhoneBoothByClicking(clickX, clickY, phoneBooth, phoneBooth.x + tileSize, phoneBooth.y + phoneBooth.height + tileSize/2);
    enterInfoStandByClicking(clickX, clickY, infoHouse, infoNPC.x, infoNPC.y + infoNPC.height + tileSize);
    enterMailboxByClicking(clickX, clickY, mailbox, mailbox.x, mailbox.y + mailbox.height);
});
function changeDialogText(player, object, page, value, dialogText){
    objectCollision(player, object, page, value, dialogText);

    if(collision === true){
      switch(dialogText){
            case "npcCatText":
                dialogContent.innerHTML = "<strong>CAT:  </strong>Welcome! Come inside and play some games that I built";
                dialogButtons.style.display = "none";
                nextBtn.style.display = "none";
                nextPlayerX = catNPC.x;
                nextPlayerY = catNPC.y + catNPC.height;
                break;
            case "npcBunnyText":
                dialogContent.innerHTML = "<strong>BUNNY:  </strong>Inside this hut you can find my Java programming projects";
                dialogButtons.style.display = "none";
                nextBtn.style.display = "none";
                nextPlayerX = bunnyNPC.x;
                nextPlayerY = bunnyNPC.y + bunnyNPC.height;
                break;
            case "npcWizardText":
                dialogContent.innerHTML = "<strong>WIZARD:  </strong>Inside this hut you can find my Web Development projects";
                dialogButtons.style.display = "none";
                nextBtn.style.display = "none";
                nextPlayerX = wizardNPC.x;
                nextPlayerY = wizardNPC.y + wizardNPC.height;
                break;
            case "infoNPCText":
                
                break;
            case "phoneBooth":
                openPhoneBoothModal();
                dialogButtons.style.display = "none";
                nextBtn.style.display = "none";
                currentCollision = "phoneBooth";
                break;
            case "mailboxText":
                openMailboxModal();
                dialogButtons.style.display = "none";
                nextBtn.style.display = "none";
                currentCollision = "mailBox";
                break;

            case "gameHut":
                dialogContent.textContent = "Do you want to enter The Game Arcade";
                dialogButtons.style.display = "flex";
                nextBtn.style.display = "none";
                nextPlayerX = gameHut.x;
                nextPlayerY = gameHut.y + gameHut.height;

                goInsideBtn.onclick = function(){
                    window.location.href = "gameHut.html";
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                };                   
                break;
            case "javaHut":
                dialogContent.textContent = "Do you want to enter The Java Code Hut?";
                dialogButtons.style.display = "flex";
                nextBtn.style.display = "none";
                nextPlayerX = javaHut.x;
                nextPlayerY = javaHut.y + javaHut.height;

                goInsideBtn.onclick = function(){
                    window.location.href = page;
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                };                  
                break;
            case "webDevHut":
                dialogContent.textContent = "Do you want to enter The Web Dev Hut?";
                dialogButtons.style.display = "flex";
                nextBtn.style.display = "none";
                nextPlayerX = webDevHut.x;
                nextPlayerY = webDevHut.y + webDevHut.height;

                goInsideBtn.onclick = function(){
                    window.location.href = page;
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                };                            
                break;
            default:
                currentCollision = "";
                break;
        }  
    }
}

let infoStandBoxOpen = false;

function checkInfoStandCollision(player, object, nextPlayerX, nextPlayerY){
     if(player.x < (object.x + object.width)
        && (player.x + player.width) > object.x
        && player.y < (object.y + object.height) 
        && (player.height + player.y) > object.y){

            collision = true;
         
            if(!infoStandBoxOpen){
               // dialogBoxOpen = true;
                infoStandBoxOpen = true;
                nextPlayerX = infoNPC.x;
                nextPlayerY = infoNPC.y + infoNPC.height + 2 * tileSize ;
                npcDialog();
             //   dialogButtons.style.display = "none";
                nextBtn.style.display = "flex";
                infoStand.style.display = "none";
            }
        }else{
            if(infoStandBoxOpen){
                closeInfoStandDialog();
            }
           infoStand.style.display = "block";
        }
}