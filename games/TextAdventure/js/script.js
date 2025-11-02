

//click a button and call buttonClicked() function
btn1.addEventListener("click", function(){
    scene = btn1.textContent;
    buttonClicked();
   
});
btn2.addEventListener("click", function(){
    scene = btn2.textContent;
    buttonClicked();
 }); 
 btn3.addEventListener("click", function(){
    scene = btn3.textContent;
    buttonClicked();
});
btn4.addEventListener("click", function(){
    scene = btn4.textContent;
    buttonClicked();
 }); 

 playBtn.addEventListener("click", function(){
    buttonContainer.style.display = "block";
    playBtn.style.display = "none";
 });


 
 
//check which button is clicked and call scenechanger
function buttonClicked(){

    switch(scene){
        case "BEACH":
            SceneChanger(beach.img, beach.text, beach.btn1, beach.btn2, beach.btn3, beach.btn4);
            break;
        case "JUNGLE":
            SceneChanger(jungle.img, jungle.text, jungle.btn1, jungle.btn2, jungle.btn3, jungle.btn4);
            break;
        case "CASTLE":
            SceneChanger(castle.img, castle.text, castle.btn1, castle.btn2, castle.btn3, castle.btn4);
            break;
        case relaxBtn:
            SceneChanger(relax.img, relax.text, relax.btn1, relax.btn2, relax.btn3, relax.btn4);
            break;
        case exploreBeach:
            SceneChanger(explore.img, explore.text, explore.btn1, explore.btn2, explore.btn3, explore.btn4);
            break;
        case "READ MAP":
            SceneChanger(readMap.img, readMap.text, readMap.btn1, readMap.btn2, readMap.btn3, readMap.btn4);
            break;
        case "BUILD A RAFT":
            if(hasWood){
                BuildRaft();
            }else{
                NoRaft();
            }
            break;
        case swimBtn:
            SceneChanger(swim.img, swim.text, swim.btn1, swim.btn2, swim.btn3, swim.btn4);
            break;
        case exploreJungle:
            SceneChanger(jungleExploring.img, jungleExploring.text, jungleExploring.btn1, jungleExploring.btn2, jungleExploring.btn3, jungleExploring.btn4);
            break;
        case collectWood:
            hasWood = true;
            SceneChanger(woodCollected.img, woodCollected.text, woodCollected.btn1, woodCollected.btn2, woodCollected.btn3, woodCollected.btn4);
            break;
        case swimIsland:
            SceneChanger(goIsland.img, goIsland.text, goIsland.btn1, goIsland.btn2, goIsland.btn3, goIsland.btn4);
            break;
        case backBtn:
            SceneChanger(exit.img, exit.text, exit.btn1, exit.btn2, exit.btn3, exit.btn4);
            break;
        default:
            SceneChanger(exit.img, exit.text, exit.btn1, exit.btn2, exit.btn3, exit.btn4);
            break;
        }
}



//change the scene
function SceneChanger(image, text, button1, button2, button3, button4){

   
    adventureImage.src = image;
    adventureText.innerHTML = text;
    btn1.textContent = button1;
    btn2.textContent = button2;
    btn3.textContent = button3;
    btn4.textContent = button4;
   
}

function BuildRaft(){
    SceneChanger(raft.img, raft.text, raft.btn1, raft.btn2, raft.btn3, raft.btn4);
}
function NoRaft(){
    SceneChanger(noRaft.img, noRaft.text, noRaft.btn1, noRaft.btn2, noRaft.btn3, noRaft.btn4);
}