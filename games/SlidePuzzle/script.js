var container = document.querySelector(".container");
let box = document.querySelectorAll(".box");
let btn = document.querySelector(".btn");
let restartBtn = document.querySelector(".restartBtn");
let winningText = document.querySelector(".win");

let win = false;
let isEmpty = false;
let isNeighbour = false;

var boxSelect1;
var boxSelect2;
var boxSelect3;

//levels
let level2 = document.querySelector(".level2");

level2.addEventListener("click", function(){

});


btn.addEventListener("click", function(){
    movePuzzlePieces();
});

restartBtn.addEventListener("click", function(){
    window.location.reload();
});


//select box that you want to move
function movePuzzlePieces(){

  
    //loop through all boxes
    for(let i = 0; i < box.length; i++){
      
        //check which box is clicked
        box[i].addEventListener("click", function(){
            //check selected box
            checkSlide();
                  
            //remove all other selected classes
            removeClasses();
            //if the box is already selected, then deselect it
            if(box[i].classList.contains("selected")){
                box[i].classList.remove("selected");
            }else if(!box[i].classList.contains("empty")){
                //add the class selected to the clicked box
                 box[i].classList.add("selected");
            }
                 
        });      

    }
}
function removeClasses(){
    for(let i =0; i< box.length; i++){
        box[i].classList.remove("selected");
       
    }
}

//choose where you want to slide the selected box
function choosePosition(){
    for(let i = 0; i < box.length; i++){

        if(box[i].classList.contains("empty")){
          
            //if the box is empty store it in boxSelect2
            boxSelect2 = box[i];
        }
        box[i].addEventListener("click", function(){
           
            //check if the box is empty
            if(box[i].classList.contains("empty") && isNeighbour === true){
             
                //boxes are switching
               boxSelect3 = boxSelect1.innerHTML;
               boxSelect1.innerHTML = boxSelect2.innerHTML;
               boxSelect2.innerHTML = boxSelect3;

               //class empty is being removing from box
               box[i].classList.remove("empty");
               //class empty is now set to the selected box
               boxSelect1.classList.add("empty");
               //reset next to box variable
               isNeighbour = false;
               //check for winning
                winning();   
            
            }
           
        });
    }
}

function checkSlide(){

    //reset selected boxes
    for(let i = 0; i < box.length; i++){
        if(box[i].classList.contains("selected")){
         //set the selected box to boxSelect1
           boxSelect1 = box[i];
          
           if(( i + 1 < box.length && box[i+1].classList.contains("empty")) || ( i > 0 && box[i-1].classList.contains("empty"))
                || (i + 4 < box.length && box[i+4].classList.contains("empty")) || (i >= 4 && box[i-4].classList.contains("empty"))){
                    //box is next to empty box
                    isNeighbour = true;
           }else{
            isNeighbour = false;
           }
           
        }
        //call function where the player clicks on empty box
        choosePosition();
        
       
    }
}

function winning(){
     if(box[0].textContent === "0" && box[1].textContent === "1" 
        && box[2].textContent === "2" && box[3].textContent === "3" 
        && box[4].textContent === "4" && box[5].textContent === "5" 
        && box[6].textContent === "6" && box[7].textContent === "7" 
        && box[8].textContent === "8" && box[9].textContent === "9" 
        && box[10].textContent === "10" && box[11].textContent=== "11" 
        && box[12].textContent === "12" && box[13].textContent === "13" 
        && box[14].textContent === "14" && box[15].textContent === "15" ){
            winningText.textContent = "You won!";
    } 
   

 /*    if(box[0].innerHTML === "0" && box[1].innerHTML === "1" 
    && box[2].innerHTML === "2" && box[3].innerHTML === "3" 
    && box[4].innerHTML === "4" && box[5].innerHTML === "5" 
    && box[6].innerHTML === "6" && box[7].innerHTML === "7" 
    && box[8].innerHTML === "8" && box[9].innerHTML === "9" 
    && box[10].innerHTML === "10" && box[11].innerHTML === "11" 
    && box[12].innerHTML === "12" && box[13].innerHTML === "13" 
    && box[14].innerHTML === "14" && box[15].innerHTML === ""){
        winningText.textContent = "You have won!";
} */
}


var currentTime = new Date().getHours();
if(document.body){
    if(7 <= currentTime && currentTime < 20){
        //daytime
       document.body.style.backgroundImage = "url('../images/beach-bg.png')";
    }else if(24 > currentTime && currentTime > 20){
        //nighttime
        document.body.style.backgroundImage = "url('../images/bg-night.png')";
    }else if(currentTime > 0 && currentTime < 7){
        //morning
        document.body.style.backgroundImage = "url('../images/bg-snowing.png')";
    }
}



