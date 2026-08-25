const upBtn = document.querySelector(".upBtn");
const rightBtn = document.querySelector(".rightBtn");
const downBtn = document.querySelector('.downBtn');
const leftBtn = document.querySelector(".leftBtn");

let upBtnPressed = false;
let rightBtnPressed = false;
let downBtnPressed = false;
let leftBtnPressed = false;

//hide the welcome message on touchstart
document.addEventListener('touchstart', touchButton);

function touchButton(e){   
    hideWelcomeMessage(); 
}

upBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    buttonPressed = "upBtnPressed";
}, {passive: true});
upBtn.addEventListener('touchend', (e) => {
   e.preventDefault();
   buttonPressed = "";
   standingUp();     
});
rightBtn.addEventListener('touchstart', (e) => {    
    e.preventDefault();
    buttonPressed = "rightBtnPressed";
});
rightBtn.addEventListener('touchend', (e) => {
    e.preventDefault();
    buttonPressed = "";
    standingRight();
});
downBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    buttonPressed = "downBtnPressed";
});
downBtn.addEventListener('touchend', (e) => {
   e.preventDefault();
   buttonPressed = "";
   standingDown();     
});
leftBtn.addEventListener('touchstart', (e) => {    
    e.preventDefault();
    buttonPressed = "leftBtnPressed";
});
leftBtn.addEventListener('touchend', (e) => {
    e.preventDefault();
    buttonPressed = "";
    standingLeft();
});