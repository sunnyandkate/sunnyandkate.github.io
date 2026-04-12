
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
        playerIdle.style.height = player.height;
    }else{
        playerIdle.style.width = player.width * (2 + "px");
        playerIdle.style.height = player.height * (2 + "px");
    } 
   // playerIdle.style.width = player.width;
    //playerIdle.style.height = player.height;
    currentPlayer = playerIdle.getAttribute('src');
}

//objects on the screen

var textAdvBtn = document.querySelector(".btnTextAdv");
var catDetectiveBtn = document.querySelector(".catDetectiveBtn");
var catDetectiveBtnLink = document.querySelector(".catDetectiveBtnLink");

var yogaCatBtn = document.querySelector(".yogaCatBtn");
var catDetectiveAdventuresBtn = document.querySelector(".catDetectiveAdventuresBtn");


function DisplayObjects(name, x, y, width, height, position){
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.position = position;
}



var textAdventure;
var catDetective;
var yogaCatAdventure;
var catDetectiveAdventures;


function queryFunction(x){
    if(x.matches){
        textAdventure = new DisplayObjects("textAdventure", "280px", "130px", "100px", "100px", "absolute");      
        catDetective = new DisplayObjects("catDetective", "50px", "150px", "100px", "100px", "absolute");
        catDetectiveBtnLink.setAttribute("href", "games/CatDetectiveMobileGame.apk");
       
        yogaCatAdventure = new DisplayObjects("yogaCatAdventure", "20px", "220px", "100px", "100px", "absolute");
        catDetectiveAdventures = new DisplayObjects("catDetectiveAdventures", "220px", "220px", "100px", "100px", "absolute");

    }else{
        textAdventure = new DisplayObjects("textAdventure", "200px", "100px", "200px", "150px", "absolute");            
        yogaCatAdventure = new DisplayObjects("yogaCatAdventure", "960px", "540px", "200px", "150px", "absolute");
        catDetectiveAdventures = new DisplayObjects("catDetectiveAdventures", "1200px", "620px", "200px", "150px", "absolute"); 
        catDetective = new DisplayObjects("catDetective", "800px", "300px", "200px", "150px", "absolute");
       
        catDetectiveBtnLink.setAttribute("href", "games/CatDetective/index.html");
    }
    
}

function setObjectsPositions(){

    textAdvBtn.style.position = textAdventure.position;
    textAdvBtn.style.top = textAdventure.y;
    textAdvBtn.style.left = textAdventure.x;
    textAdvBtn.style.width = textAdventure.width;
    textAdvBtn.style.height = textAdventure.height;
  
    catDetectiveBtn.style.position = catDetective.position;
    catDetectiveBtn.style.top = catDetective.y;
    catDetectiveBtn.style.left = catDetective.x;
    catDetectiveBtn.style.width = catDetective.width;
    catDetectiveBtn.style.height = catDetective.height;
   
    yogaCatBtn.style.position = yogaCatAdventure.position;
    yogaCatBtn.style.top = yogaCatAdventure.y;
    yogaCatBtn.style.left = yogaCatAdventure.x;
    yogaCatBtn.style.width = yogaCatAdventure.width;
    yogaCatBtn.style.height = yogaCatAdventure.height;

    catDetectiveAdventuresBtn.style.position = catDetectiveAdventures.position;
    catDetectiveAdventuresBtn.style.top = catDetectiveAdventures.y;
    catDetectiveAdventuresBtn.style.left = catDetectiveAdventures.x;
    catDetectiveAdventuresBtn.style.width = catDetectiveAdventures.width;
    catDetectiveAdventuresBtn.style.height = catDetectiveAdventures.height;
    
}



