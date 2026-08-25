let webDevInfoBox = document.querySelector(".webDevInfoBox");
let webDevInfoContent = document.querySelector(".webDevInfoContent");
let closeWebDevInfoBtn = document.querySelector(".closeWebDevInfoBtn");
let websiteBtn = document.querySelector(".websiteBtn");
let codeBtn = document.querySelector(".codeBtn");
let closeModalBtn = document.querySelector(".closeModalBtn");
let currentDialogIndex = 0;

let infoStandBoxOpen = false;

const webDevGuideDialog = [
    "Hey there, Explorer! Welcome to the WebDevHut.",
    "This is the place where you will find all the developer's projects focusing on HTML, CSS, JavaScript and PHP.",
    "The developer is still working on this area, ",
    "so some of the projects are still in the making, but they are coming soon!",
    "You can interact with the desktops to launch the apps and find the source code organized on GitHub."
];

function npcDialog(){   
    webDevInfoBox.style.display = "flex";
    renderDialog();  
}
function renderDialog(){
    nextPlayerX = webDevHutGuide.x - 2 * tileSize;
    nextPlayerY = webDevHutGuide.y

    webDevInfoContent.innerHTML = webDevGuideDialog[currentDialogIndex];
    if(currentDialogIndex === webDevGuideDialog.length -1){ 
        nextBtn.innerText = ""; 
        nextBtn.style.display = "none";
    }else{
      nextBtn.style.display = "flex";
      nextBtn.innerHTML = `<img src="images/arrow.png" alt="Next" style="width: 16px; height: 16px; pointer-events: none; vertical-align: middle;">`;
    }
}
nextBtn.addEventListener('click', continueDialog);
function continueDialog(){
     if(currentDialogIndex < webDevGuideDialog.length - 1){
        currentDialogIndex++;  
        renderDialog();     
    }else{
        player.y += 5;
        closeInfoStand();
        closeInfoStandDialog();
    }
}
closeWebDevInfoBtn.addEventListener('click', closeWebDevInfoBox);
function closeWebDevInfoBox(){
    player.x -= 10;
    closeInfoStand();
    closeInfoStandDialog();
}

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
    webDevInfoBox.style.display = "none";
    currentDialogIndex = 0;
   // nextBtn.innerText = ">"; 
    isDialogActive =false;
}


function closeAllDialoges(){
//if the player walks away from the info stand, the info dialog closes
   closeInfoStandDialog();
}


/*Check if info stand boxe is opened*/
function checkInfoStandBox(){
    if(infoStandBoxOpen === true){
        webDevInfoBox.style.display = "none";
        infoStandBoxOpen = false;
    }else if(infoStandBoxOpen === false){
        webDevInfoBox.style.display = "flex";
        infoStandBoxOpen = true;
    }
}

//FORTUNE COOKIE

// Target the unique fortune modal components
const fortuneCookieModal = document.getElementById('fortuneCookieModal');
const fortuneCookieText = document.getElementById('fortuneCookieText');
const fortuneCookieAuthor = document.getElementById('fortuneCookieAuthor');
const fortuneCookieCloseBtn = document.getElementById('fortuneCookieCloseBtn');
let openedCookie = false;


async function openFortuneCookieModal() {

    player.x = nextPlayerX;
    player.y = nextPlayerY;

    if(openedCookie){
        fortuneCookieText.textContent = "Only one cookie a day.";
        fortuneCookieAuthor.textContent = "-Barista";
        fortuneCookieModal.classList.remove('fortuneCookieModalHidden');
        return;
    } 
    openedCookie = true;
  
  try {
    // Fetch entire array layout from local JSON asset file
    const response = await fetch('./fortunes.json');
    if (!response.ok) throw new Error("local data source fault");
    
    const fortunesArray = await response.json();
    
    const randomIndex = Math.floor(Math.random() * fortunesArray.length);
    const data = fortunesArray[randomIndex];
   
    fortuneCookieText.textContent = `"${data.message}"`;
    fortuneCookieAuthor.textContent = `- ${data.author}`;
    
    fortuneCookieModal.classList.remove('fortuneCookieModalHidden');
    
  } catch (error) {
    fortuneCookieText.textContent = '"The connection to the oracle is weak."';
    fortuneCookieAuthor.textContent = "- Fortune Teller";
    fortuneCookieModal.classList.remove('fortuneCookieHidden');
  }

  //JAVA connection
/*  try {
    // Fetch random row payload from Spring Boot MySQL instance
    const response = await fetch('http://localhost:8080/api/fortune');
    if (!response.ok) throw new Error("Backend connection fault");
    
    const data = await response.json();
    
   
    fortuneCookieText.textContent = `"${data.message}"`;
    fortuneCookieAuthor.textContent = `- ${data.author}`;
    
    fortuneCookieModal.classList.remove('fortuneCookieModalHidden');
    
  } catch (error) {
    fortuneCookieText.textContent = '"The connection to the oracle is weak."';
    fortuneCookieAuthor.textContent = "- Fortune Teller";
    fortuneCookieModal.classList.remove('fortuneCookieHidden');
  }*/
}


fortuneCookieCloseBtn.addEventListener("click", closeFortuneCookieModal);
function closeFortuneCookieModal(){
    player.x = nextPlayerX;
    player.y = nextPlayerY;
    fortuneCookieModal.classList.add('fortuneCookieModalHidden');
}