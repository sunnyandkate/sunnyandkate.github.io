let welcome = document.querySelector(".welcome");
let infoStandBox = document.querySelector(".infoStandBox");
let infoStandContent = document.querySelector(".infoStandContent");
let closeInfoStandBtn = document.querySelector(".closeInfoStandBtn");

document.addEventListener('click', hideWelcomeMessage);
document.addEventListener('keydown', hideWelcomeMessage);
//WELCOME MESSAGE
function checkWelcomeMessage(){
    //only show the welcome message at the beginning
    const welcomeMessage = sessionStorage.getItem('showWelcomeMessage');
    if(!welcomeMessage){
       welcome.style.display = 'flex';
       sessionStorage.setItem('showWelcomeMessage', 'true');
    }else{
        welcome.style.display = 'none';      
    }
}
function hideWelcomeMessage(){  
    welcome.style.display ="none";  
}
//NAVIGATION INFO
toggleBtn.addEventListener('click', hideNavigationInfo);
showInfo.addEventListener('click', showNavigationInfo);

function hideNavigationInfo(){   
    navigationInfo.style.display = "none";   
    showInfo.style.display = "block";
}
function showNavigationInfo(){   
    navigationInfo.style.display = "block";   
    showInfo.style.display = "none";
}

//INFO STAND

let currentDialogIndex = 0;

const infoNPCDialog = [
    // Page 1: Welcome
    "Hi and Welcome!",
    "This interactive site is my programming portfolio", 
    "built from scratch using HTML5 Canvas and JavaScript.",
    
    // Page 2: Houses
    "The houses all around the island represent my previous projects.",
    "Feel free to walk right into them or just click on them,", 
    "to explore each one.",
    
    // Page 3: Resume
    "To view my resume directly",
    "simply click the signboard above. "  
];

function enterInfoStandByClicking(clickX, clickY, house, nextPlayerX, nextPlayerY){ 
   
     if (
        clickX >= house.x &&
        clickX <= house.x + house.width &&
        clickY >= house.y &&
        clickY <= house.y + house.height
    ){
            npcDialog(); 
            houseClick = true;  
            nextBtn.style.display = "flex";
        }
}

//PHONEBOOTH
function enterPhoneBoothByClicking(clickX, clickY, house, nextPlayerX, nextPlayerY){
     if (
        clickX >= house.x &&
        clickX <= house.x + house.width &&
        clickY >= house.y &&
        clickY <= house.y + house.height
    ){
        //move the player infront of the phonebooth
        player.x = nextPlayerX;
        player.y = nextPlayerY;

        houseClick = true;   
        if (!phoneModal.classList.contains('open')) {
            phoneModal.classList.add('open');
        }
    }
}
function openPhoneBoothModal(){
    if (!phoneModal.classList.contains('open')) {
            phoneModal.classList.add('open');
        }
}
closeModal.addEventListener("click", closePhoneBoothModal);
    
function closePhoneBoothModal(){
    nextPlayerX = phoneBooth.x;
    nextPlayerY = phoneBooth.y + phoneBooth.height;
    //move player in front of the phonebooth
    player.x = nextPlayerX;
    player.y = nextPlayerY;
    houseClick = false;
    phoneModal.classList.remove("open");  
}
//MAILBOX
function enterMailboxByClicking(clickX, clickY, house, nextPlayerX, nextPlayerY){
     if (
        clickX >= house.x &&
        clickX <= house.x + house.width &&
        clickY >= house.y &&
        clickY <= house.y + house.height
    ){
        //move player in front of the mailbox
        player.x = nextPlayerX;
        player.y = nextPlayerY;
        houseClick = true;   
        if (!mailboxModal.classList.contains('open')) {
            mailboxModal.classList.add('open');
        }
    }
}
function openMailboxModal(){
    
    if (!mailboxModal.classList.contains('open')) {
            mailboxModal.classList.add('open');
        }
}
closeMailbox.addEventListener("click", closeMailboxModal);

function closeMailboxModal(){
    nextPlayerX = mailbox.x;
    nextPlayerY = mailbox.y + mailbox.height;
    //move player in front of the mailbox
    player.x = nextPlayerX;
    player.y = nextPlayerY;
    houseClick = false;
    mailboxModal.classList.remove("open");
}
//INFOSTAND
function npcDialog(){
    infoStandBox.style.display = "block";
    renderDialog();  
}
function renderDialog(){  
    nextPlayerX = infoNPC.x;
    nextPlayerY = infoNPC.y + infoNPC.height + 2 * tileSize;
    infoStandContent.textContent = infoNPCDialog[currentDialogIndex];
    if(currentDialogIndex === infoNPCDialog.length -1){
        nextBtn.innerHTML = "";
    }else{
        nextBtn.style.display = "flex";
        nextBtn.innerHTML = `<img src="images/arrow.png" alt="Next" style="width: 16px; height: 16px; pointer-events: none; vertical-align: middle;">`; 
    }
}
nextBtn.addEventListener('click', continueDialog);
function continueDialog(){
     if(currentDialogIndex < infoNPCDialog.length - 1){
        currentDialogIndex++;
        renderDialog();
    }else{
        closeInfoStand();
        closeInfoStandDialog();
    }
}
//close btn for info stand
closeInfoStandBtn.addEventListener('click', closeInfoStandBox);
function closeInfoStandBox(){
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
    infoStandBox.style.display = "none";
    currentDialogIndex = 0; 
    infoStandBoxOpen = false;
}

//if the player is not colliding with any objects, close the dialog boxes
function closeAllDialoges(){
    mailboxModal.classList.remove("open");
    phoneModal.classList.remove("open");
}


function houseDialog(house, action, page){
    
    dialogContent.innerHTML = `do you want to ${action} the ${house.name}`;
    dialogButtons.style.display = "flex";
    nextBtn.style.display = "none";
    //save the position of the player next to the house, so he doesn't collide anymore
    nextPlayerX = house.x;
    nextPlayerY = house.y + house.height;

    goInsideBtn.onclick = function(){
        window.location.href = page;
        houseClick = false;
    };
    stayOutsideBtn.onclick = function(){
        dialogBox.style.display = "none";
        houseClick = false;
    };    
}