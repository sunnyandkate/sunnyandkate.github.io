let selectedProject = "";
let selectedSourceCode = "";
let projectModal = document.querySelector(".projectModal");

function webDevHutCollision(){
    collisionDetection();
    checkWebDevHutExit();
    changeDialogText(player, cmsProject, "#", "#", true, "cmsProject");
    changeDialogText(player, invitationCard, "#", "#", true, "invitationCard");
    changeDialogText(player, websiteTwo, "#", "#", true, "websiteTwo");
    changeDialogText(player, nextWebsiteProject, "#", "#", true, "nextWebsiteProject");
    changeDialogText(player, fortuneCookie, "#", "#", true, "fortuneCookie");
    checkInfoStandCollision(player, webDevHutGuide);
   
}

//Click on Houses
canvas.addEventListener("click", function(e){
   const { clickX, clickY } = getGameClickCoords(e);

    enterWebProjectByClicking(clickX, clickY, cmsProject, "see", "#", "#"); 
    enterWebProjectByClicking(clickX, clickY, invitationCard, "see", "#", "#"); 
    enterWebProjectByClicking(clickX, clickY, websiteTwo, "see", "#", "#"); 
    enterNextWebProjectByClicking(clickX, clickY, nextWebsiteProject, "#", "#"); 
    showFortuneCookieByClicking(clickX, clickY, fortuneCookie, "open");
    enterInfoStandByClicking(clickX, clickY, webDevHutGuide);
});

//checks the house exit
function checkWebDevHutExit() {  
    if (player.x > 9 * tileSize && player.x < 11 * tileSize && 
        player.y > 7 * tileSize && player.y < 9 * tileSize) {
        document.getElementById("fade-box").classList.remove("fade-out"); 

        sessionStorage.setItem('spawnX', '11');
        sessionStorage.setItem('spawnY', '3');
        setTimeout(() => window.location.href = "sunnyandkate.html", 600)
    }
}

//changes text in dialog box
function changeDialogText(player, object, page, sourceCode, value, dialogText){
   
    objectCollision(player, object, page, value, dialogText);

    if(collision === true){
        switch(dialogText){
            case "cmsProject":
                selectedProject = page;
                selectedSourceCode = sourceCode;
                dialogContent.innerHTML = "<strong>CMS Project:</strong>  Coming in a few days. Check in later!";
               // dialogButtons.style.display = "flex";
                nextPlayerX = cmsProject.x;
                nextPlayerY = cmsProject.y + cmsProject.height;
/*
                goInsideBtn.onclick = function(){                    
                    openProjectModal();
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                };         */          
                break;
            case "invitationCard":
                selectedProject = page;
                selectedSourceCode = sourceCode;
                dialogContent.innerHTML = "<strong>Invitation Card:</strong>  Soon this project is going to be available. Check in later!";
             //   dialogButtons.style.display = "flex";
                nextPlayerX = invitationCard.x;
                nextPlayerY = invitationCard.y + invitationCard.height;
/*
                goInsideBtn.onclick = function(){                    
                    openProjectModal();
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                };        */           
                break;
             case "websiteTwo":
                selectedProject = page;
                selectedSourceCode = sourceCode;
                dialogContent.innerHTML = "<strong>WebsiteTwo:</strong>  Coming Soon";
                dialogButtons.style.display = "flex";
                nextPlayerX = websiteTwo.x;
                nextPlayerY = websiteTwo.y + websiteTwo.height;
/*
                goInsideBtn.onclick = function(){                    
                    openProjectModal();
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                };         */          
                break;
            case "fortuneCookie":
                nextPlayerX = fortuneCookie.x;
                nextPlayerY = fortuneCookie.y + fortuneCookie.height;
                dialogContent.innerHTML = "<strong>Fortune Cookie:</strong>  Do you want to open a fortune cookie?";
                dialogButtons.style.display = "flex";
                
                goInsideBtn.onclick = function(){                    
                    openFortuneCookieModal();
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                };            
                break;
            case "nextWebsiteProject":
                selectedProject = page;
                selectedSourceCode = sourceCode;
                dialogContent.innerHTML = "<strong>Next Project:</strong>  This website is under construction. Check in later!";
                dialogButtons.style.display = "none";
                nextPlayerX = nextWebsiteProject.x;
                nextPlayerY = nextWebsiteProject.y + nextWebsiteProject.height;
           
                break;
             
            default:
                currentCollision = "";
                break;
        }  
    }    
}

