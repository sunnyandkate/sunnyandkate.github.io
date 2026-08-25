let javaHutInfoBox = document.querySelector(".javaHutInfoBox");
let javaHutInfoContent = document.querySelector(".javaHutInfoContent");
let closeJavaHutInfoBtn = document.querySelector(".closeJavaHutInfoBtn");
let websiteBtn = document.querySelector(".websiteBtn");
let codeBtn = document.querySelector(".codeBtn");
let closeModalBtn = document.querySelector(".closeModalBtn");
let currentDialogIndex = 0;
let backBtn = document.querySelector(".backBtn");

let infoStandBoxOpen = false;

const javaHutGuideDialog = [
    "Welcome to the hut! This is the place for all Java related Projects.",
    "Feel free to look around and try out some displays, ",
    "where you can download standalone JAR application files.",
    "Just remember that you will need Java runtime installed on your computer", 
    "to run and test those desktop apps!"   
];

function npcDialog(){
    javaHutInfoBox.style.display = "flex";
    renderDialog();  
}
function renderDialog(){
    nextPlayerX = javaHutGuide.x - 2 * tileSize;
    nextPlayerY = javaHutGuide.y;
    javaHutInfoContent.innerHTML = javaHutGuideDialog[currentDialogIndex];
    if(currentDialogIndex === javaHutGuideDialog.length -1){ 
        nextBtn.innerText = ""; 
       
    }else{
        nextBtn.style.display = "flex";
        nextBtn.innerHTML = `<img src="images/arrow.png" alt="Next" style="width: 16px; height: 16px; pointer-events: none; vertical-align: middle;">`; 
    }
}
nextBtn.addEventListener('click', continueDialog);
function continueDialog(){
     if(currentDialogIndex < javaHutGuideDialog.length - 1){
        currentDialogIndex++;  
        renderDialog();     
    }else{
        player.y += 5;
        closeInfoStand();
        closeInfoStandDialog();
    }
}
//close btn for java hut info stand
closeJavaHutInfoBtn.addEventListener('click', closeJavaHutInfoBox);
function closeJavaHutInfoBox(){
    player.x -= 10;
    closeInfoStand();
    closeInfoStandDialog();
}
//click on info stand
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
function closeInfoStand(){
    houseClick = false;
    player.x = nextPlayerX;
    player.y = nextPlayerY;
  
}

function closeInfoStandDialog(){  
    javaHutInfoBox.style.display = "none";
    currentDialogIndex = 0;
    isDialogActive = false;
}


function closeAllDialoges(){
//if the player walks away from the info stand, the info dialog closes
   closeInfoStandDialog();
}

backBtn.addEventListener("click", function(){
    player.y = nextPlayerY;
    certificateModal.style.display = "none";   
});




