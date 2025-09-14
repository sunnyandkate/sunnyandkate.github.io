
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
   // playerIdle.style.width = player.width;
   // playerIdle.style.height = player.height;
    currentPlayer = playerIdle.getAttribute('src');
}

//objects on the screen
var textAdventure = document.querySelector(".btnTextAdv");
var aboutBtn = document.querySelector(".aboutBtn");
var gamesBtn = document.querySelector(".gamesBtn");
var contactBtn = document.querySelector(".contactBtn");
//var sunnyBDayBtn = document.querySelector(".sunnyBDayBtn");
var palmtreeguyBtn = document.querySelector(".palmtreeguyBtn");
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


var textAdvBtn;
var about;
var games;
var contact;
//var sunnyBDay;
var palmtreeguy;
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
        textAdvBtn = new DisplayObjects("textAdventure", "150px", "130px", "100px", "100px", "absolute");
        about = new DisplayObjects("about", "300px", "300px", "100px", "100px", "absolute");
        games = new DisplayObjects("games", "300px", "210px", "100px", "100px", "absolute");
        contact = new DisplayObjects("contact", "200px", "250px", "100px", "100px", "absolute");
      //  sunnyBDay = new DisplayObjects("sunnyBDay", "100px", "300px", "100px", "100px", "absolute");
        palmtreeguy = new DisplayObjects("palmtreeguy", "200px", "400px", "100px", "100px", "absolute");
        javaProjects = new DisplayObjects("java projects", "50px", "200px", "100px", "100px", "absolute");
     
    }else{
        npc = new DisplayObjects("npcOne", "500px", "500px", "50px", "50px", "absolute");
        textAdvBtn = new DisplayObjects("textAdventure", "200px", "100px", "200px", "150px", "absolute");
        about = new DisplayObjects("about", "300px", "500px", "200px", "150px", "absolute");
        games = new DisplayObjects("games", "800px", "200px", "200px", "150px", "absolute");
        contact = new DisplayObjects("contact", "800px", "500px", "200px", "150px", "absolute");
      //  sunnyBDay = new DisplayObjects("sunnyBDay", "700px", "300px", "200px", "150px", "absolute");
        palmtreeguy = new DisplayObjects("palmtreeguy", "600px", "600px", "200px", "150px", "absolute");
        javaProjects = new DisplayObjects("java projects", "500px", "250px", "200px", "150px", "absolute");
     
    
    }
    
}

function setObjectsPositions(){

    //npc = new DisplayObjects("npcOne", "500px", "500px", "100px", "100px", "absolute");
    
    npcOne.style.position = npc.position;
    npcOne.style.top = npc.y;
    npcOne.style.left = npc.x;
    npcOne.style.width = npc.width;
    npcOne.style.height = npc.height;
    
    //var textAdvBtn = new DisplayObjects("textAdventure", "200px", "200px", "50px", "20px", "absolute");
    textAdventure.style.position = textAdvBtn.position;
    textAdventure.style.top = textAdvBtn.y;
    textAdventure.style.left = textAdvBtn.x;
    textAdventure.style.width = textAdvBtn.width;
    textAdventure.style.height = textAdvBtn.height;
    
    //about = new DisplayObjects("about", "300px", "500px", "50px", "20px", "absolute");
    
    aboutBtn.style.position = about.position;
    aboutBtn.style.top = about.y;
    aboutBtn.style.left = about.x;
    aboutBtn.style.width = about.width;
    aboutBtn.style.height = about.height;

    //games = new DisplayObjects("games", "1000px", "0px", "50px", "20px", "absolute");
    
    gamesBtn.style.position = games.position;
    gamesBtn.style.top = games.y;
    gamesBtn.style.left = games.x;
    gamesBtn.style.width = games.width;
    gamesBtn.style.height = games.height;

    //contact = new DisplayObjects("contact", "800px", "500px", "50px", "20px", "absolute");
    
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
