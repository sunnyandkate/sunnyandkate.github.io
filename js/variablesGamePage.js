
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

var cloudGameBtn = document.querySelector(".cloudGameBtn");
var coinCollectorBtn = document.querySelector(".coinCollectorBtn");
var jumpingCatBtn = document.querySelector(".jumpingCatBtn");
var platformerBtn = document.querySelector(".platformerBtn");
var slidePuzzleBtn = document.querySelector(".slidePuzzleBtn");
var catDetectiveBtn = document.querySelector(".catDetectiveBtn");
var catDetectiveBtnLink = document.querySelector(".catDetectiveBtnLink");



function DisplayObjects(name, x, y, width, height, position){
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.position = position;
}


var cloudGame;
var coinCollector;
var jumpingCat;
var platformer;
var slidePuzzle;
var catDetective;


function queryFunction(x){
    if(x.matches){
        cloudGame = new DisplayObjects("cloudGame", "200px", "400px", "100px", "100px", "absolute");
        coinCollector = new DisplayObjects("coinCollector", "300px", "300px", "100px", "100px", "absolute");
        jumpingCat = new DisplayObjects("jumpingCat", "200px", "80px", "100px", "100px", "absolute");
        platformer = new DisplayObjects("platformer", "100px", "300px", "100px", "100px", "absolute");
        slidePuzzle = new DisplayObjects("slidePuzzle", "150px", "150px", "100px", "100px", "absolute");
        catDetective = new DisplayObjects("catDetective", "50px", "150px", "100px", "100px", "absolute");
        catDetectiveBtnLink.setAttribute("href", "games/CatDetectiveMobileGame.apk");
}else{
        cloudGame = new DisplayObjects("cloudGame", "800px", "600px", "50px", "50px", "absolute");
        coinCollector = new DisplayObjects("coinCollector", "500px", "400px", "50px", "20px", "absolute");
        jumpingCat = new DisplayObjects("jumpingCat", "700px", "80px", "50px", "20px", "absolute");
        platformer = new DisplayObjects("platformer", "100px", "400px", "50px", "20px", "absolute");
        slidePuzzle = new DisplayObjects("slidePuzzle", "300px", "500px", "50px", "20px", "absolute"); 
        catDetective = new DisplayObjects("catDetective", "500px", "150px", "50px", "20px", "absolute");
       // playerIdle.style.width = player.width * 2;
        //playerIdle.style.height = player.height * 2;
        catDetectiveBtnLink.setAttribute("href", "games/CatDetective/index.html");
    }
    
}

function setObjectsPositions(){

   // cloudGame = new DisplayObjects("cloudGame", "800px", "600px", "50px", "50px", "absolute");
    
    cloudGameBtn.style.position = cloudGame.position;
    cloudGameBtn.style.top = cloudGame.y;
    cloudGameBtn.style.left = cloudGame.x;
    cloudGameBtn.style.width = cloudGame.width;
    cloudGameBtn.style.height = cloudGame.height;

    //coinCollector = new DisplayObjects("coinCollector", "500px", "400px", "50px", "20px", "absolute");
    
    coinCollectorBtn.style.position = coinCollector.position;
    coinCollectorBtn.style.top = coinCollector.y;
    coinCollectorBtn.style.left = coinCollector.x;
    coinCollectorBtn.style.width = coinCollector.width;
    coinCollectorBtn.style.height = coinCollector.height;

    //jumpingCat = new DisplayObjects("jumpingCat", "700px", "80px", "50px", "20px", "absolute");
    
    jumpingCatBtn.style.position = jumpingCat.position;
    jumpingCatBtn.style.top = jumpingCat.y;
    jumpingCatBtn.style.left = jumpingCat.x;
    jumpingCatBtn.style.width = jumpingCat.width;
    jumpingCatBtn.style.height = jumpingCat.height;

    platformerBtn.style.position = platformer.position;
    platformerBtn.style.top = platformer.y;
    platformerBtn.style.left = platformer.x;
    platformerBtn.style.width = platformer.width;
    platformerBtn.style.height = platformer.height;

    slidePuzzleBtn.style.position = slidePuzzle.position;
    slidePuzzleBtn.style.top = slidePuzzle.y;
    slidePuzzleBtn.style.left = slidePuzzle.x;
    slidePuzzleBtn.style.width = slidePuzzle.width;
    slidePuzzleBtn.style.height = slidePuzzle.height;

    catDetectiveBtn.style.position = catDetective.position;
    catDetectiveBtn.style.top = catDetective.y;
    catDetectiveBtn.style.left = catDetective.x;
    catDetectiveBtn.style.width = catDetective.width;
    catDetectiveBtn.style.height = catDetective.height;

    
}



