const javaHutBackgroundImg = new Image();
const javaHutGuideImg = new Image();
const slotMachineImg = new Image();
const calculatorImg = new Image();
const textEditorImg = new Image();
const javaCertificateImg = new Image();
const plantImg = new Image();

javaHutBackgroundImg.src = "images/javaHouse.png";
javaHutGuideImg.src = "images/javaHutGuide.png";
slotMachineImg.src = "images/slotmachine.png";
calculatorImg.src = "images/calculatorImg.png";
textEditorImg.src = "images/textEditorImg.png";
javaCertificateImg.src = "images/javaCertificateImg.png";
plantImg.src = "images/plant.png";

const javaHutGuide = {
    name: "Java Hut Guide",
    x: 12 * tileSize,
    y: 6.5 * tileSize,
    width: tileSize,
    height: tileSize
}
const slotMachine = {
    name: "Slotmachine",
    x: 6 * tileSize,
    y: 2 * tileSize,
    width: tileSize,
    height: tileSize
}
const calculator = {
    name: "Calculator",
    x: 4 * tileSize,
    y: 4 * tileSize,
    width: tileSize,
    height: 2 * tileSize
}
const textEditor = {
    name: "TextEditor",
    x: 15 * tileSize,
    y: 5 * tileSize,
    width: tileSize,
    height: tileSize
}
const javaCertificate = {
    name: "JavaCertificate",
    x: 12 * tileSize,
    y:  tileSize,
    width: tileSize,
    height: tileSize
}
const plant = {
    x: 15 * tileSize,
    y: 2.5 * tileSize,
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
        [1, 1, 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1],
        [1, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 1, 1, 1],
        [1, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

];