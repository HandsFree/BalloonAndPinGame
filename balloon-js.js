const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;

/////Translation Menu //////////
var En = true;
var Ger = false;
var Rom = false;
var Bul = false;
var Grk = false;
var Tuk = false;

var langaugeMenuSettings = false;
/////////////////////////////////

var pinIn = true;

// center text
var w = canvas.width / 2;

// initial screen
var splashSc = true;
// instructions screen
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




//settings//////////////////////////////////

const setting = new Image();
setting.src = "images/settingsMenu/settings.png"; // Cog Image

const setBack = new Image();
setBack.src = "images/settingsMenu/setBack.png"; // Background

const redBall = new Image();
redBall.src = "images/settingsMenu/balloonRed.png"; // Circle red

const purBall = new Image();
purBall.src = "images/settingsMenu/balloonPur.png"; // Circle purple

const rTick = new Image();
rTick.src = "images/settingsMenu/rTick.png"; // red tick

const speechOnCir = new Image();
speechOnCir.src = "images/settingsMenu/speechOn.png"; // Speech On

const speechOffCir = new Image();
speechOffCir.src = "images/settingsMenu/speechOff.png"; // Speech Off

const musicOnCir = new Image();
musicOnCir.src = "images/settingsMenu/musicOn.png"; // Music On

const musicOffCir = new Image();
musicOffCir.src = "images/settingsMenu/musicOff.png"; // Music Off

const backOnCir = new Image();
backOnCir.src = "images/settingsMenu/backOn.png"; // Background On

const backOffCir = new Image();
backOffCir.src = "images/settingsMenu/backOff.png"; // Background Off

const transLat = new Image();
transLat.src = "images/settingsMenu/balloonTrans.png"; // Translations

///////////////////////////////////////////////////////////////////////

// Translations

const balloonTransMenu = new Image();
balloonTransMenu.src = "images/settingsMenu/balloonTransMenu.png"; // Translation Menu

// Langauge Settings

const langE = new Image();
langE.src = "images/settingsMenu/langE.png";

const langG = new Image();
langG.src = "images/settingsMenu/langG.png";

const langR = new Image();
langR.src = "images/settingsMenu/langR.png";

const langBul = new Image();
langBul.src = "images/settingsMenu/langBul.png";

const langGrk = new Image();
langGrk.src = "images/settingsMenu/langGrk.png";

const langTurk = new Image();
langTurk.src = "images/settingsMenu/langTrk.png";

const crossLang = new Image();
crossLang.src = "images/settingsMenu/cross.png"; // langauge cross - End Langauge Menu





////////////////////////////////////////////////////////////////////////

const cross = new Image();
cross.src = "images/settingsMenu/cross.png"; // cross - End Menu







////////////////////////////////////////////////////




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
var splashAud = new Audio("sounds/splashN.mp3");
var introAud = new Audio("sounds/introN.mp3");
var welldoneAud = new Audio("sounds/well-doneN.mp3");

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

    ctx.fillRect(80, 25, 1050, 700);

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
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center";
    ctx.font='300 55px Comic Sans MS';
    ctx.fillStyle = "red";
    ctx.fillText("How close can you get to the pin", w, 150);
    ctx.fillText("without bursting the balloon?", w, 215);
    ctx.fillStyle = "purple";
    ctx.fillText("Click on the left mouse button", w, 320);
    ctx.fillStyle = "red";
    ctx.fillText("Or Press the Spacebar or Enter Key", w, 391); 
    ctx.fillStyle = "purple";
    ctx.fillText("Or use your switch", w, 460);
    ctx.fillStyle = "blue";
    ctx.font='900 50px Comic Sans MS';
    ctx.fillText("to inflate the balloon!", w, 570);
    ctx.fillStyle = "green";
    ctx.font='200 50px Comic Sans MS';
    ctx.fillText("Spacebar or Left Mouse Button to Play!", w, 680);
    window.addEventListener("click", closeInstructions);

    if (keys[32]) {
        splashSc = false;
        instructionsSc = false;
        gameSc = true;
        introAud.pause();
        introAud.currentTime = 0;
    }
}

function balloonT(e) {
    if (togMenu) {
        if (ctx.isPointInPath(purBall.path, e.offsetX, e.offsetY)) {
            col=true;
            canvas.removeEventListener("click", MustickT);
        }
    } // togMenu
}

function balloonF(e) {
    if (togMenu) {
        if (ctx.isPointInPath(redBall.path, e.offsetX, e.offsetY)) {
            col=false;
            canvas.removeEventListener("click", MustickF);
        }
    } // togMenu
}

