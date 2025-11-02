
//beach scene
let beach = {
    img : beachImg,
    text : "You are at a beach. Across the Ocean you can see another island.What do you do?",
    btn1 : exploreBeach,
    btn2 : swimBtn, 
    btn3 : relaxBtn,
    btn4 : backBtn
   
}
//jungle scene
let jungle = {
    img : jungleImg,
    text : "you are inside a jungle",
    btn1 : exploreJungle,
    btn2 : "BEACH", 
    btn3 : "CASTLE",
    btn4 : backBtn
}
//castel scene
let castle = {
    img : castleImg,
    text: "castle scene.to be continued...",
    btn1 : "BEACH",
    btn2 : "JUNGLE", 
    btn3 : "EXPLORE CASTLE",
    btn4 : backBtn
}
let relax = {
    img : relaxImg,
    text : "relax time",
    btn1 : exploreBeach,
    btn2 : "BEACH", 
    btn3 : "JUNGLE",
    btn4 : backBtn
}

let explore = {
    img : exploreImg,
    text : "You find a treasure map",
    btn1 : "READ MAP",
    btn2 : "BEACH", 
    btn3 : "JUNGLE",
    btn4 : backBtn
}
let readMap = {
    img : readMapImg,
    text : "The Map shows a treasure on the island",
    btn1 : "BUILD A RAFT",
    btn2 : "BEACH", 
    btn3 : "JUNGLE",
    btn4 : backBtn

}
let raft = {
    img : raftImg,
    text : "You build a raft with the wood",
    btn1 : swimIsland,
    btn2 : "BEACH", 
    btn3 : "JUNGLE",
    btn4 : backBtn
}
let noRaft = {
    img : noRaftImg,
    text : "You need to find wood to build the raft",
    btn1 : "BEACH",
    btn2 : "JUNGLE", 
    btn3 : "READ MAP",
    btn4 : backBtn
}
let swim = {
    img :swimImg,
    text : "you are swiming in the ocean",
    btn1 : "BEACH",
    btn2 : "JUNGLE", 
    btn3 : exploreBeach,
    btn4 : backBtn
}
let goIsland = {
    img: islandImg,
    text: "You reached the island",
    btn1 : "BEACH",
    btn2 : "JUNGLE", 
    btn3 : treasureHunt,
    btn4 : backBtn
}
let jungleExploring = {
    img : jungleExploringImg,
    text : "you find some wood",
    btn1 : collectWood,
    btn2 : "BEACH", 
    btn3 : "JUNGLE",
    btn4 : backBtn
}
let woodCollected = {
    img : collectedWood,
    text: "you collected the wood",
    btn1 : exploreJungle,
    btn2 : "BEACH", 
    btn3 : "JUNGLE",
    btn4 : backBtn
}
let exit = {
    img : startImg,
    text: "Where dou you want to go next?",
    btn1 : "BEACH",
    btn2 : "JUNGLE", 
    btn3 : "CASTLE",
    btn4 : backBtn
    
}