//project modal
function openProjectModal(){
    projectModal.style.display = "block";
}
//check out website 
websiteBtn.addEventListener('click', visitProjectWebsite);
function visitProjectWebsite(){
   // window.location.href = selectedGame;
    window.open(selectedProject, '_blank', 'noopener');
}
//check out source code
codeBtn.addEventListener('click', viewSourceCode);
function viewSourceCode(){
    window.open(selectedSourceCode, '_blakn', 'noopener');
}
closeModalBtn.addEventListener('click', closeProjectModal);
function closeProjectModal(){
    projectModal.style.display = "none";
}
//click on web projects

function enterWebProjectByClicking(clickX, clickY, house, action, page, sourceCode){
    selectedSourceCode = sourceCode;

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
//FORTUNE COOKIE
function showFortuneCookieByClicking(clickX, clickY, house, action){
     if (
        clickX >= house.x &&
        clickX <= house.x + house.width &&
        clickY >= house.y &&
        clickY <= house.y + house.height
    ){
       dialogBoxOpen = true;
        houseClick = true;   
        fortuneCookieDialog(house, action);  
    }  
}
function fortuneCookieDialog(house, action){
    dialogContent.innerHTML = `do you want to ${action} the ${house.name}`;
    dialogButtons.style.display = "flex";
    nextBtn.style.display = "none";
    //save the position of the player next to the java project, so he doesn't collide anymore
    nextPlayerX = house.x;
    nextPlayerY = house.y + house.height;

    goInsideBtn.onclick = function(){
        openFortuneCookieModal();
        houseClick = false;
    };
    stayOutsideBtn.onclick = function(){
        dialogBox.style.display = "none";
        houseClick = false;
    };   
}

function enterNextWebProjectByClicking(clickX, clickY, house, page, sourceCode){
    selectedSourceCode = sourceCode;

    if (
        clickX >= house.x &&
        clickX <= house.x + house.width &&
        clickY >= house.y &&
        clickY <= house.y + house.height
    ){
        dialogBoxOpen = true;
        houseClick = true;        
        nextProjectDialog(house, page);     
    }   
}
let isDialogActive = false;
//checks info stand collision 
function checkInfoStandCollision(player, object){
   
    if(player.x < (object.x + object.width)
        && (player.x + player.width) > object.x
        && player.y < (object.y + object.height) 
        && (player.height + player.y) > object.y){

            if(!isDialogActive){
                isDialogActive = true;
                npcDialog();          
                dialogButtons.style.display = "none";
                nextBtn.style.display = "flex";       
            }
             collision = true;  
    }

}


function houseDialog(house, action, page){
    selectedProject = page; 
   // dialogContent.innerHTML = `<strong>${house.name}:</strong>  do you want to ${action} the ${house.name}`;
    dialogContent.innerHTML = `<strong>${house.name}:</strong>  We are currently working on this project. Coming soon!!`;
 
   // dialogButtons.style.display = "flex";
    nextBtn.style.display = "none";
    //save the position of the player next to the webdev, so he doesn't collide anymore
    nextPlayerX = house.x;
    nextPlayerY = house.y + house.height;

 /*   goInsideBtn.onclick = function(){
        openProjectModal();
        houseClick = false;
    };
    stayOutsideBtn.onclick = function(){
        dialogBox.style.display = "none";
        houseClick = false;
    };   */ 
}

function nextProjectDialog(house, page){
    selectedProject = page; 
    dialogContent.innerHTML = `<strong>${house.name}:</strong> This website is under construction. Check in later!`;
    dialogButtons.style.display = "none";
    nextBtn.style.display = "none";
    //save the position of the player next to the webdev, so he doesn't collide anymore
    nextPlayerX = house.x;
    nextPlayerY = house.y + house.height;
}