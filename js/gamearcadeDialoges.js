let arcadeInfoBox = document.querySelector(".arcadeInfoBox");
let arcadeInfoContent = document.querySelector(".arcadeInfoContent");
let arcadeButtons = document.querySelector(".arcadeButtons");
let arcadeLink = document.querySelector(".arcade-link");
let arcadeStay = document.querySelector(".arcade-stay");
let closeArcadeInfoBtn = document.querySelector(".closeArcadeInfoBtn");
let currentDialogIndex = 0;

const consoleContainer = document.querySelector(".mobileGamesConsoleContainer");
const listContainer = document.querySelector(".mobileGamesList");
const closeConsoleBtn = document.querySelector(".closeConsoleBtn");
let mobileConsoleOpen = false;


//ARCADE GUIDE DIALOG
const arcadeGuideDialog = [
    "Hey, welcome to the arcade!", 
    "This is a little space where we showcase some of the games the developer built.",
    "All the programming is done in Unity and exported as WebGL builds so they run right in your browser.",
    "The pixel art sprites are drawn by the developer using Aseprite.",
    "Feel free to look around and try out any of the arcades,",
     `or you can check out some other projects on <a href="https://sunnyandkate.itch.io" onclick="event.stopPropagation(); window.open('https://sunnyandkate.itch.io', '_blank', 'noopener'); return false;" class="arcade-link">Itch.io</a>!`
];

function npcDialog(){   
    arcadeInfoBox.style.display = "flex";
    renderDialog();      
}
function renderDialog(){
    nextPlayerX = arcadeDesk.x - 2 * tileSize;
    nextPlayerY = arcadeDesk.y;
   

    arcadeInfoContent.innerHTML = arcadeGuideDialog[currentDialogIndex];
    if(currentDialogIndex === arcadeGuideDialog.length -1){ 
        nextBtn.innerHTML = ""; 
        nextBtn.style.display = "none";
        arcadeButtons.style.display = "flex";        
    }else{
        arcadeButtons.style.display = "none";
        nextBtn.style.display = "flex";  
          
        nextBtn.innerHTML = `<img src="images/arrow.png" alt="Next" style="width: 16px; height: 16px; pointer-events: none; vertical-align: middle;">`; 
    }
      
}
arcadeLink.addEventListener('click', function(){
    window.open('https://sunnyandkate.itch.io', '_blank', 'noopener');
});

arcadeStay.addEventListener('click', closeArcadeInfoBox);
closeArcadeInfoBtn.addEventListener('click', closeArcadeInfoBox);
nextBtn.addEventListener('click', continueDialog);
function continueDialog(){
     if(currentDialogIndex < arcadeGuideDialog.length - 1){
        currentDialogIndex++;  
        renderDialog();     
    }else{
        player.y += 5;
        closeInfoStand();
        closeInfoStandDialog();          
    }
     
}
function closeArcadeInfoBox(){
    player.x -= 10;
    closeInfoStand();
    closeInfoStandDialog();
}

function closeInfoStand(){
    houseClick = false;
    player.x = nextPlayerX;
    player.y = nextPlayerY;  
}

function closeInfoStandDialog(){ 
    arcadeButtons.style.display = "none";
    arcadeInfoBox.style.display = "none";
    currentDialogIndex = 0; 
    arcadeInfoBoxOpen = false;
}
//click on arcade guide
function enterInfoStandByClicking(clickX, clickY, house){
   
     if (
        clickX >= house.x &&
        clickX <= house.x + house.width &&
        clickY >= house.y &&
        clickY <= house.y + house.height
    ){
      
            npcDialog(); 
            houseClick = true;  
            dialogButtons.style.display = "none";
            nextBtn.style.display = "flex";            
        }
}
//click on next project
function enterNextProjectByClicking(clickX, clickY, house){
     if (
        clickX >= house.x &&
        clickX <= house.x + house.width &&
        clickY >= house.y &&
        clickY <= house.y + house.height
    ){         
            dialogBoxOpen = true;
            houseClick = true;  
            dialogButtons.style.display = "none";
            nextBtn.style.display = "none"; 
            openNextProjectModal();           
        }
}
function openNextProjectModal(){
    nextPlayerX = nextProject.x;
    nextPlayerY = nextProject.y + nextProject.height; 
     dialogContent.innerHTML = "<strong>Coming Soon:</strong>  This game is under maintenance. Check back later for a brand-new game";
}

function closeAllDialoges(){  
  // closeInfoStandDialog();
   //if no collision than close the mobile console modal
   consoleContainer.style.display = "none";
}

/*mobile game console*/
function createScrollGameList(){
    nextPlayerX = mobileConsole.x + 32;
    nextPlayerY = mobileConsole.y; 
    mobileConsoleOpen = true;
    consoleContainer.style.display = "flex";
    listContainer.innerHTML = "";
    

    mobileGamesList.forEach((game, index) => {
        const gameBtn = document.createElement("button");
        gameBtn.className = "mobile-game-list-btn";
        gameBtn.dataset.gameId = game.id;
        const gameTitle = document.createElement("span");
        gameTitle.className = "gameTitle";
        gameTitle.textContent = game.title;
        gameBtn.appendChild(gameTitle);

         if (index === 0) {
            gameBtn.classList.add("active");
            updateGameList(game);
        }

        gameBtn.addEventListener("click", () => {
         const allButtons = listContainer.querySelectorAll(".mobile-game-list-btn");
            allButtons.forEach(btn => btn.classList.remove("active"));

            gameBtn.classList.add("active");

            updateGameList(game);
         });
        listContainer.appendChild(gameBtn);
    });
}
function updateGameList(gameSelected){
    const topTitle = document.querySelector(".topTitle");
    const formatText = document.querySelector(".meta-format");
    const sizeText = document.querySelector(".meta-size");
    const downloadMobileGameBtn = document.querySelector(".mobile-game-download")
  
    topTitle.textContent = gameSelected.title;
    formatText.textContent = gameSelected.format;
    sizeText.textContent = gameSelected.size;

    downloadMobileGameBtn.onclick = () => {
        window.open(gameSelected.downloadLink, "_blank");
    };
}

closeConsoleBtn.addEventListener("click", closeConsoleModal);
function closeConsoleModal(){
    consoleContainer.style.display = "none";
    mobileConsoleOpen = false;
    player.x = nextPlayerX;
    player.y = nextPlayerY;
}
//click on mobile console
function enterMobileConsoleByClicking(clickX, clickY, house){
   
     if (
        clickX >= house.x &&
        clickX <= house.x + house.width &&
        clickY >= house.y &&
        clickY <= house.y + house.height
    ){
           createScrollGameList();
           houseClick = true;                      
        }
}

