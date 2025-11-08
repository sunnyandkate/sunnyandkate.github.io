
const screenWidth = screen.width;
const screenHeight = screen.height;


//player
var playerIdle = document.querySelector(".player");
//player Idle
let playerIdleArray = ["images/player_left1.png", "images/player_right1.png", "images/player_up1.png", "images/player_down1.png"];

//player moving
let playerLeftArray =["images/player_left2.png", "images/player_left3.png"];
let playerRightArray = ["images/player_right2.png", "images/player_right3.png"];
let playerUpArray = ["images/player_up3.png", "images/player_up2.png"];
let playerDownArray = ["images/player_down2.png", "images/player_down3.png"];


let playerImg = "images/player_down1.png";

let player = {
    img : playerImg,
    y : "10px",
    x : "10px",
    width: "25px",
    height: "25px"

};


function setupPlayer(x){
    playerIdle.src = playerIdleArray[3];
    playerIdle.style.position = "absolute";
    playerIdle.style.top = player.y;
    playerIdle.style.left = player.x;
     if(x.matches){
        playerIdle.style.width = player.width;
    playerIdle.style.height = player.height ;
    }else{
        playerIdle.style.width = player.width * (2 + "px");
        playerIdle.style.height = "50px";
    } 
  
    currentPlayer = playerIdle.getAttribute('src');
}

//objects on the screen

var aboutBtn = document.querySelector(".aboutBtn");
var gamesBtn = document.querySelector(".gamesBtn");
var contactBtn = document.querySelector(".contactBtn");
var javaBtn = document.querySelector(".javaBtn");
var npcOne = document.querySelector(".npc");


function DisplayObjects(name, x, y, width, height, position){
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.position = position;
}



var about;
var games;
var contact;

var javaProjects;
var npc;
var npcSpeechBubble = document.querySelector(".npcSpeechBubble");
var speechBubble = false;


npcOne.addEventListener("click", function(){
    checkSpeechBubble();
     
});

function checkSpeechBubble(){
      
    if(speechBubble === true){
        npcSpeechBubble.style.display = "none";
        speechBubble = false;
    }else if(speechBubble === false){
        npcSpeechBubble.style.display = "block";
        speechBubble = true;
    }
}



function queryFunction(x){
    if(x.matches){
        npc = new DisplayObjects("npcOne", "80px", "100px", "25px", "25px", "absolute");
        about = new DisplayObjects("about", "260px", "320px", "100px", "100px", "absolute");
        games = new DisplayObjects("games", "200px", "100px", "100px", "100px", "absolute");
        contact = new DisplayObjects("contact", "200px", "250px", "100px", "100px", "absolute");
        javaProjects = new DisplayObjects("java projects", "40px", "200px", "100px", "100px", "absolute");
     
    }else{
        npc = new DisplayObjects("npcOne", "500px", "500px", "50px", "50px", "absolute");
        about = new DisplayObjects("about", "200px", "400px", "200px", "150px", "absolute");
        games = new DisplayObjects("games", "800px", "200px", "200px", "150px", "absolute");
        contact = new DisplayObjects("contact", "800px", "500px", "200px", "150px", "absolute");
        javaProjects = new DisplayObjects("java projects", "450px", "100px", "200px", "150px", "absolute");
        
    }
    
}

function setObjectsPositions(){
  
    npcOne.style.position = npc.position;
    npcOne.style.top = npc.y;
    npcOne.style.left = npc.x;
    npcOne.style.width = npc.width;
    npcOne.style.height = npc.height;
    
   
    aboutBtn.style.position = about.position;
    aboutBtn.style.top = about.y;
    aboutBtn.style.left = about.x;
    aboutBtn.style.width = about.width;
    aboutBtn.style.height = about.height;
   
    gamesBtn.style.position = games.position;
    gamesBtn.style.top = games.y;
    gamesBtn.style.left = games.x;
    gamesBtn.style.width = games.width;
    gamesBtn.style.height = games.height;
   
    contactBtn.style.position = contact.position;
    contactBtn.style.top = contact.y;
    contactBtn.style.left = contact.x;
    contactBtn.style.width = contact.width;
    contactBtn.style.height = contact.height;
  
    javaBtn.style.position = javaProjects.position;
    javaBtn.style.top = javaProjects.y;
    javaBtn.style.left = javaProjects.x;
    javaBtn.style.width = javaProjects.width;
    javaBtn.style.height = javaProjects.height;
   
}
