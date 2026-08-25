let selectedGame = "";
const gameConfirmModal = document.querySelector(".gameConfirmModal");
const playGame = document.querySelector(".playGame");
const dontplayGame = document.querySelector(".dontplayGame");

playGame.addEventListener("click", playSelectedGame);
dontplayGame.addEventListener("click", closeGameplayModal);

function arcadeCollision(){
    collisionDetection();
    checkArcadeExit();
    changeDialogText(player, arcadeYogaCat, "games/YogaCatAdventureGame", true, "arcadeYogaCat");
    changeDialogText(player, arcadeCatDetective, "games/CatDetective", true, "arcadeCatDetective");
    changeDialogText(player, arcadeCatDetectiveAdventures, "games/CatDetectiveAdventures", true, "arcadeCatDetectiveAdventures");
    changeDialogText(player, nextProject, "#", true, "nextProject");
    checkGameInfoStandCollision(player, arcadeDesk);
    changeDialogText(player, mobileConsole, "#", false, "mobileConsole");
}

//Click on Houses
canvas.addEventListener("click", function(e){
   const { clickX, clickY } = getGameClickCoords(e);

    enterHouseByClicking(clickX, clickY, arcadeYogaCat, "play", "games/YogaCatAdventureGame");
    enterHouseByClicking(clickX, clickY, arcadeCatDetective, "play", "games/CatDetective");
    enterHouseByClicking(clickX, clickY, arcadeCatDetectiveAdventures, "play", "games/CatDetectiveAdventures"); 
    enterNextProjectByClicking(clickX, clickY, nextProject);
    enterInfoStandByClicking(clickX, clickY, arcadeGuide);
    enterMobileConsoleByClicking(clickX, clickY, mobileConsole);
});

function changeDialogText(player, object, page, value, dialogText){
   
    objectCollision(player, object, page, value, dialogText);

    if(collision === true){
        switch(dialogText){
            case "arcadeYogaCat":
                selectedGame = page;
                dialogContent.innerHTML = "<strong>Yoga Cat Adventure:</strong>  Do you want to play this game?";
                dialogButtons.style.display = "flex";
                nextPlayerX = arcadeYogaCat.x;
                nextPlayerY = arcadeYogaCat.y + arcadeYogaCat.height;

                goInsideBtn.onclick = function(){                    
                    openGameplayModal();
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                };                   
                break;
            case "arcadeCatDetective":
                selectedGame = page;
                dialogContent.innerHTML = "<strong>Cat Detective: The First Case</strong>  Do you want to play this game?";
                dialogButtons.style.display = "flex";
                nextPlayerX = arcadeCatDetective.x;
                nextPlayerY = arcadeCatDetective.y + arcadeCatDetective.height;

                goInsideBtn.onclick = function(){                    
                    openGameplayModal();
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                }; 
                break; 
            case "arcadeCatDetectiveAdventures":
                selectedGame = page;
                dialogContent.innerHTML = "<strong>Cat Detective Adventures:</strong>  Do you want to play this game?";
                dialogButtons.style.display = "flex";
                nextPlayerX = arcadeCatDetectiveAdventures.x;
                nextPlayerY = arcadeCatDetectiveAdventures.y + arcadeCatDetectiveAdventures.height;

                goInsideBtn.onclick = function(){                    
                    openGameplayModal();
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                };                  
                break;
            case "nextProject":
                selectedGame = page;
                dialogContent.innerHTML = "<strong>Coming Soon:</strong>  This game is under maintenance. Check back later for a brand-new game";
                dialogButtons.style.display = "flex";
                dialogButtons.style.display = "none";
                nextBtn.style.display = "none"; 
                nextPlayerX = nextProject.x;
                nextPlayerY = nextProject.y + nextProject.height;             
              break;
            case "mobileConsole":
                createScrollGameList();
                break;
            case "infoGuide":
              //  npcDialog();
                arcadeInfoBox.style.display = "flex";
                nextBtn.style.display = "flex";
                break;
            default:
                currentCollision = "";
                break;
        }  
    }    
}
function openGameplayModal(){
    gameConfirmModal.style.display = "block";
}
function playSelectedGame(){
    window.open(selectedGame, '_blank', 'noopener');
}
function closeGameplayModal(){
    gameConfirmModal.style.display = "none";
}

function checkArcadeExit() {  
    if (player.x > 9 * tileSize && player.x < 11 * tileSize && 
        player.y > 7 * tileSize && player.y < 9 * tileSize) {
        document.getElementById("fade-box").classList.remove("fade-out"); 

        sessionStorage.setItem('spawnX', '2');
        sessionStorage.setItem('spawnY', '5');
        setTimeout(() => window.location.href = "sunnyandkate.html", 600)
    }
}

let arcadeInfoBoxOpen = false;
//checks info stand collision 
function checkGameInfoStandCollision(player, object){
  

    if(player.x < (object.x + object.width)
        && (player.x + player.width) > object.x
        && player.y < (object.y + object.height) 
        && (player.height + player.y) > object.y){

            collision = true;

            //if arcade info box is not opened yet, run npcdialog once
            if(!arcadeInfoBoxOpen){
                arcadeInfoBoxOpen = true;
                npcDialog();          
                nextBtn.style.display = 'flex';
            }
               
    } else {
        //if there is no collision (player walks away) close the dialog
        if (arcadeInfoBoxOpen) {            
                closeInfoStandDialog(); 
            }
    }  
}

function houseDialog(house, action, page){
    selectedProject = page; 
    dialogContent.innerHTML = `do you want to ${action} the ${house.name}`;
    dialogButtons.style.display = "flex";
    nextBtn.style.display = "none";
    //save the position of the player next to the arcade, so he doesn't collide anymore
    nextPlayerX = house.x;
    nextPlayerY = house.y + house.height;

    goInsideBtn.onclick = function(){
        openGameplayModal();
        houseClick = false;
    };
    stayOutsideBtn.onclick = function(){
        dialogBox.style.display = "none";
        houseClick = false;
    };    
}