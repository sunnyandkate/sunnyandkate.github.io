window.onload = function(){
    startGame();
   
}
var x = window.matchMedia("(max-width: 700px)");
function startGame(){
    queryFunction(x);
    setupPlayer(x);
    setupInput();
    setObjectsPositions();
    collisionDetection();
   // collisionGameDetection(x);
      
}

x.addEventListener("change", function(){
    queryFunction(x);
    
});


function hideWelcomeMessage(){
    var welcome = document.querySelector(".welcome");
    welcome.style.display ="none";
}
