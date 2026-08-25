const arcadeBackgroundImg = new Image();
const arcadeYogaCatImg = new Image();
const arcadeCatDetectiveImg = new Image();
const arcadeCatDetectiveAdventuresImg = new Image();
const nextProjectImg = new Image();
const arcadeGuideImg = new Image();
const mobileConsoleImg = new Image();
const arcadeDeskImg = new Image();
const plantImg = new Image();

arcadeBackgroundImg.src = "images/gamearcadehouse.png";
arcadeYogaCatImg.src = "images/arcadeYogaCatImg.png";
arcadeCatDetectiveImg.src = "images/arcadeCatDetective.png";
arcadeCatDetectiveAdventuresImg.src = "images/arcadeCatDetective.png";
nextProjectImg.src = "images/nextProject.png";
arcadeGuideImg.src = "images/arcadeGuide.png";
mobileConsoleImg.src = "images/mobileConsole.png";
arcadeDeskImg.src = "images/arcadeDesk.png";
plantImg.src = "images/plant.png";

const mobileGamesList = [
    { id: "catDetective", title: "Cat Detective:First Case", format: "APK", size: "22.5mb", downloadLink: "games/CatDetectiveMobileGame.apk"}
   /* { id: "puzzle", title: "Puzzle", format: "APK", size: "60mb", downloadLink: "#"}*/
];

const arcadeYogaCat = {
    name: "Yoga Cat Adventure",
    x: tileSize * 5, 
    y: tileSize * 2,
    width: tileSize,
    height: tileSize
}
const arcadeCatDetectiveAdventures = {
    name: "Cat Detective Adventure",
    x: tileSize * 8, 
    y: tileSize * 2,
    width: tileSize,
    height: tileSize
}
const arcadeCatDetective = {
    name: "Cat Detective: The First Case",
    x: tileSize * 14, 
    y: tileSize * 2,
    width: tileSize,
    height: tileSize
}

const nextProject = {
    name: "Coming Soon",
    x: tileSize * 11, 
    y: tileSize * 2,
    width: tileSize,
    height: tileSize
};
const arcadeGuide = {
    name: "Arcade Guide",
    x: 14 * tileSize,
    y: 5.5 * tileSize,
    width: tileSize,
    height: 2 * tileSize
}
const mobileConsole = {
    name: "Mobile Console",
    x: 5 * tileSize,
    y: 6 * tileSize,
    width: 2 * tileSize,
    height: tileSize
}
const arcadeDesk = {
    x: 13 * tileSize,
    y: 6 * tileSize,
    width: tileSize,
    height: 2 * tileSize
}
const plant = {
    x: 15 * tileSize,
    y: 4.5 * tileSize,
    width: tileSize,
    height: tileSize
}
const exitDoor = {
    x: 9 * tileSize,
    y: 8 * tileSize,
    width: 2 * tileSize,
    height: 2 * tileSize
}

const mapGrid = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

