const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;

//center text
var w = canvas.width / 2;

var splashSc = true;
var instructions = false;
var gameSc =false;

var bWidth = 70;
var bHeight = 100;
var x=610;
var y=400;

//start splash screen
const bnSplash = new Image();
bnSplash.src = "bnSplashScn.png";

//Game background
const balGame = new Image();
balGame.src = "balGame.png";

function animate() {
    draw();
    window.addEventListener("click", inflateBall);
    window.requestAnimationFrame(animate);
}

animate();

function drawBalloon() {
    ctx.beginPath();
    ctx.fillStyle = "lightblue";
    ctx.ellipse(x, y, bWidth, bHeight, 0, 0, (Math.PI*2), false);
    ctx.fill();
    ctx.stroke();
}

function inflateBall() {
    bWidth += 8;
    bHeight += 8;
    window.requestAnimationFrame(animate);
  }

function closeSplash() {
    splashSc = false;
    instructions = true;
}

function closeInstructions() {
    instructions = false;
    gameSc = true;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (splashSc) {
        //splash();
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

    if (instructions) {
        ctx.drawImage(balGame, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.8;  
        ctx.fillRect(100, 50, 1000, 600);
        ctx.globalAlpha = 1.0;
        ctx.textAlign = "center";
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "blue";
        ctx.fillText("Click on the left mouse button", w, 300);
        ctx.fillText("to inflate the balloon!", w, 350);
        ctx.fillStyle = "red";
        ctx.fillText("Click the left mouse button to Play!", w, 500);
        window.addEventListener("click", closeInstructions);
        }

    if (gameSc) {
        ctx.drawImage(balGame, 0, 0, canvas.width, canvas.height);
        drawBalloon();
        }
}



