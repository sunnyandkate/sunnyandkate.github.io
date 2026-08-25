let selectedProject = "";
let selectedSourceCode = "";
let projectModal = document.querySelector(".projectModal");
let certificateModal = document.querySelector(".certificateModal");

function javaHutCollision(){
    collisionDetection();
    checkJavaHutExit();
    changeDialogText(player, slotMachine, "../games/JavaProjects/Slotmachine.jar", "https://github.com/sunnyandkate/Slotmachine", true, "slotMachine");
    changeDialogText(player, calculator, "../games/JavaProjects/Calculator.jar", "https://github.com/sunnyandkate/Calculator", true, "calculator");
    changeDialogText(player, textEditor, "../games/JavaProjects/TextEditor.jar", "https://github.com/sunnyandkate/TextEditor", true, "textEditor");
    changeDialogText(player, javaCertificate, "javaCertificate.html", "#", false, "javaCertificate");
    checkInfoStandCollision(player, javaHutGuide);
}

//Click on Houses
canvas.addEventListener("click", function(e){
   const { clickX, clickY } = getGameClickCoords(e);

    enterJavaProjectByClicking(clickX, clickY, slotMachine, "see", "../games/JavaProjects/Slotmachine.jar", "https://github.com/sunnyandkate/Slotmachine"); 
    enterJavaProjectByClicking(clickX, clickY, calculator, "see", "../games/JavaProjects/Calculator.jar", "https://github.com/sunnyandkate/Calculator"); 
    enterJavaProjectByClicking(clickX, clickY, textEditor, "see", "../games/JavaProjects/TextEditor.jar", "https://github.com/sunnyandkate/TextEditor"); 
    showJavaCertificateByClicking(clickX, clickY, javaCertificate);   
    enterInfoStandByClicking(clickX, clickY, javaHutGuide);
});



function changeDialogText(player, object, page, sourceCode, value, dialogText){
   
    objectCollision(player, object, page, value, dialogText);

    if(collision === true){
        switch(dialogText){
            case "slotMachine":
                selectedProject = page;
                selectedSourceCode = sourceCode;
                dialogContent.innerHTML = "<strong>Slotmachine:</strong>  Do you want to have a look at this Project?";
                dialogButtons.style.display = "flex";
                nextPlayerX = slotMachine.x;
                nextPlayerY = slotMachine.y + slotMachine.height;

                goInsideBtn.onclick = function(){                    
                    openProjectModal();
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                };                   
                break;
            case "calculator":
                selectedProject = page;
                selectedSourceCode = sourceCode;
                dialogContent.innerHTML = "<strong>Calculator:</strong>  Do you want to have a look at this Project?";
                dialogButtons.style.display = "flex";
               
                nextPlayerX = calculator.x;
                nextPlayerY = calculator.y + calculator.height ;
 
                goInsideBtn.onclick = function(){                    
                    openProjectModal();
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                };                   
                break;
            case "textEditor":
                selectedProject = page;
                selectedSourceCode = sourceCode;
                dialogContent.innerHTML = "<strong>TextEditor:</strong>  Do you want to have a look at this Project?";
                dialogButtons.style.display = "flex";
               
                nextPlayerX = textEditor.x;
                nextPlayerY = textEditor.y + textEditor.height ;
 
                goInsideBtn.onclick = function(){                    
                    openProjectModal();
                };
                stayOutsideBtn.onclick = function(){
                    player.y += 10;
                    dialogBox.style.display = "none";
                };      
                break;
           
            case "javaCertificate":
                selectedProject = page;
                nextPlayerX = javaCertificate.x;
                nextPlayerY = javaCertificate.y + javaCertificate.height;
                showJavaCertificate();
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

websiteBtn.addEventListener('click', visitProjectWebsite);
function visitProjectWebsite(event){
    event.preventDefault();
  
    const userConfirmed = confirm('Do you want to download the jar file?');
  
    if(userConfirmed){
        window.location.href = selectedProject;
    }
  
}
//view source code
codeBtn.addEventListener('click', viewSourceCode);
function viewSourceCode(){
    window.open(selectedSourceCode, '_blank', 'noopener');
}
closeModalBtn.addEventListener('click', closeProjectModal);
function closeProjectModal(){
    projectModal.style.display = "none";
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

//java projects

function enterJavaProjectByClicking(clickX, clickY, house, action, page, sourceCode){
    
    if (
        clickX >= house.x &&
        clickX <= house.x + house.width &&
        clickY >= house.y &&
        clickY <= house.y + house.height
    ){
        selectedSourceCode = sourceCode;
        dialogBoxOpen = true;
        houseClick = true;        
        houseDialog(house, action, page);     
    }   
}


function houseDialog(house, action, page){  
    selectedProject = page; 
    dialogContent.innerHTML = `do you want to ${action} the ${house.name}`;
    dialogButtons.style.display = "flex";
    nextBtn.style.display = "none";
    //save the position of the player next to the java project, so he doesn't collide anymore
    nextPlayerX = house.x;
    nextPlayerY = house.y + house.height;

    goInsideBtn.onclick = function(){
        openProjectModal();
        houseClick = false;
    };
    stayOutsideBtn.onclick = function(){
        dialogBox.style.display = "none";
        houseClick = false;
    };    
}
function showJavaCertificate(){ 
    certificateModal.style.display = "flex";
}
function showJavaCertificateByClicking(clickX, clickY, house){
     if (
        clickX >= house.x &&
        clickX <= house.x + house.width &&
        clickY >= house.y &&
        clickY <= house.y + house.height
    ){
        nextPlayerX = javaCertificate.x;
        nextPlayerY = javaCertificate.y + javaCertificate.height;
        certificateModal.style.display = "flex";
    }
}
function checkJavaHutExit() {  
    if (player.x > 9 * tileSize && player.x < 11 * tileSize && 
        player.y > 7 * tileSize && player.y < 9 * tileSize) {
        document.getElementById("fade-box").classList.remove("fade-out"); 

        sessionStorage.setItem('spawnX', '8');
        sessionStorage.setItem('spawnY', '8');
        setTimeout(() => window.location.href = "sunnyandkate.html", 600)
    }
}