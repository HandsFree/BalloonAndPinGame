const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;


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

var air = new Audio("sounds/air.mp3");




function animate() {
    draw();
    window.addEventListener("click", inflateBall); 
    window.requestAnimationFrame(animate);
}

animate();








window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
    air.play();
    inflateBall();
});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    air.pause();
});


function drawBalloon() {
    ctx.beginPath();
    ctx.fillStyle = "lightblue";
    ctx.ellipse(x, y, bWidth, bHeight, 0, 0, (Math.PI*2), false);
    ctx.fill();
    ctx.stroke();
}

function inflateBall() { 
    bWidth += 1;
    bHeight += 1;
    window.requestAnimationFrame(animate);
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
    ctx.fillRect(95, 550, 1010, 150);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center"; 
    ctx.font = "45px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("Click the left mouse button for the instuctions!", w, 640);
    window.addEventListener("click", closeSplash);
}

function instructions() {
    ctx.drawImage(balGame, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.8;  
    ctx.fillRect(100, 50, 1000, 600);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center";
    ctx.font='300 70px Comic Sans MS';
    ctx.fillStyle = "blue";
    ctx.fillText("Click on the left mouse button", w, 150);
    ctx.fillStyle = "red";
    ctx.font='800 70px Comic Sans MS';
    ctx.fillText("Or", w, 240);
    ctx.font='300 70px Comic Sans MS';
    ctx.fillStyle = "blue";
    ctx.fillText("Press the Spacebar", w, 320);
    ctx.fillText("to inflate the balloon!", w, 420);
    ctx.fillStyle = "red";
    ctx.font='800 70px Comic Sans MS';
    ctx.fillText("Let's Play Now!", w, 600);
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
        drawBalloon();
        }
}



