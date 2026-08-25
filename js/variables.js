let tileSize = 16;
let prevX = 0;
let prevY = 0;
let nextPlayerX;
let nextPlayerY;
let buttonPressed = "";
let walkFrameIndex = 0;

//PLAYER
const playerIdle = new Image();

//player Idle
let playerIdleArray = ["images/player_left1.png", "images/player_right1.png", "images/player_up1.png", "images/player_down1.png"];

//player moving
let playerLeftArray =["images/player_left2.png", "images/player_left3.png"];
let playerRightArray = ["images/player_right2.png", "images/player_right3.png"];
let playerUpArray = ["images/player_up3.png", "images/player_up2.png"];
let playerDownArray = ["images/player_down2.png", "images/player_down3.png"];

let currentPlayer = playerIdle.getAttribute('src');

//LOAD IMAGES
const catNPCImg = new Image();
const bunnyNPCImg = new Image();
const wizardNPCImg = new Image();
const infoNPCImg = new Image();
const gamesHouseImg = new Image();
const javaHouseImg = new Image();
const webdevHouseImg = new Image();
const infoHouseImg = new Image();
const phoneBoothImg = new Image();
const mailboxImg = new Image();
const backgroundimage = new Image();


//playerIdle.src =  'images/player.png';
playerIdle.src =  playerIdleArray[3];
catNPCImg.src = 'images/npcCat.png';
bunnyNPCImg.src = 'images/bunny.png';
wizardNPCImg.src = 'images/wizard.png';
infoNPCImg.src = 'images/infoNPC.png';
backgroundimage.src = 'images/backgroundImage.png';
gamesHouseImg.src = 'images/gamesHut.png';
javaHouseImg.src = 'images/javaHut.png';
webdevHouseImg.src = 'images/webdevHut.png';
infoHouseImg.src = 'images/infostand.png';
phoneBoothImg.src ='images/phoneBoothImg.png';
mailboxImg.src = 'images/mailboxImg.png';

//PLAYER
let player = {
    x: 6 * tileSize,
    y: 4 * tileSize,
    width: tileSize,
    height: tileSize,
    speed: 3.5,
    tick:0
};

//NPCs
const catNPC = {
    x: 4 * tileSize,
    y: 3.5 * tileSize,
    width: tileSize,
    height: tileSize,
};
const bunnyNPC = {
    x: 11 * tileSize,
    y: 8 * tileSize,
    width: tileSize,
    height: tileSize,
};
const wizardNPC = {
    x: 10 * tileSize,
    y:  tileSize - 8,
    width: tileSize,
    height: 2 * tileSize,
};
const infoNPC = {
    x: 17* tileSize,
    y:  tileSize / 2,
    width: tileSize,
    height: tileSize,
};

//HOUSES
const gameHut = {
    name:"gameHut",
    x: 2 * tileSize,
    y: 2.5 * tileSize,
    width: 32,
    height: 32,
};
const gamesHouseDoor = {
    x: 2 * tileSize + 8,      
    y: 2.5 * tileSize + 16,      
    width: 16,   
    height: 16   
};

const javaHut = {
    name:"javaHut",
    x: 9 * tileSize,
    y: 6.5 * tileSize,
    width: 2 * tileSize,
    height: 2 * tileSize,
};
const javaHouseDoor = {
    x: 9 * tileSize + 8,
    y: 6.5 * tileSize + 16,
    width: tileSize,
    height: tileSize
};
const webDevHut = {
    name:"WebDevHut",
    x: 11.25 * tileSize,
    y: tileSize,
    width: 2 * tileSize,
    height: 2 * tileSize
};
const webdevHouseDoor = {
    x: 11.25 * tileSize + 8,
    y: tileSize + 16,
    width: tileSize,
    height: tileSize
};
const infoHouse = {
    x: 16.5 * tileSize,
    y:  2,
    width: 2 * tileSize,
    height: 2 * tileSize
};

const phoneBooth = {
    x: 4 * tileSize,
    y:  6.5 * tileSize,
    width: 2 * tileSize,
    height: 2 * tileSize
};
const mailbox = {
    x: 8 * tileSize,
    y:  4 * tileSize,
    width: tileSize,
    height: tileSize
};


