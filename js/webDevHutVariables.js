const webDevHutBackgroundImg = new Image();
const webDevHutGuideImg = new Image();
const invitationCardImg = new Image();
const websiteTwoImg = new Image();
const nextWebsiteProjectImg = new Image();
const cmsProjectImg = new Image();
const fortuneCookieImg = new Image();
const plantImg = new Image();
const houseWindowImg = new Image();
const houseWindowTwoImg = new Image();

webDevHutBackgroundImg.src = "images/webDevHouse.png";
webDevHutGuideImg.src = "images/webDevGuide.png";
invitationCardImg.src = "images/desk.png";
websiteTwoImg.src = "images/desk.png";
nextWebsiteProjectImg.src = "images/nextWebsiteProjectImg.png";
cmsProjectImg.src = "images/cmsProject.png";
fortuneCookieImg.src = "images/fortuneCookieImg.png";
plantImg.src = "images/plant.png";
houseWindowImg.src = "images/houseWindow.png";
houseWindowTwoImg.src = "images/houseWindow.png";

const webDevHutGuide = {
    name: "Web Dev Hut Guide",
    x: 12 * tileSize,
    y: 6 * tileSize,
    width: tileSize,
    height: tileSize
}
const cmsProject = {
    name: "CMS Project",
    x: 13 * tileSize,
    y: 3 * tileSize,
    width: 2 * tileSize,
    height: tileSize
}
const invitationCard = {
    name: "Invitation Card",
    x: 5 * tileSize,
    y: 3 * tileSize,
    width: 2 * tileSize,
    height: tileSize
}

const websiteTwo = {
    name: "Website Two",
    x: tileSize,
    y: tileSize,
    width: 2 * tileSize,
    height: tileSize
}
const nextWebsiteProject = {
    name: "Next Project",
    x: 5 * tileSize,
    y: 6 * tileSize,
    width: 2 * tileSize,
    height: tileSize
}
const fortuneCookie = {
    name: "FortuneCookie",
    x: 9 * tileSize,
    y: tileSize,
    width: tileSize,
    height: 2 * tileSize
}
const plant = {
    x: 14 * tileSize,
    y: 6 * tileSize,
    width: tileSize,
    height: tileSize
}
const houseWindow = {
    x: 6 * tileSize,
    y:  tileSize,
    width: tileSize,
    height: tileSize
}
const houseWindowTwo = {
    x: 12 * tileSize,
    y:  tileSize,
    width: tileSize,
    height: tileSize
}
const exitDoor = {
    x: 6 * tileSize,
    y: tileSize,
    width: tileSize,
    height: tileSize
}

const mapGrid = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 1, 1, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

];