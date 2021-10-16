const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;

var nailing = true;

//center text
var w = canvas.width / 2;

var splashSc = true;
var instructionsSc = false;
var gameSc =false;

var bWidth = 70;
var bHeight = 100;
var x=610;
var y=400;

const keys = []; // keyboard operations

//start splash screen
const bnSplash = new Image();
bnSplash.src = "images/bnSplashScn.png";

//Game background
const balGame = new Image();
balGame.src = "images/balGame.png";

//Nail
const nailImg = new Image();
nailImg.src = "images/nail.png";

var air = new Audio("sounds/air.mp3");

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];  
    air.pause();
    air.currentTime = 0;
});

function animate() {
    draw();    
    window.requestAnimationFrame(animate);
}

    let timerID;
    let counter = 0;

    let pressHoldEvent = new CustomEvent("pressHold");

    let pressHoldDuration = 1000;

    // Listening for the mouse and touch events    
    addEventListener("mousedown", pressingDown, false);
    addEventListener("mouseup", notPressingDown, false);
    addEventListener("mouseleave", notPressingDown, false);

    addEventListener("touchstart", pressingDown, false);
    addEventListener("touchend", notPressingDown, false);

    // Listening for our custom pressHold event
    addEventListener("pressHold", doSomething, false);

    function pressingDown(e) {
      // Start the timer
      requestAnimationFrame(timer);

      e.preventDefault();

      console.log("Pressing!");
    }

    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;
      air.pause();
      air.currentTime = 0;
      console.log("Not pressing!");
    }

    function timer() {
      console.log("Timer tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        bWidth += 0.2;
        bHeight += 0.2;
        air.play();
        counter++;

      } else {
        console.log("Press threshold reached!");
        dispatchEvent(pressHoldEvent);
      }
    }

    function doSomething(e) {
      console.log("pressHold event fired!");
    }


animate();

function drawBalloon() {
    ctx.beginPath();
    ctx.fillStyle = "lightblue";
    ctx.ellipse(x, y, bWidth, bHeight, 0, 0, (Math.PI*2), false);
    ctx.fill();
    ctx.stroke();
}


function closeSplash() {
    splashSc = false;
    instructionsSc = true;
}

function closeInstructions() {
    instructionsSc = false;
    gameSc = true;
}

function splash() {
    ctx.drawImage(bnSplash, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.6;  
    ctx.fillRect(95, 380, 1010, 300);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center"; 
    ctx.font = "45px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.fillText("Click the left mouse button", w, 450);
    ctx.fillStyle = "red";
    ctx.fillText("OR", w, 520);
    ctx.fillStyle = "blue";
    ctx.fillText("Press the Enter Key", w, 580);
    ctx.fillStyle = "red";
    ctx.fillText("for the instuctions!", w, 650);
    if (keys[13]) {
        splashSc = false;
        instructionsSc = true;
    }
    window.addEventListener("click", closeSplash);
}

function instructions() {
    ctx.drawImage(balGame, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.8;  
    ctx.fillRect(100, 50, 1000, 600);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center";
    ctx.font='300 60px Comic Sans MS';
    ctx.fillStyle = "purple";
    ctx.fillText("Click on the left mouse button", w, 150);
    ctx.fillStyle = "red";
    ctx.font='200 60px Comic Sans MS';
    ctx.fillText("Or", w, 240);
    ctx.font='300 60px Comic Sans MS';
    ctx.fillStyle = "purple";
    ctx.fillText("Press the Spacebar", w, 325);
    ctx.fillText("to inflate the balloon!", w, 420);
    ctx.fillStyle = "red";
    ctx.font='200 50px Comic Sans MS';
    ctx.fillText("Spacebar or Left Mouse Button to Play!", w, 600);
    if (keys[32]) {
        splashSc = false;
        instructionsSc = false;
        gameSc = true;
    }
    window.addEventListener("click", closeInstructions);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (splashSc) {
        splash(); 
        }

    if (instructionsSc) {
        instructions();
        }

    if (gameSc) {
        ctx.drawImage(balGame, 0, 0, canvas.width, canvas.height);
        if (keys[32]) {
            bWidth += 0.2;
            bHeight += 0.2;
            air.play();
        }
            if (nailing) {
                ctx.drawImage(nailImg, 540, 40, 150, 240);

                } else {

                ctx.fillStyle = "white";
                ctx.globalAlpha = 0.9; 
                ctx.fillRect(120, 40, 950, 600);
                ctx.globalAlpha = 1.0; 
                ctx.fillStyle = "red";
                ctx.textAlign = "center"; 
                ctx.font = "140px Comic Sans MS";
                ctx.fillText("Well Done!", w, 200);
                ctx.font = "80px Comic Sans MS";
                ctx.fillStyle = "blue";
                ctx.fillText("You have burst", w, 400);
                ctx.fillText("the balloon!", w, 500);
                }

        if (nailing) {
        drawBalloon();
        }
        }
}



