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

//start speech
const speech = new Image();
speech.src = "images/speech.png";

//start splash screen
const bnSplash = new Image();
bnSplash.src = "images/bnSplashScn.png";

//Game background
const balGame = new Image();
balGame.src = "images/balGame.png";

//Purple Tie
const tie = new Image();
tie.src = "images/tie.png";

//Purple Tie2
const tie2 = new Image();
tie2.src = "images/tie2.png";

//Red Tie
const tieR = new Image();
tieR.src = "images/tieR.png";

//Red Tie2
const tieR2 = new Image();
tieR2.src = "images/tieR2.png";

//Pin
const pinImg = new Image();
pinImg.src = "images/pin.png";

// sound effects
var air = new Audio("sounds/air.mp3");
var pop = new Audio("sounds/pop1.mp3");
var def = new Audio("sounds/deflated.mp3");

// music
var duck = new Audio("sounds/duck.mp3");

// speech
var splashAud = new Audio("sounds/splash.mp3");
var introAud = new Audio("sounds/intro.mp3");
var welldoneAud = new Audio("sounds/well-done.mp3");

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

        if (musicOn) {
            air.play();
        }
        
        counter++;
      }
    }

animate();

function drawBalloon() {

    if (musicOn) {
    duck.play();
    duck.volume = 0.4;
    }

    if (!musicOn) {
    duck.pause();
    }

    // Balloon
    ctx.beginPath();
    ctx.lineWidth = 1;
    if (!col) {
       ctx.strokeStyle = 'red';
       ctx.fillStyle = 'red';
       ctx.shadowColor = 'red';
    }
    if (col) {
       ctx.strokeStyle = 'purple';
       ctx.fillStyle = 'purple';
       ctx.shadowColor = 'purple';
    } 
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

    // Ties
    if (col) { // Purple
        ctx.drawImage(tie, 447, st.x, 300, 200);
        ctx.drawImage(tie2, 475, st.x, 300, 200);
    }
    if (!col) { // Red
        ctx.drawImage(tieR, 447, st.x, 300, 200);
        ctx.drawImage(tieR2, 475, st.x, 300, 200); 
    }  
}

function closeSplash() {
    splashSc = false;
    instructionsSc = true;
    splashAud.pause();
    splashAud.currentTime = 0;
    window.removeEventListener("click", closeSplash);
}

function closeInstructions() {
    instructionsSc = false;
    gameSc = true;
    pinIn = true;
    introAud.pause();
    introAud.currentTime = 0;
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
var col=true;
/************end****************/

function settings() {

    if (speechOn) {
        introAud.play();
    }

    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(105, 20, 990, 50);
    ctx.globalAlpha = 1.0;
    ctx.font = "bold 25px Comic Sans MS";
    ctx.fillStyle = "purple";
    ctx.fillText("Settings Menu - press S key", w, 55);

    if (!musicOn) {
        duck.pause();
        }
    
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
        introAud.pause();
        introAud.currentTime = 0;
    }
}

function showMenu() {
    togMenu=true;
    togSet=false;
    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.9; 
    ctx.fillRect(120, 40, 950, 650);
    ctx.globalAlpha = 1.0; 
    ctx.fillStyle = "white";
    ctx.textAlign = "center"; 
    ctx.font = "45px Arial";
    ctx.fillText("Settings", w, 100);
    ctx.font = "35px Arial";

    if (!musicOn) {
        duck.pause();
        }


    if (col) {
        ctx.fillText("Balloon Colour: Purple - press R to change to Red", w, 200);
        if (keys[82]) { //r
            col=false;
        }
    }

    if (!col) {
        ctx.fillText("Balloon Colour: Red - press P to change to Purple", w, 200);
        if (keys[80]) { //q
            col=true;
        }
    }

    /*------------------------------------------------------ */

    if (speechOn) {
        ctx.fillText("Speech: On - press O to change", w, 300);
        if (keys[79]) { //o
            speechOn=false;
        }
    }

    if (!speechOn) {
        ctx.fillText("Speech: Off - press B to change", w, 300);
        if (keys[66]) { //b
            speechOn=true;
        }
    }

    /*------------------------------------------------------ */

    
    if (musicOn) {
        ctx.fillText("Music and Effects: On - press M to change", w, 400);
        if (keys[77]) { //m
            musicOn=false;
        }
    }

    if (!musicOn) {
        ctx.fillText("Music and Effects: Off - press U to change", w, 400);
        if (keys[85]) { //u
            musicOn=true;
        }
    }

    /*------------------------------------------------------ */

    if (picOn) {
        ctx.fillText("Picture: On - press C to change", w, 500);
        if (keys[67]) { //o
            picOn=false;
        }
    }

    if (!picOn) {
        ctx.fillText("Colour: On - press I to change", w, 500);
        if (keys[73]) { //f
            picOn=true;
        }
    }

    ctx.font = "30px Arial";
    ctx.fillText("Return to Game", w, 600);
    ctx.fillText("Press G", w, 640);

    if (keys[71]) { //g
        togSet=true;
        togMenu=false;
    }
}

function splash() {
    if (picOn) {
    ctx.drawImage(bnSplash, 0, 0, canvas.width, canvas.height);
    }
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.6;
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
    ctx.fillText("for the instructions!", w, 660);

    if (keys[65]) { // audio
        splashAud.play();
    }

    ctx.fillStyle = "white";
    ctx.fillRect(105, 410, 150, 140);
    ctx.drawImage(speech, 155, 420, 50, 50);
    ctx.font = "bold 15px arial";
    ctx.fillStyle = "black";
    ctx.fillText("Press A", 175, 490);
    ctx.fillText("on your Keyboard", 180, 512);
    ctx.fillText("for Speech", 175, 535);


    if (keys[13]) { // next page
        splashSc = false;
        instructionsSc = true;
        splashAud.pause();
        splashAud.currentTime = 0;
    }
    window.addEventListener("click", closeSplash);
    
}

function instructions() {

    if (picOn) {
        ctx.drawImage(balGame, 0, 0, canvas.width, canvas.height);
    }

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

        if (picOn) {
        ctx.drawImage(balGame, 0, 0, canvas.width, canvas.height);
        }

        if (keys[32]) {
            inBall.bWidth += 0.2;
            inBall.bHeight += 0.2;
            st.x += 0.2;
            shine.x -= 0.1;
            shine.y -= 0.1;
            if (musicOn) {
            air.play();
            }
        }
       
        if (inBall.bWidth > (pinPop.y+276)) {

            if (musicOn) {
            air.pause();
            duck.pause();
            duck.currentTime = 0;
            pop.play();
            def.play();
            def.volume = 0.4;
            }

            if (speechOn) {
            welldoneAud.play();
            }
            
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

            window.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                welldoneAud.pause();
                welldoneAud.currentTime = 0;
                closeGame();
            });
            
            if (keys[13]) {
                welldoneAud.pause();
                welldoneAud.currentTime = 0;
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



