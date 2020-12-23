var colors = [];
var numsq = 6;
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
// var easybtn = document.querySelector("#easybtn");
// var hardbtn = document.querySelector("#hardbtn");
var mode = document.querySelectorAll(".mode");

init();

function init(){
    for(var i=0; i< mode.length; i++){
        mode[i].addEventListener("click", function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY"? numsq = 3: numsq = 6;
            resetAll();
        });
    }
    for(var i=0; i< squares.length; i++){
        // squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                message.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor= pickedColor;
                reset.textContent="Play Again?";
            }
            else{
               this.style.backgroundColor= "#232323";
               message.textContent = "Try Again!!!"; 
            }
        });
    }
    resetAll();
 }

 

function resetAll(){
    colors = generateColor(numsq);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    reset.textContent = "New Colours";

    for(var i=0; i< squares.length; i++){
        // add initial colors
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor= "steelblue";
    message.textContent= "";
    
}
// easybtn.addEventListener("click", function(){
//     easybtn.classList.add("selected");
//     hardbtn.classList.remove("selected");
//     numsq=3;
//     colors = generateColor(numsq);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardbtn.addEventListener("click", function(){
//     easybtn.classList.remove("selected");
//     hardbtn.classList.add("selected");
//     numsq=6;
//     colors = generateColor(numsq);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
// });

reset.addEventListener("click", function(){
    resetAll();
    // colors = generateColor(numsq);
    // pickedColor = pickColor();
    // colorDisplay.textContent = pickedColor;
    // for(var i=0; i< squares.length; i++){
    //     // add initial colors
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor= "steelblue";
    // message.textContent= "";
    // this.textContent = "New Colours"
});
// colorDisplay.textContent = pickedColor;


function changeColors(color){
    for(var i=0; i< squares.length; i++){
        squares[i].style.backgroundColor=color;
    }
}
function pickColor(){
   var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateColor(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
   var r = Math.floor(Math.random()*256);
   var g = Math.floor(Math.random()*256);
   var b = Math.floor(Math.random()*256);

   return "rgb(" + r +", "+  g +", "+ b+")";
}