function speechT(e) {
    if (togMenu) {
        if (ctx.isPointInPath(speechOnCir.path, e.offsetX, e.offsetY)) {
            speechOn=true;
            canvas.removeEventListener("click", speechT);
        }
    } // togMenu
}

function speechF(e) {
    if (togMenu) {
        if (ctx.isPointInPath(speechOffCir.path, e.offsetX, e.offsetY)) {
            speechOn=false;
            canvas.removeEventListener("click", speechF);
        }
    } // togMenu
}

function musicT(e) {
    if (togMenu) {
        if (ctx.isPointInPath(musicOnCir.path, e.offsetX, e.offsetY)) {
            musicOn=true;
            canvas.removeEventListener("click", musicT);
        }
    } // togMenu
}

function musicF(e) {
    if (togMenu) {
        if (ctx.isPointInPath(musicOffCir.path, e.offsetX, e.offsetY)) {
            musicOn=false;
            canvas.removeEventListener("click", musicF);
        }
    } // togMenu
}

function backT(e) {
    if (togMenu) {
        if (ctx.isPointInPath(backOnCir.path, e.offsetX, e.offsetY)) {
            picOn=true;
            canvas.removeEventListener("click", backT);
        }
    } // togMenu
}

function backF(e) {
    if (togMenu) {
        if (ctx.isPointInPath(backOffCir.path, e.offsetX, e.offsetY)) {
            picOn=false;
            canvas.removeEventListener("click", backF);
        }
    } // togMenu
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// Langauge Translator
function engLang(e) {
    if (setMenu) {
       if (ctx.isPointInPath(langE.path, e.offsetX, e.offsetY)) {
           En = true;
           Ger = false;
           Rom = false;
           Bul = false;
           Grk = false;
           Tuk = false;
           canvas.removeEventListener("click", engLang);
        }
    } 
}

function gerLang(e) {
    if (setMenu) {
       if (ctx.isPointInPath(langG.path, e.offsetX, e.offsetY)) {
           En = false;
           Ger = true;
           Rom = false;
           Bul = false;
           Grk = false;
           Tuk = false;
           canvas.removeEventListener("click", gerLang);
        }
    } 
}

function romLang(e) {
    if (setMenu) {
       if (ctx.isPointInPath(langR.path, e.offsetX, e.offsetY)) {
           En = false;
           Ger = false;
           Rom = true;
           Bul = false;
           Grk = false;
           Tuk = false;
           canvas.removeEventListener("click", romLang);
        }
    } 
}

function bulLang(e) {
    if (setMenu) {
       if (ctx.isPointInPath(langBul.path, e.offsetX, e.offsetY)) {
           En = false;
           Ger = false;
           Rom = false;
           Bul = true;
           Grk = false;
           Tuk = false;
           canvas.removeEventListener("click", bulLang);
        }
    } 
}

function grkLang(e) {
    if (setMenu) {
       if (ctx.isPointInPath(langGrk.path, e.offsetX, e.offsetY)) {
           En = false;
           Ger = false;
           Rom = false;
           Bul = false;
           Grk = true;
           Tuk = false;
           canvas.removeEventListener("click", grkLang);
        }
    } 
}

function trkLang(e) {
    if (setMenu) {
       if (ctx.isPointInPath(langTurk.path, e.offsetX, e.offsetY)) {
           En = false;
           Ger = false;
           Rom = false;
           Bul = false;
           Grk = false;
           Tuk = true;
           canvas.removeEventListener("click", trkLang);
        }
    } 
}

// Langauge Mode //
function langaugeMenu(e) {
    if (togMenu) {
       if (!langaugeMenuSettings && ctx.isPointInPath(transLat.path, e.offsetX, e.offsetY)) {
           langaugeMenuSettings = true;
           canvas.removeEventListener("click", langaugeMenu);
        }
    } 
}

////////////////////////////////////////////////////////////////////////////////////////////


// End Sub-Menu Langauge Mode //
function endMenuLang(e) {
    if (togMenu) {
       if (langaugeMenuSettings && ctx.isPointInPath(crossLang.path, e.offsetX, e.offsetY)) {      
           langaugeMenuSettings = false;
           canvas.removeEventListener("click", endMenuLang);
        }
    } 
}



function endMenu(e) {
    if (togMenu) {
        if (!langaugeMenuSettings && ctx.isPointInPath(cross.path, e.offsetX, e.offsetY)) {
            togSet=true;
            togMenu=false;
            canvas.removeEventListener("click", endMenu);
        }
    } // togMenu
}

function showMenu() {
    togMenu=true;
    togSet=false;
    ctx.fillStyle = "purple";
    ctx.drawImage(setBack, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1.0; 
    ctx.textAlign = "center"; 
    ctx.font = "900 100px Comic Sans MS";
    ctx.fillText("Settings", w, 100);

    if (!musicOn) {
        duck.pause();
        }

    ctx.fillStyle = "purple";
    ctx.textAlign = "left";
    ctx.font = "900 45px Comic Sans MS";
    
    if (En) {
        ctx.fillText("Balloon Colour", 165, 175);
    }

    if (Ger) {
        ctx.fillText("Ballonfarbe", 165, 175);
    }

    if (Rom) {
        ctx.fillText("Culoarea balonului", 165, 175);
    }

    if (Bul) {
        ctx.fillText("Цвят на балон", 165, 175);
    }

    if (Grk) {
        ctx.fillText("Χρώμα μπαλονιού", 165, 175);
    }

    if (Tuk) {
        ctx.fillText("balon rengi", 165, 175);
    }
    
    ctx.fillStyle = "black";
    ctx.font = "700 30px Comic Sans MS";

    ctx.drawImage(purBall, 165, 195, 50, 50);
    purBall.path = new Path2D();
    purBall.path.rect(165, 195, 50, 50);

    ctx.fillStyle = "black";
    ctx.textAlign = "left"; 
    ctx.globalAlpha = 1.0;

    if (col) {
        ctx.drawImage(rTick, 168, 190, 50, 50);
    }

    
    if (En) {
        ctx.fillText("Purple", 220, 230);
    }
    if (Ger) {
        ctx.fillText("Violett", 120, 230);
    }
    if (Rom) {
        ctx.fillText("Violet", 120, 230);
    }
    if (Bul) {
        ctx.fillText("Лилаво", 120, 230);
    }
    if (Grk) {
        ctx.fillText("Μωβ", 120, 230);
    }
    if (Tuk) {
        ctx.fillText("Mor", 120, 230);
    }

    ctx.drawImage(redBall, 165, 250, 50, 50);
    redBall.path = new Path2D();
    redBall.path.rect(165, 250, 50, 50);

    if (!col) {
    ctx.drawImage(rTick, 168, 246, 50, 50);
    } 

    if (En) {
        ctx.fillText("Red", 220, 285);
    }

    if (Ger) {
        ctx.fillText("Rot", 120, 282);
    }
    if (Rom) {
        ctx.fillText("roșu", 120, 282);
    }
    if (Bul) {
        ctx.fillText("червен", 120, 282);
    }
    if (Grk) {
        ctx.fillText("το κόκκινο", 120, 282);
    }
    if (Tuk) {
        ctx.fillText("Kırmızı", 120, 282);
    }

    canvas.addEventListener("click", balloonT);
    canvas.addEventListener("click", balloonF);

    /*------------------------------------------------------ */
    // End of Balloon Colour //



    // Speech //

    ctx.fillStyle = "purple";
    ctx.textAlign = "left"; 
    ctx.font = "900 45px Comic Sans MS";

    if (En) {
        ctx.fillText("Speech", 800, 175);
    }

    /*if (Ger) {
        ctx.fillText("", 149, 162);
    }

    if (Rom) {
        ctx.fillText("", 149, 162);
    }

    if (Bul) {
        ctx.fillText("", 149, 162);
    }

    if (Grk) {
        ctx.fillText("", 149, 162);
    }

    if (Tuk) {
        ctx.fillText("", 149, 162);
    }*/
    
    ctx.fillStyle = "black";
    ctx.font = "700 30px Comic Sans MS";

    ctx.drawImage(speechOnCir, 800, 195, 50, 50);
    speechOnCir.path = new Path2D();
    speechOnCir.path.rect(800, 195, 50, 50);

    ctx.fillStyle = "black";
    ctx.textAlign = "left"; 
    ctx.globalAlpha = 1.0;

    if (speechOn) {
        ctx.drawImage(rTick, 803, 190, 50, 50);
    }

    
    if (En) {
        ctx.fillText("On", 855, 230);
    }
    /*if (Ger) {
        ctx.fillText("", 120, 230);
    }
    if (Rom) {
        ctx.fillText("", 120, 230);
    }
    if (Bul) {
        ctx.fillText("", 120, 230);
    }
    if (Grk) {
        ctx.fillText("", 120, 230);
    }
    if (Tuk) {
        ctx.fillText("", 120, 230);
    }*/

    ctx.drawImage(speechOffCir, 800, 250, 50, 50);
    speechOffCir.path = new Path2D();
    speechOffCir.path.rect(800, 250, 50, 50);

    if (!speechOn) {
    ctx.drawImage(rTick, 803, 245, 50, 50);
    } 

    if (En) {
        ctx.fillText("Off", 855, 285);
    }

    if (Ger) {
        ctx.fillText("Aus", 120, 282);
    }
    if (Rom) {
        ctx.fillText("Off", 120, 282);
    }
    if (Bul) {
        ctx.fillText("Изключено", 120, 282);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 120, 282);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 120, 282);
    }

    canvas.addEventListener("click", speechT);
    canvas.addEventListener("click", speechF);

    /*------------------------------------------------------ */
    // End of Speech Colour //

        // Music & Sound Effcts //

        ctx.fillStyle = "purple";
        ctx.font = "900 45px Comic Sans MS";
        ctx.textAlign = "left"; 
    
        if (En) {
            ctx.fillText("Music and Effects", 165, 350);
        }
    
        /*if (Ger) {
            ctx.fillText("", 149, 162);
        }
    
        if (Rom) {
            ctx.fillText("", 149, 162);
        }
    
        if (Bul) {
            ctx.fillText("", 149, 162);
        }
    
        if (Grk) {
            ctx.fillText("", 149, 162);
        }
    
        if (Tuk) {
            ctx.fillText("", 149, 162);
        }*/
        
        ctx.fillStyle = "black";
        ctx.font = "700 30px Comic Sans MS";
    
        ctx.drawImage(musicOnCir, 165, 368, 50, 50);
        musicOnCir.path = new Path2D();
        musicOnCir.path.rect(165, 363, 50, 50);
    
        ctx.fillStyle = "black";
        ctx.textAlign = "left"; 
        ctx.globalAlpha = 1.0;
    
        if (musicOn) {
            ctx.drawImage(rTick, 168, 363, 50, 50);
        }
    
        
        if (En) {
            ctx.fillText("On", 220, 410);
        }
        /*if (Ger) {
            ctx.fillText("", 120, 230);
        }
        if (Rom) {
            ctx.fillText("", 120, 230);
        }
        if (Bul) {
            ctx.fillText("", 120, 230);
        }
        if (Grk) {
            ctx.fillText("", 120, 230);
        }
        if (Tuk) {
            ctx.fillText("", 120, 230);
        }*/
    
        ctx.drawImage(musicOffCir, 165, 422, 50, 50);
        musicOffCir.path = new Path2D();
        musicOffCir.path.rect(165, 422, 50, 50);
    
        if (!musicOn) {
        ctx.drawImage(rTick, 168, 416, 50, 50);
        } 
    
        if (En) {
            ctx.fillText("Off", 220, 460);
        }
    
        if (Ger) {
            ctx.fillText("Aus", 120, 282);
        }
        if (Rom) {
            ctx.fillText("Off", 120, 282);
        }
        if (Bul) {
            ctx.fillText("Изключено", 120, 282);
        }
        if (Grk) {
            ctx.fillText("Μακριά από", 120, 282);
        }
        if (Tuk) {
            ctx.fillText("Kapalı", 120, 282);
        }
    
        canvas.addEventListener("click", musicT);
        canvas.addEventListener("click", musicF);

    /*------------------------------------------------------ */

    // Background //

    ctx.fillStyle = "purple";
    ctx.font = "900 45px Comic Sans MS";
    ctx.textAlign = "left"; 

    if (En) {
        ctx.fillText("Background", 800, 350);
    }

    /*if (Ger) {
        ctx.fillText("", 149, 162);
    }

    if (Rom) {
        ctx.fillText("", 149, 162);
    }

    if (Bul) {
        ctx.fillText("", 149, 162);
    }

    if (Grk) {
        ctx.fillText("", 149, 162);
    }

    if (Tuk) {
        ctx.fillText("", 149, 162);
    }*/
    
    ctx.fillStyle = "black";
    ctx.font = "700 30px Comic Sans MS";

    ctx.drawImage(backOnCir, 800, 368, 50, 50);
    backOnCir.path = new Path2D();
    backOnCir.path.rect(800, 368, 50, 50);

    ctx.fillStyle = "black";
    ctx.textAlign = "left"; 
    ctx.globalAlpha = 1.0;

    if (picOn) {
        ctx.drawImage(rTick, 803, 363, 50, 50);
    }

    
    if (En) {
        ctx.fillText("On", 855, 410);
    }
    /*if (Ger) {
        ctx.fillText("", 120, 230);
    }
    if (Rom) {
        ctx.fillText("", 120, 230);
    }
    if (Bul) {
        ctx.fillText("", 120, 230);
    }
    if (Grk) {
        ctx.fillText("", 120, 230);
    }
    if (Tuk) {
        ctx.fillText("", 120, 230);
    }*/

    ctx.drawImage(backOffCir, 800, 422, 50, 50);
    backOffCir.path = new Path2D();
    backOffCir.path.rect(800, 422, 50, 50);

    if (!picOn) {
    ctx.drawImage(rTick, 803, 416, 50, 50);
    } 

    if (En) {
        ctx.fillText("Off", 855, 460);
    }

    if (Ger) {
        ctx.fillText("Aus", 120, 282);
    }
    if (Rom) {
        ctx.fillText("Off", 120, 282);
    }
    if (Bul) {
        ctx.fillText("Изключено", 120, 282);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 120, 282);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 120, 282);
    }

    canvas.addEventListener("click", backT);
    canvas.addEventListener("click", backF);

    /*------------------------------------------------------ */
    // End of Background //

    /*------------------------------------------------------ */

    // Translations //

    ctx.textAlign = "center"; 
    ctx.drawImage(transLat, w-110, 485, 240, 130);

    ctx.fillStyle = "black";

    if (En) {
        ctx.font = "900 30px Arial";
        ctx.fillText("Language", 610, 540);
        ctx.font = "500 30px Arial";
        ctx.fillText("English", 610, 575);
    }

    if (Ger) {
        ctx.font = "900 30px Arial";
        ctx.fillText("Sprache", 610, 540);
        ctx.font = "500 30px Arial";
        ctx.fillText("Deutsch", 610, 575);
    }

    if (Rom) {
        ctx.font = "900 30px Arial";
        ctx.fillText("Limba", 610, 540);
        ctx.font = "500 30px Arial";
        ctx.fillText("rumänisch", 610, 575);
    }

    if (Bul) {
        ctx.font = "900 30px Arial";
        ctx.fillText("език", 610, 540);
        ctx.font = "500 30px Arial";
        ctx.fillText("български", 610, 575);
    }

    if (Grk) {
        ctx.font = "900 30px Arial";
        ctx.fillText("Γλώσσα", 610, 540);
        ctx.font = "500 30px Arial";
        ctx.fillText("Ελληνικά", 610, 575);
    }

    if (Tuk) {
        ctx.font = "900 30px Arial";
        ctx.fillText("Dil", 610, 540);
        ctx.font = "500 30px Arial";
        ctx.fillText("Türk", 610, 575);
    }

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    transLat.path = new Path2D();
    transLat.path.rect(w-110, 485, 240, 130);

    if (langaugeMenuSettings) {


        ctx.drawImage(balloonTransMenu, w/2, 480, 600, 230);


////////////////////////////////////////////////////////
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.font = "900 24px Comic Sans MS";

        ctx.fillText("English", 415, 525);
        ctx.drawImage(langE, 390, 535, 40, 40);
        langE.path = new Path2D();
        langE.path.rect(390, 535, 40, 40);
        if (En) {
            ctx.drawImage(rTick, 390, 535, 40, 40);
        }

        ctx.fillText("German", w-5, 525);
        ctx.drawImage(langG, w-27, 535, 40, 40);
        langG.path = new Path2D();
        langG.path.rect(w-27, 535, 40, 40);
        if (Ger) {
            ctx.drawImage(rTick, w-27, 535, 40, 40);
        }

        ctx.fillText("Romanian", 800, 525);
        ctx.drawImage(langR, 780, 535, 40, 40);
        langR.path = new Path2D();
        langR.path.rect(780, 535, 40, 40);
        if (Rom) {
            ctx.drawImage(rTick, 780, 535, 40, 40);
        }

        ctx.fillText("Bulgarian", 415, 600);
        ctx.drawImage(langBul, 390, 609, 40, 40);
        langBul.path = new Path2D();
        langBul.path.rect(390, 609, 40, 40);
        if (Bul) {
            ctx.drawImage(rTick, 390, 609, 40, 40);
        }

        ctx.fillText("Greek", w-5, 600);
        ctx.drawImage(langGrk, w-27, 607, 40, 40);
        langGrk.path = new Path2D();
        langGrk.path.rect(w-27, 607, 40, 40);
        if (Grk) {
            ctx.drawImage(rTick, w-27, 607, 40, 40);
        }

        ctx.fillText("Turkish", 800, 600);
        ctx.drawImage(langTurk, 780, 607, 40, 40);
        langTurk.path = new Path2D();
        langTurk.path.rect(780, 607, 40, 40);
        if (Tuk) {
            ctx.drawImage(rTick, 780, 607, 40, 40);
        }



        canvas.addEventListener("click", engLang);
        canvas.addEventListener("click", gerLang);
        canvas.addEventListener("click", romLang);
        canvas.addEventListener("click", bulLang);
        canvas.addEventListener("click", grkLang);
        canvas.addEventListener("click", trkLang);

        ctx.drawImage(crossLang, w-27, 658, 40, 40);
        crossLang.path = new Path2D();
        crossLang.path.rect(w-27, 658, 40, 40);

        canvas.addEventListener("click", endMenuLang);
    }

    canvas.addEventListener("click", langaugeMenu);

    /////////////////////////////////////////////


    //------------------------------------------------------------------------------//

    if (!langaugeMenuSettings) {
    ctx.drawImage(cross, w-20, 650, 50, 50);
    cross.path = new Path2D();
    cross.path.rect(w-20, 650, 50, 50);

    canvas.addEventListener("click", endMenu);
    } // langaugeMenuSettings = false


} // End of showMenu



