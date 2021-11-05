const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;


var pinIn = true;

// center text
var w = canvas.width / 2;

// initial screen
var splashSc = true;
// explaining screen
var instructionsSc = false;
// main screen
var gameSc = false;

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

const st = {
    x: 501
};

const shine = {
    x: 580,
    y: 350
};

const keys = []; // keyboard operations

//start splash screen
const bnSplash = new Image();
bnSplash.src = "images/bnSplashScn.png";

//Game background
const balGame = new Image();
balGame.src = "images/balGame.png";

//Tie
const tie = new Image();
tie.src = "images/tie.png";

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
        st.x += 0.2;
        shine.x -= 0.1;
        shine.y -= 0.1;
        air.play();
        counter++;
      }
    }

animate();

function drawBalloon() {

    duck.play();
    duck.volume = 0.4;

    // Balloon
    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 1;
    ctx.fillStyle = 'purple';
    ctx.shadowColor = 'purple';
    ctx.shadowBlur = 15;
    ctx.ellipse(inBall.x, inBall.y, inBall.bWidth, inBall.bHeight, 0, 0, (Math.PI*2), false);   
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";

    // Shine
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'white';
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 10;
    ctx.ellipse(shine.x, shine.y, 10, 10, Math.PI / 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent"; 

    // Tie at the bottom of the balloon
    ctx.drawImage(tie, 447, st.x, 300, 200);
}

function closeSplash() {
    splashSc = false;
    instructionsSc = true;
    window.removeEventListener("click", closeSplash);
}

function closeInstructions() {
    instructionsSc = false;
    gameSc = true;
    pinIn = true;
    window.removeEventListener("click", closeInstructions);
}

function closeGame() {
    pinIn = true;
    inBall.bWidth = 70;
    inBall.bHeight = 100;
    st.x = 501;
    shine.x = 580;
    shine.y = 350;
    splashSc = false;
    gameSc = false;
    instructionsSc = true;
}


/***********For Menu************/
var togSet=true;
var togMenu=false;
var speechOn=true;
var musicOn=true;
var picOn=true;
/************end****************/

function settings() {
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(105, 20, 990, 50);
    ctx.globalAlpha = 1.0;
    ctx.font = "bold 25px Comic Sans MS";
    ctx.fillStyle = "purple";
    ctx.fillText("Settings Menu - press S key", w, 55);
    
    if (keys[83]) { //s
        togSet=false;
        togMenu=true;
        showMenu();
    }

    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.8;  
    ctx.fillRect(100, 150, 1000, 500);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center";
    ctx.font='300 60px Comic Sans MS';
    ctx.fillStyle = "purple";
    ctx.fillText("Click on the left mouse button", w, 250);
    ctx.fillStyle = "red";
    ctx.font='200 60px Comic Sans MS';
    ctx.fillText("Or", w, 340);
    ctx.font='300 60px Comic Sans MS';
    ctx.fillStyle = "purple";
    ctx.fillText("Press the Spacebar", w, 425);
    ctx.fillText("to inflate the balloon!", w, 520);
    ctx.fillStyle = "red";
    ctx.font='200 50px Comic Sans MS';
    ctx.fillText("Spacebar or Left Mouse Button to Play!", w, 610);
    window.addEventListener("click", closeInstructions);

    if (keys[32]) {
        splashSc = false;
        instructionsSc = false;
        gameSc = true;
    }
}

function showMenu() {
    togMenu=true;
    togSet=false;
    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.9; 
    ctx.fillRect(120, 40, 950, 600);
    ctx.globalAlpha = 1.0; 
    ctx.fillStyle = "white";
    ctx.textAlign = "center"; 
    ctx.font = "45px Arial";
    ctx.fillText("Settings", w, 100);
    ctx.font = "35px Arial";

    if (speechOn) {
        ctx.fillText("Speech: On - press O to change", w, 210);
        if (keys[79]) { //o
            speechOn=false;
        }
    }

    if (!speechOn) {
        ctx.fillText("Speech: Off - press B to change", w, 210);
        if (keys[66]) { //b
            speechOn=true;
        }
    }

    /*------------------------------------------------------ */

    
    if (musicOn) {
        ctx.fillText("Music: On - press M to change", w, 310);
        if (keys[77]) { //m
            musicOn=false;
        }
    }

    if (!musicOn) {
        ctx.fillText("Music: Off - press U to change", w, 310);
        if (keys[85]) { //u
            musicOn=true;
        }
    }

    /*------------------------------------------------------ */

    if (picOn) {
        ctx.fillText("Picture: On - press C to change", w, 410);
        if (keys[67]) { //o
            picOn=false;
        }
    }

    if (!picOn) {
        ctx.fillText("Colour: On - press I to change", w, 410);
        if (keys[73]) { //f
            picOn=true;
        }
    }

    ctx.font = "30px Arial";
    ctx.fillText("Return to Game", w, 560);
    ctx.fillText("Press A", w, 610);

    if (keys[65]) { //a
        togSet=true;
        togMenu=false;
    }
}

function splash() {
    ctx.drawImage(bnSplash, 0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = 0.6;
    ctx.fillStyle = "white";
    ctx.fillRect(95, 400, 1010, 300);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center"; 
    ctx.font = "45px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.fillText("Click the left mouse button", w, 470);
    ctx.fillStyle = "red";
    ctx.fillText("OR", w, 530);
    ctx.fillStyle = "blue";
    ctx.fillText("Press the Enter Key", w, 590);
    ctx.fillStyle = "red";
    ctx.fillText("for the instuctions!", w, 660);
    if (keys[13]) {
        splashSc = false;
        instructionsSc = true;
    }
    window.addEventListener("click", closeSplash);

    /*if (togSet) {
        settings();
    }

    if (togMenu) {
        showMenu();
    }*/

    
}

function instructions() {

    ctx.drawImage(balGame, 0, 0, canvas.width, canvas.height);

    if (togSet) {
        settings();
    }

    if (togMenu) {
        showMenu();
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
            st.x += 0.2;
            shine.x -= 0.1;
            shine.y -= 0.1;
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
            ctx.fillRect(120, 40, 950, 650);
            ctx.globalAlpha = 1.0; 
            ctx.fillStyle = "red";
            ctx.textAlign = "center"; 
            ctx.font = "140px Comic Sans MS";
            ctx.fillText("Well Done!", w, 200);
            ctx.font = "90px Comic Sans MS";
            ctx.fillStyle = "blue";
            ctx.fillText("You have burst", w, 330);
            ctx.fillText("the balloon!", w, 430);
            ctx.font = "60px Comic Sans MS";
            ctx.fillStyle = "red";
            ctx.fillText("Click the right mouse button", w, 530);
            ctx.fillText("OR", w, 600);
            ctx.fillText("Enter Key to play again!", w, 660);
            pinIn = false;
            console.log("Bang!");
            window.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                console.log("Miaw");
                closeGame();
            });
            
            if (keys[13]) {
                pinIn = true;
                splashSc = true;
                instructionsSc = false;
                gameSc = false;
                gameSc = false;
                inBall.bWidth = 70;
                inBall.bHeight = 100;
                st.x = 501;
                shine.x = 580;
                shine.y = 350;
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



