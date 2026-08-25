//DIALOG BOX
let dialogBox = document.querySelector(".dialogBox");
let dialogContent = document.querySelector(".dialogContent");
let dialogBoxOpen = false;
let closeDialogBtn = document.querySelector(".closeDialogBtn");

//PHONE BOOTH
const phoneModal = document.querySelector(".phoneModal");
const closeModal = document.querySelector(".closeModal");

//MAILBOX
const mailboxModal = document.querySelector(".mailboxModal");
const closeMailbox = document.querySelector(".closeMailbox");

//NAVIGATION INFO BOX
let toggleBtn = document.querySelector(".toggleBtn");
let showInfo = document.querySelector(".showInfo");
let navigationInfo = document.querySelector(".navigationInfo");

const dialogButtons = document.querySelector(".dialogButtons");
const goInsideBtn = document.querySelector(".goInside");
const stayOutsideBtn = document.querySelector(".stayOutside");
const nextBtn = document.querySelector(".nextBtn");

function enterHouseByClicking(clickX, clickY, house, action, page, nextPlayerX, nextPlayerY){
   
    if (
        clickX >= house.x &&
        clickX <= house.x + house.width &&
        clickY >= house.y &&
        clickY <= house.y + house.height
    ){
       
        dialogBoxOpen = true;
        houseClick = true;        
        houseDialog(house, action, page);  
     }   
}

closeDialogBtn.addEventListener("click", closeDialogBox);
function closeDialogBox(){
    player.x = nextPlayerX;
    player.y = nextPlayerY;
    dialogBox.style.display = "none";
    dialogBoxOpen = false;
    houseClick = false;
   
}

/*Check if dialog boxes are opened*/
function checkDialogBox(){
    if(dialogBoxOpen === true){
        dialogBox.style.display = "none";
        dialogBoxOpen = false;
    }else if(dialogBoxOpen === false){
        dialogBox.style.display = "flex";
        dialogBoxOpen = true;
    }
}