function setMenu(e) {
        if (ctx.isPointInPath(setting.path, e.offsetX, e.offsetY)) {
            togSet=false;
            togMenu=true;
            showMenu();
            canvas.removeEventListener("click", setMenu);
        }
}

function splash() {
    if (picOn) {
    ctx.drawImage(bnSplash, 0, 0, canvas.width, canvas.height);
    }
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.8;
    ctx.fillRect(95, 400, 1010, 300);
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center"; 
    ctx.font = "40px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.fillText("Click the left mouse button", w, 460);
    ctx.fillStyle = "red";
    ctx.fillText("or press the Enter Key", w, 525);
    ctx.fillStyle = "blue";
    ctx.fillText("or use your switch", w, 590);
    ctx.fillStyle = "purple";
    ctx.font='900 40px Comic Sans MS';
    ctx.fillText("for the instructions!", w, 660);

    if (keys[65]) { // audio
        splashAud.play();
    }

    ctx.fillStyle = "white";
    ctx.fillRect(105, 410, 150, 140);
    ctx.drawImage(speech, 155, 420, 50, 50);
    ctx.font = "bold 13px arial";
    ctx.fillStyle = "black";
    ctx.fillText("Left Click or Press A", 175, 490);
    ctx.fillText("on your Keyboard", 180, 512);
    ctx.fillText("for Speech", 175, 535);


    if (keys[13]) { // next page
        splashSc = false;
        instructionsSc = true;
        splashAud.pause();
        splashAud.currentTime = 0;
    }


    ctx.fillStyle = "white";

    ctx.fillRect(945, 410, 150, 140);

    ctx.drawImage(setting, 978, 402, 80, 80);
    setting.path = new Path2D();
    setting.path.rect(945, 410, 150, 140);

    canvas.addEventListener("click", setMenu);


    ctx.font = "bold 13px arial";
    ctx.fillStyle = "black";
    ctx.fillText("Left Click or Press S", 1015, 490);
    ctx.fillText("on your Keyboard", 1020, 512);
    ctx.fillText("for Settings", 1025, 535);

    if (keys[83]) { //s
        togSet=false;
        togMenu=true;
        showMenu();
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

        if (togMenu) {
            showMenu();
        }

    if (instructionsSc) {
        instructions();
        }

    if (gameSc) {

        if (picOn) {
        ctx.drawImage(balGame, 0, 0, canvas.width, canvas.height);
        }

        if (keys[32] || keys[13]) {
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
            ctx.fillText("Oops!", w, 200);
            ctx.font = "90px Comic Sans MS";
            ctx.fillStyle = "blue";
            ctx.fillText("You have burst", w, 330);
            ctx.fillText("the balloon!", w, 430);
            ctx.font = "60px Comic Sans MS";
            ctx.fillStyle = "red";
            ctx.fillText("Click the right mouse button", w, 530);
            ctx.fillText("or the Enter Key", w, 599);
            ctx.fillText("or use your Switch to play again!", w, 670);
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



