const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;

var pinIn = true;

//center text
var w = canvas.width / 2;

var splashSc = true;
var instructionsSc = false;
var gameSc =false;

const inBall = {
    bWidth: 70,
    bHeight: 100,
    x: 610,
    y: 400
};

const pinPop = {
    x: 800,
    y: 20
};

const keys = []; // keyboard operations

//start splash screen
const bnSplash = new Image();
bnSplash.src = "images/bnSplashScn.png";

//Game background
const balGame = new Image();
balGame.src = "images/balGame.png";

//Nail
const pinImg = new Image();
pinImg.src = "images/pin.png";

var air = new Audio("sounds/air.mp3");
var pop = new Audio("sounds/pop1.mp3");
var def = new Audio("sounds/deflated.mp3");
var duck = new Audio("sounds/duck.mp3");

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
    mId = requestAnimationFrame(animate);
}

    let timerID;
    let counter = 0;

    let pressHoldEvent = new CustomEvent("pressHold");

    let pressHoldDuration = 3000;
 
    addEventListener("mousedown", pressingDown, false);
    addEventListener("mouseup", notPressingDown, false);
    addEventListener("mouseleave", notPressingDown, false);

    function pressingDown(e) {
      // Start the timer
      requestAnimationFrame(timer);
      e.preventDefault();
    }

    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;
      air.pause();
      air.currentTime = 0;
    }

    function timer() {
      console.log("Timer tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        inBall.bWidth += 0.2;
        inBall.bHeight += 0.2;
        air.play();
        counter++;
      }
    }

animate();

function drawBalloon() {

    duck.play();
    duck.volume = 0.4;
    
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 15;
    ctx.ellipse(inBall.x, inBall.y, inBall.bWidth, inBall.bHeight, 0, 0, (Math.PI*2), false);
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";
}


function closeSplash() {
    splashSc = false;
    instructionsSc = true;
}

function closeInstructions() {
    instructionsSc = false;
    gameSc = true;
    pinIn = true;
}

function closeGame() {
    pinIn = true;
    inBall.bWidth = 70;
    inBall.bHeight = 100;
    splashSc = false;
    gameSc = false;
    instructionsSc = true;
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

    //window.addEventListener("mousedown", closeInstructions);
    window.addEventListener("click", closeInstructions);

    if (keys[32]) {
        splashSc = false;
        instructionsSc = false;
        gameSc = true;
    }
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
            inBall.bWidth += 0.2;
            inBall.bHeight += 0.2;
            air.play();
        }
       
        if (inBall.bWidth > (pinPop.y+276)) {
            air.pause();
            duck.pause();
            duck.currentTime = 0;
            pop.play();
            def.play();         
            ctx.fillStyle = "white";
            ctx.globalAlpha = 0.9; 
            ctx.fillRect(120, 40, 950, 600);
            ctx.globalAlpha = 1.0; 
            ctx.fillStyle = "red";
            ctx.textAlign = "center"; 
            ctx.font = "140px Comic Sans MS";
            ctx.fillText("Well Done!", w, 200);
            ctx.font = "90px Comic Sans MS";
            ctx.fillStyle = "blue";
            ctx.fillText("You have burst", w, 350);
            ctx.fillText("the balloon!", w, 450);
            ctx.font = "60px Comic Sans MS";
            ctx.fillStyle = "red";
            ctx.fillText("Enter Key to play again!", w, 600);
            pinIn = false;
            console.log("Bang!");
            //window.addEventListener("mousedown", closeGame);
            window.addEventListener("click", closeGame);

            if (keys[13]) {
                pinIn = true;
                splashSc = true;
                instructionsSc = false;
                gameSc = false; 
                inBall.bWidth = 70;
                inBall.bHeight = 100;       
            }        

        } else {
              ctx.shadowColor = 'black';
              ctx.shadowBlur = 15;
              ctx.drawImage(pinImg, pinPop.x, pinPop.y, 128, 128);
              console.log("Balloon");
              ctx.shadowColor = "transparent";
        }    

        if (pinIn) {
        drawBalloon();
        }
        }
}



