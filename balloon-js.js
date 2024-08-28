const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;


var volLock = true;

var splashOff = true;

var vol1 = false;
var vol2 = false;;
var vol3 = true;
var vol4 = false;
var vol5 = false;

var paused = false;

var closeMenuBox = false;

// button
const button1 = new Image();
button1.src = "images/button.png";


// vol gfx
// 1
const v1Gr = new Image();
v1Gr.src = "red_vol.png";
const v1Gb = new Image();
v1Gb.src = "black_vol.png";

// 2
const v2Gr = new Image();
v2Gr.src = "red_vol.png";
const v2Gb = new Image();
v2Gb.src = "black_vol.png";

// 3
const v3Gr = new Image();
v3Gr.src = "red_vol.png";
const v3Gb = new Image();
v3Gb.src = "black_vol.png";

// 4
const v4Gr = new Image();
v4Gr.src = "red_vol.png";
const v4Gb = new Image();
v4Gb.src = "black_vol.png";

// 5
const v5Gr = new Image();
v5Gr.src = "red_vol.png";
const v5Gb = new Image();
v5Gb.src = "black_vol.png";



const wBg = new Image();
wBg.src = "images/white_bg.png";



/////Translation Menu //////////
var En = true;
var Ger = false;
var Rom = false;
var Bul = false;
var Grk = false;
var Tuk = false;

var langaugeMenuSettings = false;
/////////////////////////////////

var pinOff = true;
var tapeOn = true;
var ballnOn = true;

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


//start
const start = new Image();
start.src = "images/start.png";



//settings//////////////////////////////////

const setting = new Image();
setting.src = "images/settingsMenu/settings.png"; // Cog Image

const settingGameImg = new Image();
settingGameImg.src = "images/settingsMenu/settings.png"; // Cog Image - Game

const reStartImg = new Image();
reStartImg.src = "images/settingsMenu/reload.png"; // Cog Image - Restart Game

const settingIns = new Image();
settingIns.src = "images/settingsMenu/settings.png"; // Ins Cog Image

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

const crossVol = new Image();
crossVol.src = "images/settingsMenu/cross.png"; // Vol cross - End Vol Menu



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

var introAud = new Audio("sounds/uk-ins.mp3"); // uk
var introAudger = new Audio("sounds/ger-ins.mp3"); // ger
var introAudrom = new Audio("sounds/rom-ins.mp3"); // rom
var introAudBul = new Audio("sounds/bul-ins.mp3"); // bul
var introAudGrk = new Audio("sounds/grk-ins.mp3"); // grk
var introAudTuk = new Audio("sounds/tuk-ins.mp3"); // tuk

var welldoneAud = new Audio("sounds/well-doneN.mp3"); //uk
var welldoneAudger = new Audio("sounds/well-done-ger.mp3"); // ger
var welldoneAudrom = new Audio("sounds/well-done-rom.mp3"); // rom
var welldoneAudbul = new Audio("sounds/well-done-bul.mp3"); // bul
var welldoneAudgrk = new Audio("sounds/well-done-grk.mp3"); // grk
var welldoneAudTuk = new Audio("sounds/well-done-tuk.mp3"); // tuk

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    air.pause();
    air.currentTime = 0;
});


////////////////////////////////////////////////////////////////////////// 28/7/24 ///////////////////////////////////////////



// volume
// v1
function v1R(e) {
        if (ctx.isPointInPath(v1Gr.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v1R);
        }
}

function v1B(e) {
        if (ctx.isPointInPath(v1Gb.path, e.offsetX, e.offsetY)) {
            vol1=true;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v1B);
        }
}

//v2
function v2R(e) {
        if (ctx.isPointInPath(v2Gr.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v2R);
        }
}

function v2B(e) {
        if (ctx.isPointInPath(v2Gb.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=true;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v2B);
        }
}

// v3
function v3R(e) {
        if (ctx.isPointInPath(v3Gr.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v3R);
        }
}

function v3B(e) {
        if (ctx.isPointInPath(v3Gb.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=true;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v3B);
        }
}

// v4
function v4R(e) {
        if (ctx.isPointInPath(v4Gr.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v3R);
        }
}

function v4B(e) {
        if (ctx.isPointInPath(v4Gb.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=true;
            vol5=false;
            canvas.removeEventListener("click", v4B);
        }
}

// v5
function v5R(e) {
        if (ctx.isPointInPath(v5Gr.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v5R);
        }
}

function v5B(e) {
        if (ctx.isPointInPath(v5Gb.path, e.offsetX, e.offsetY)) {   
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=true;
            canvas.removeEventListener("click", v5B);
        }
}


function wBgClick(e) {
        if (ctx.isPointInPath(wBg.path, e.offsetX, e.offsetY)) {
            /*splashOff = false;*/	
            volLock = false;
            canvas.removeEventListener("click", wBgClick);
        }
}

/*function volFn2() {



}*/


function volumeSet() {
    if (vol1) {
        duck.volume = 0.1;
    }
    if (vol2) {
        duck.volume = 0.3;
    }
    if (vol3) {
        duck.volume = 0.5;
    }
    if (vol4) {
        duck.volume = 0.7;
    }
    if (vol5) {
        duck.volume = 1;
    }
}

/////////////////////////////////////// end 28/7/24 ////////////////////////////////////













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
        if (ballnOn) {
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
    }//ballOn
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








if (ballnOn) {






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
    
    
}//BallnOn




}

function closeSplash(e) {
    if (volLock && ctx.isPointInPath(button1.path, e.offsetX, e.offsetY)) {
    splashSc = false;
    instructionsSc = true;
    splashAud.pause();
    splashAud.currentTime = 0;	
    canvas.removeEventListener("click", closeSplash);
    }	
}


function endVolCont(e) {
    if (ctx.isPointInPath(crossVol.path, e.offsetX, e.offsetY)) {
    volLock = true;
    canvas.removeEventListener("click", endVolCont);
    }	
}




function startImg(e) {
    if (!togMenu && ctx.isPointInPath(start.path, e.offsetX, e.offsetY)) {

    instructionsSc = false;
    gameSc = true;
    pinIn = true;
    ballnOn = true;

    introAud.pause();
    introAud.currentTime = 0;
    introAudger.pause();
    introAudger.currentTime = 0;
    introAudrom.pause();
    introAudrom.currentTime = 0;
    introAudBul.pause();
    introAudBul.currentTime = 0;
    introAudGrk.pause();
    introAudGrk.currentTime = 0;
    introAudTuk.pause();
    introAudTuk.currentTime = 0;


    window.removeEventListener("click", startImg);
    }
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
    ballnOn = true;
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

function setMenuIns(e) {
    if (ctx.isPointInPath(settingIns.path, e.offsetX, e.offsetY)) {
        togSet=false;
        togMenu=true;
        showMenu();
        canvas.removeEventListener("click", setMenuIns);
    }
}

function settings() {

    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.9;

    ctx.fillRect(80, 5, 1050, 720);

    ctx.globalAlpha = 1.0;
    ctx.font = "bold 25px Comic Sans MS";

    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "blue";
    ctx.rect(980, 14, 140, 100);
    ctx.stroke();

    ctx.drawImage(settingIns, 1018, 15, 65, 65);
    settingIns.path = new Path2D();
    settingIns.path.rect(980, 14, 140, 100);
    ctx.fillStyle = "black";

    canvas.addEventListener("click", setMenuIns);


    if (En) {
        ctx.font='900 15px Comic Sans MS';
        ctx.fillText("Left Click", 1050, 85);
        //ctx.fillText("Or Enter Key", 1050, 100);
    }

    if (Ger) {
        ctx.font='900 13px Comic Sans MS';
        ctx.fillText("Links Klick", 1050, 85);
        //ctx.fillText("Oder Eingabetaste", 1050, 100);
    }

    if (Rom) {
        ctx.font='900 11px Comic Sans MS';
        ctx.fillText("Click stânga", 1050, 85);
        //ctx.fillText("Sau Introduceți cheia", 1050, 100);
    }

    if (Bul) {
        ctx.font='900 13px Comic Sans MS';
        ctx.fillText("Ляв клик", 1050, 85);
        //ctx.fillText("Или въведете ключ", 1050, 100);
    }

    if (Grk) {
        ctx.font='900 13px Comic Sans MS';
        ctx.fillText("Αριστερό κλικ", 1050, 85);
        //ctx.fillText("Ή Enter Key", 1050, 100);
    }

    if (Tuk) {
        ctx.font='900 11px Comic Sans MS';
        ctx.fillText("Sol tık", 1050, 85);
        //ctx.fillText("Veya Anahtar Girin", 1050, 100);
    }





    

    if (!musicOn) {
        duck.pause();
        }
    
    if (keys[83]) { //s
        togSet=false;
        togMenu=true;
        showMenu();
    }

    
    ctx.fillStyle = "white"; 
    ctx.globalAlpha = 1.0;
    ctx.textAlign = "center";
    
/*En
Ger
Rom
Bul
Grk
Tuk*/

//////////////////////////////////////
// Button Image
ctx.drawImage(start, (canvas.width/2 - 600/2), 350, 600, 300);
start.path = new Path2D();
start.path.rect((canvas.width/2 - 600/2), 350, 600, 300);
/////////////////////////////////////////

    if (En) {

        if (speechOn) {
            introAud.play();
        }

        ctx.font='900 70px Comic Sans MS';
        ctx.fillStyle = "red";
        ctx.fillText("How close can you get", w, 180);
        ctx.fillText("to the pin without", w, 250);
        ctx.fillText("bursting the balloon?", w, 320);

        // Button
        ctx.fillStyle = "white";
        ctx.font='900 40px Comic Sans MS';
        ctx.fillText("Left Click to Start", w, 440);
        ctx.fillText("and Inflate the Balloon!", w, 490);
        ctx.font='600 25px Comic Sans MS';
        ctx.fillText("Or Spacebar", w, 530);
        ctx.fillText("Or Enter Key", w, 565);
        ctx.fillText("Or use your switch", w, 600);

    }

    if (Ger) {

        if (speechOn) {
            introAudger.play();
        }

        ctx.font='900 70px Comic Sans MS';
        ctx.fillStyle = "red";
        ctx.fillText("Wie nah kann man kommen", w, 180);
        ctx.fillText("zum Stift ohne", w, 250);
        ctx.fillText("den Ballon platzen lassen?", w, 320);

        // Button
        ctx.fillStyle = "white";
        ctx.font='900 40px Comic Sans MS';
        ctx.fillText("Linksklick zum Starten", w, 440);
        ctx.fillText("und den Ballon aufblasen!", w, 490);
        ctx.font='600 25px Comic Sans MS';
        ctx.fillText("Goldene Leertaste", w, 530);
        ctx.fillText("Oder Eingabetaste", w, 565);
        ctx.fillText("Oder verwenden Sie Ihren Schalter", w, 600);
        
    }

    if (Rom) {

        if (speechOn) {
            introAudrom.play();
        }

        ctx.font='900 65px Comic Sans MS';
        ctx.fillStyle = "red";
        ctx.fillText("Cât de aproape te poți apropia", w, 180);
        ctx.fillText("la ac fără", w, 250);
        ctx.fillText("spargerea balonului?", w, 320);

        // Button
        ctx.fillStyle = "white";
        ctx.font='900 30px Comic Sans MS';
        ctx.fillText("Faceți clic stânga pentru a începe", w, 440);
        ctx.fillText("și umflați balonul!", w, 490);
        ctx.font='600 25px Comic Sans MS';
        ctx.fillText("Sau bara de spațiu", w, 530);
        ctx.fillText("Sau Introduceți cheia", w, 565);
        ctx.fillText("Sau folosiți comutatorul", w, 600);
        
        
    }

    if (Bul) {

        if (speechOn) {
            introAudBul.play();
        }
        
        ctx.font='900 55px Comic Sans MS';
        ctx.fillStyle = "red";
        ctx.fillText("Колко близо можете да стигнете", w, 180);
        ctx.fillText("към щифта без", w, 250);
        ctx.fillText("спукване на балона?", w, 320);

        // Button
        ctx.fillStyle = "white";
        ctx.font='900 24px Comic Sans MS';
        ctx.fillText("Щракнете с левия бутон, за да започнете", w, 440);
        ctx.fillText("и надуйте балона!", w, 490);
        ctx.font='600 25px Comic Sans MS';
        ctx.fillText("Или интервал", w, 530);
        ctx.fillText("Или въведете ключ", w, 565);
        ctx.fillText("Или използвайте превключвателя си", w, 600);
    }

    if (Grk) {

        if (speechOn) {
            introAudGrk.play();
        }
        
        ctx.font='900 55px Comic Sans MS';
        ctx.fillStyle = "red";
        ctx.fillText("Πόσο κοντά μπορείς να φτάσεις", w, 180);
        ctx.fillText("στην καρφίτσα χωρίς", w, 250);
        ctx.fillText("σκάσει το μπαλόνι;", w, 320);

        // Button
        ctx.fillStyle = "white";
        ctx.font='900 30px Comic Sans MS';
        ctx.fillText("Αριστερό κλικ για Έναρξη", w, 440);
        ctx.fillText("και φουσκώστε το μπαλόνι!", w, 490);
        ctx.font='600 25px Comic Sans MS';
        ctx.fillText("Ή Spacebar", w, 530);
        ctx.fillText("Ή Enter Key", w, 565);
        ctx.fillText("Ή χρησιμοποιήστε το διακόπτη σας", w, 600);
        
    }

    if (Tuk) {

        if (speechOn) {
            introAudTuk.play();
        }
        
        ctx.font='900 55px Comic Sans MS';
        ctx.fillStyle = "red";
        ctx.fillText("ne kadar yaklaşabilirsin", w, 180);
        ctx.fillText("pin olmadan", w, 250);
        ctx.fillText("balon patlatmak mı?", w, 320);

        // Button
        ctx.fillStyle = "white";
        ctx.font='900 30px Comic Sans MS';
        ctx.fillText("Başlatmak için Sol Tıklayın", w, 440);
        ctx.fillText("ve Balonu Şişirin!", w, 490);
        ctx.font='600 25px Comic Sans MS';
        ctx.fillText("Veya Ara Çubuğu", w, 530);
        ctx.fillText("Veya Anahtar Girin", w, 565);
        ctx.fillText("Veya anahtarınızı kullanın", w, 600);
        
    }



    canvas.addEventListener("click", startImg);

    
    






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
            canvas.removeEventListener("click", balloonT);
        }
    } // togMenu
}

function balloonF(e) {
    if (togMenu) {
        if (ctx.isPointInPath(redBall.path, e.offsetX, e.offsetY)) {
            col=false;
            canvas.removeEventListener("click", balloonF);
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
    if (togMenu && langaugeMenuSettings) {
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
    if (togMenu && langaugeMenuSettings) {
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
    if (togMenu && langaugeMenuSettings) {
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
    if (togMenu && langaugeMenuSettings) {
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
    if (togMenu && langaugeMenuSettings) {
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
    if (togMenu && langaugeMenuSettings) {
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
            pinOff = true;
            tapeOn = true;
            picOn = true;
            ballnOn = true;
            pinIn = true;
            canvas.removeEventListener("click", endMenu);
        }
    } // togMenu
}

function showMenu() {

    introAud.pause();
    introAud.currentTime = 0;
    introAudger.pause();
    introAudger.currentTime = 0;
    introAudrom.pause();
    introAudrom.currentTime = 0;
    introAudBul.pause();
    introAudBul.currentTime = 0;
    introAudGrk.pause();
    introAudGrk.currentTime = 0;
    introAudTuk.pause();
    introAudTuk.currentTime = 0;
    


    togMenu=true;
    togSet=false;
    ctx.fillStyle = "purple";
    ctx.drawImage(setBack, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1.0; 
    ctx.textAlign = "center"; 
    ctx.font = "900 100px Comic Sans MS";

    if (En) {
        ctx.fillText("Settings", w, 100);
    }

    if (Ger) {
        ctx.fillText("Einstellungen", w, 100);
    }

    if (Rom) {
        ctx.fillText("Setări", w, 100);
    }

    if (Bul) {
        ctx.fillText("Настройки", w, 100);
    }

    if (Grk) {
        ctx.fillText("Ρυθμίσεις", w, 100);
    }

    if (Tuk) {
        ctx.fillText("Ayarlar", w, 100);
    }
    

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
        ctx.fillText("Violett", 220, 230);
    }
    if (Rom) {
        ctx.fillText("Violet", 220, 230);
    }
    if (Bul) {
        ctx.fillText("Лилаво", 220, 230);
    }
    if (Grk) {
        ctx.fillText("Μωβ", 220, 230);
    }
    if (Tuk) {
        ctx.fillText("Mor", 220, 230);
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
        ctx.fillText("Rot", 220, 282);
    }
    if (Rom) {
        ctx.fillText("roșu", 220, 282);
    }
    if (Bul) {
        ctx.fillText("червен", 220, 282);
    }
    if (Grk) {
        ctx.fillText("το κόκκινο", 220, 282);
    }
    if (Tuk) {
        ctx.fillText("Kırmızı", 220, 282);
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

    if (Ger) {
        ctx.fillText("Rede", 800, 175);
    }

    if (Rom) {
        ctx.fillText("Vorbire", 800, 175);
    }

    if (Bul) {
        ctx.fillText("реч", 800, 175);
    }

    if (Grk) {
        ctx.fillText("Ομιλία", 800, 175);
    }

    if (Tuk) {
        ctx.fillText("Konuşma", 800, 175);
    }
    
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
    if (Ger) {
        ctx.fillText("An", 855, 230);
    }
    if (Rom) {
        ctx.fillText("Pe", 855, 230);
    }
    if (Bul) {
        ctx.fillText("Ha", 855, 230);
    }
    if (Grk) {
        ctx.fillText("Επί", 855, 230);
    }
    if (Tuk) {
        ctx.fillText("Üzerinde", 855, 230);
    }

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
        ctx.fillText("Aus", 855, 285);
    }
    if (Rom) {
        ctx.fillText("Off", 855, 285);
    }
    if (Bul) {
        ctx.fillText("Изключено", 855, 285);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 855, 285);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 855, 285);
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
    
        if (Ger) {
            ctx.fillText("Musik und Effekte", 165, 350);
        }
    
        if (Rom) {
            ctx.fillText("Muzică și efecte", 165, 350);
        }
    
        if (Bul) {
            ctx.fillText("Музика и ефекти", 165, 350);
        }
    
        if (Grk) {
            ctx.fillText("Μουσική και εφέ", 165, 350);
        }
    
        if (Tuk) {
            ctx.fillText("Müzik ve Efektler", 165, 350);
        }


        
        
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
       
        if (Ger) {
            ctx.fillText("An", 220, 410);
        }
        if (Rom) {
            ctx.fillText("Pe", 220, 410);
        }
        if (Bul) {
            ctx.fillText("Ha", 220, 410);
        }
        if (Grk) {
            ctx.fillText("Επί", 220, 410);
        }
        if (Tuk) {
            ctx.fillText("Üzerinde", 220, 410);
        }
    
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
            ctx.fillText("Aus", 220, 460);
        }
        if (Rom) {
            ctx.fillText("Off", 220, 460);
        }
        if (Bul) {
            ctx.fillText("Изключено", 220, 460);
        }
        if (Grk) {
            ctx.fillText("Μακριά από", 220, 460);
        }
        if (Tuk) {
            ctx.fillText("Kapalı", 220, 460);
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

    if (Ger) {
        ctx.fillText("Hintergrund", 800, 350);
    }

    if (Rom) {
        ctx.fillText("fundal", 800, 350);
    }

    if (Bul) {
        ctx.fillText("Заден план", 800, 350);
    }

    if (Grk) {
        ctx.fillText("Ιστορικό", 800, 350);
    }

    if (Tuk) {
        ctx.fillText("Arka fon", 800, 350);
    }
    
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
    
    if (Ger) {
        ctx.fillText("An", 855, 410);
    }
    if (Rom) {
        ctx.fillText("Pe", 855, 410);
    }
    if (Bul) {
        ctx.fillText("Ha", 855, 410);
    }
    if (Grk) {
        ctx.fillText("Επί", 855, 410);
    }
    if (Tuk) {
        ctx.fillText("Üzerinde", 855, 410);
    }

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
        ctx.fillText("Aus", 855, 460);
    }
    if (Rom) {
        ctx.fillText("Off", 855, 460);
    }
    if (Bul) {
        ctx.fillText("Изключено", 855, 460);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 855, 460);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 855, 460);
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



function setMenuSplash(e) {
        if (ctx.isPointInPath(setting.path, e.offsetX, e.offsetY)) {
            togSet=false;
            togMenu=true;
            showMenu();
            canvas.removeEventListener("click", setMenuSplash);
        }
}

function settingsGame(e) {
    if (ctx.isPointInPath(settingGameImg.path, e.offsetX, e.offsetY)) {
        tapeOn = false;
        pinOff = false;
        picOn = false;
        togSet=false;
        togMenu=true;
        pinIn=false;
        ballnOn=false;
        showMenu();
        canvas.removeEventListener("click", settingsGame);
    }
}

function reStart(e) {
    if (ctx.isPointInPath(reStartImg.path, e.offsetX, e.offsetY)) {  
        splashSc = true;
        instructionsSc = false;
        gameSc = false;
        pinIn = true;
        inBall.bWidth = 70;
        inBall.bHeight = 100;
        st.x = 501;
        shine.x = 580;
        shine.y = 350;
        canvas.removeEventListener("click", reStart);
    }
}

function splash() {
	
    if (picOn) {
    ctx.drawImage(bnSplash, 0, 0, canvas.width, canvas.height);
    }


    if (volLock) {
        ctx.drawImage(wBg, w-160, 0, 350, 80);
        wBg.path = new Path2D();
        wBg.path.rect(w-160, 0, 350, 80);
        ctx.font='900 40px Comic Sans MS';
        ctx.fillText("Set Volume", w+10, 55);
        //canvas.addEventListener("click", wBgClick);
        }
	
        /*if (!volLock) {
            volFn2();
        }*/

            




    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.8;
    ctx.fillRect(95, 400, 1010, 300);
    ctx.globalAlpha = 1.0;
    /////////////////////////////////////////////////////////////////////////////////////////
////////////// 27/8/24 /////////////////////////////
    
ctx.drawImage(button1, 290, 410, 620, 262);
button1.path = new Path2D();
button1.path.rect(290, 410, 620, 262);

////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
    ctx.textAlign = "center"; 
    ctx.font = "40px Comic Sans MS";
    ctx.fillStyle = "white";

    if (En) {
        ctx.fillText("Left Click here", w, 460);
        ctx.fillText("or press the Enter Key", w, 525);
        ctx.fillText("or use your switch", w, 590);
        ctx.fillText("for the instructions!", w, 660);    
    }

    if (Ger) {
        ctx.fillText("", w, 460);
        ctx.fillStyle = "red"; 
        ctx.fillText("", w, 525);
        ctx.fillStyle = "blue";
        ctx.fillText("", w, 590);
        ctx.fillStyle = "purple";
        ctx.font='900 40px Comic Sans MS';
        ctx.fillText("", w, 660);    
    }
    

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

    canvas.addEventListener("click", setMenuSplash);


    ctx.font = "bold 13px arial";
    ctx.fillStyle = "black";
    ctx.fillText("Left Click", 1015, 490);
    ctx.fillText("for Settings", 1017, 510);
	
	
	
	

    if (keys[83]) { //s
        togSet=false;
        togMenu=true;
        showMenu();
    }


    if (!volLock) {
        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.8;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
                ctx.drawImage(wBg, w-160, 0, 350, 80); 
                ctx.font = "700 35px Arial";
                ctx.fillStyle = "blue";
                ctx.fillText("Min", w-110, 47);
                
                // v1
                if (vol1) {
                    ctx.drawImage(v1Gr, w-60, 17, 10, 35);
                    v1Gr.path = new Path2D();
                    v1Gr.path.rect(w-60, 20, 10, 45);
                }
                if (!vol1) {
                    ctx.drawImage(v1Gb, w-60, 17, 10, 35);
                    v1Gb.path = new Path2D();
                    v1Gb.path.rect(w-60, 20, 10, 45);
                }
                    canvas.addEventListener("click", v1R);
                    canvas.addEventListener("click", v1B);
                
                // v2
                if (vol2) {
                    ctx.drawImage(v2Gr, w-30, 17, 10, 35);
                    v2Gr.path = new Path2D();
                    v2Gr.path.rect(w-30, 17, 10, 45);
                }
                if (!vol2) {
                    ctx.drawImage(v2Gb, w-30, 17, 10, 35);
                    v2Gb.path = new Path2D();
                    v2Gb.path.rect(w-30, 17, 10, 45);
                }
                    canvas.addEventListener("click", v2R);
                    canvas.addEventListener("click", v2B);
                
                //v3
                if (vol3) {
                    ctx.drawImage(v3Gr, w, 17, 10, 35);
                    v3Gr.path = new Path2D();
                    v3Gr.path.rect(w, 17, 10, 35);
                }
                if (!vol3) {
                    ctx.drawImage(v3Gb, w, 17, 10, 35);
                    v3Gb.path = new Path2D();
                    v3Gb.path.rect(w, 17, 10, 35);
                }
                    canvas.addEventListener("click", v3R);
                    canvas.addEventListener("click", v3B);
                
                // v4
                if (vol4) {
                    ctx.drawImage(v4Gr, w+30, 17, 10, 35);
                    v4Gr.path = new Path2D();
                    v4Gr.path.rect(w+30, 17, 10, 35);
                }
                if (!vol4) {
                    ctx.drawImage(v4Gb, w+30, 17, 10, 35);
                    v4Gb.path = new Path2D();
                    v4Gb.path.rect(w+30, 17, 10, 35);
                }
                    canvas.addEventListener("click", v4R);
                    canvas.addEventListener("click", v4B);
                
                
                // v5
                if (vol5) {
                    ctx.drawImage(v5Gr, w+60, 17, 10, 35);
                    v5Gr.path = new Path2D();
                    v5Gr.path.rect(w+60, 17, 10, 45);
                }
                if (!vol5) {
                    ctx.drawImage(v5Gb, w+60, 17, 10, 35);
                    v5Gb.path = new Path2D();
                    v5Gb.path.rect(w+60, 17, 10, 45);
                }
                    canvas.addEventListener("click", v5R);
                    canvas.addEventListener("click", v5B);
                
                ctx.font = "700 35px Arial";
                ctx.fillStyle = "blue";
                ctx.fillText("Max", w+125, 47);
                
                
                ctx.font = "700 15px Comic Sans MS";
                //ctx.fillText("Volume", w+5, 70);
                ctx.drawImage(crossVol, w-5, 55, 19, 19);
                crossVol.path = new Path2D();
                crossVol.path.rect(w-5, 54, 19, 19);
                
                }  // lockoff  


   
    canvas.addEventListener("click", wBgClick);
    if (!volLock) {
        canvas.addEventListener("click", endVolCont);
    }
    canvas.addEventListener("click", closeSplash);

    

    
}

function game() {

    if (ballnOn) {

       if (picOn) {
           ctx.drawImage(balGame, 0, 0, canvas.width, canvas.height);
       }

    if (tapeOn) {
    //settings
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.7;

    ctx.fillRect(0, 0, 1200, 70);
    ctx.globalAlpha = 1.0;

    ctx.drawImage(settingGameImg, 1100, 0, 45, 45);
    settingGameImg.path = new Path2D();
    settingGameImg.path.rect(1100, 0, 45, 45);

    ctx.font = "bold 11px arial";
    ctx.fillStyle = "blue";
    ctx.fillText("Left Click", 1120, 50);
    ctx.fillText("for Settings", 1120, 60);

    ctx.drawImage(reStartImg, 47, 5, 40, 40);
    reStartImg.path = new Path2D();
    reStartImg.path.rect(47, 0, 45, 45);

    ctx.font = "bold 11px arial";
    ctx.fillStyle = "blue";
    ctx.fillText("Left Click", 70, 55);
    ctx.fillText("to restart", 70, 65);

    canvas.addEventListener("click", reStart);
    canvas.addEventListener("click", settingsGame);
    }

    // end of settings link

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


            
            
            ctx.fillStyle = "white";
            ctx.globalAlpha = 0.9; 
            ctx.fillRect(120, 40, 950, 650);
            ctx.globalAlpha = 1.0; 
            ctx.fillStyle = "red";
            ctx.textAlign = "center"; 
            ctx.font = "140px Comic Sans MS";

            if (En) {

                if (speechOn) {
                    welldoneAud.play();
                }

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

            }

            if (Ger) {

                if (speechOn) {
                    welldoneAudger.play();
                }

                ctx.fillText("Hoppla!", w, 200);
                ctx.font = "90px Comic Sans MS";
                ctx.fillStyle = "blue";
                ctx.fillText("Du bist geplatzt", w, 330);
                ctx.fillText("der Ballon!", w, 430);
                ctx.font = "34px Comic Sans MS";
                ctx.fillStyle = "red";
                ctx.fillText("Klicken Sie mit der rechten Maustaste", w, 530);
                ctx.fillText("oder die Eingabetaste", w, 599);
                ctx.fillText("oder verwenden Sie Ihren Switch, um erneut zu spielen!", w, 670);
                
            }

            if (Rom) {

                if (speechOn) {
                    welldoneAudrom.play();
                }

                ctx.fillText("Hopa!", w, 200);
                ctx.font = "90px Comic Sans MS";
                ctx.fillStyle = "blue";
                ctx.fillText("Ai izbucnit", w, 330);
                ctx.fillText("balonul!", w, 430);
                ctx.font = "34px Comic Sans MS";
                ctx.fillStyle = "red";
                ctx.fillText("Faceți clic pe butonul din dreapta al mouse-ului", w, 530);
                ctx.fillText("sau tasta Enter", w, 599);
                ctx.fillText("sau folosește Switch-ul pentru a juca din nou!", w, 670);
                
            }

            if (Bul) {

                if (speechOn) {
                    welldoneAudbul.play();
                }

                ctx.fillText("Опа!", w, 200);
                ctx.font = "90px Comic Sans MS";
                ctx.fillStyle = "blue";
                ctx.fillText("Вие сте се спукали", w, 330);
                ctx.fillText("балона!", w, 430);
                ctx.font = "34px Comic Sans MS";
                ctx.fillStyle = "red";
                ctx.fillText("Кликнете с десния бутон на мишката", w, 530);
                ctx.fillText("или клавиша Enter", w, 599);
                ctx.fillText("или използвайте вашия Switch, за да играете отново!", w, 670);
                
            }

            if (Grk) {

                if (speechOn) {
                    welldoneAudgrk.play();
                }

                ctx.fillText("Ωχ!", w, 200);
                ctx.font = "90px Comic Sans MS";
                ctx.fillStyle = "blue";
                ctx.fillText("Έχετε σκάσει", w, 330);
                ctx.fillText("το μπαλόνι!", w, 430);
                ctx.font = "34px Comic Sans MS";
                ctx.fillStyle = "red";
                ctx.fillText("Κάντε κλικ στο δεξί κουμπί του ποντικιού", w, 530);
                ctx.fillText("ή το κλειδί Enter", w, 599);
                ctx.fillText("ή χρησιμοποιήστε το διακόπτη σας για να παίξετε ξανά!", w, 670);
                
            }

            if (Tuk) {

                if (speechOn) {
                    welldoneAudTuk.play();
                }

                ctx.fillText("Hata!", w, 200);
                ctx.font = "90px Comic Sans MS";
                ctx.fillStyle = "blue";
                ctx.fillText("patladın", w, 330);
                ctx.fillText("Balon!", w, 430);
                ctx.font = "34px Comic Sans MS";
                ctx.fillStyle = "red";
                ctx.fillText("Sağ fare düğmesini tıklayın", w, 530);
                ctx.fillText("veya Enter Tuşu", w, 599);
                ctx.fillText("veya tekrar oynamak için Switch'inizi kullanın!", w, 670);
                
            }

            pinIn = false;

            window.addEventListener('contextmenu', (e) => {
                e.preventDefault();

                welldoneAud.pause();
                welldoneAud.currentTime = 0;
                welldoneAudger.pause();
                welldoneAudger.currentTime = 0;

                welldoneAudrom.pause();
                welldoneAudrom.currentTime = 0;
                welldoneAudbul.pause();
                welldoneAudbul.currentTime = 0;

                welldoneAudgrk.pause();
                welldoneAudgrk.currentTime = 0;
                welldoneAudTuk.pause();
                welldoneAudTuk.currentTime = 0;      
  
                closeGame();
            });
            
            if (keys[13]) {
                
                welldoneAud.pause();
                welldoneAud.currentTime = 0;
                welldoneAudger.pause();
                welldoneAudger.currentTime = 0;

                welldoneAudrom.pause();
                welldoneAudrom.currentTime = 0;
                welldoneAudbul.pause();
                welldoneAudbul.currentTime = 0;

                welldoneAudgrk.pause();
                welldoneAudgrk.currentTime = 0;
                welldoneAudTuk.pause();
                welldoneAudTuk.currentTime = 0;

                pinIn = true;
                splashSc = true;
                instructionsSc = false;
                gameSc = false;
                inBall.bWidth = 70;
                inBall.bHeight = 100;
                st.x = 501;
                shine.x = 580;
                shine.y = 350;
            }

        } else {
            if (pinOff) {
              ctx.shadowColor = 'black';
              ctx.shadowBlur = 15;
              ctx.drawImage(pinImg, pinPop.x, pinPop.y, 128, 128);
              console.log("Balloon");
              ctx.shadowColor = "transparent";
            }
        }    

        if (pinIn) {
        drawBalloon();
        }

    }//ballnOn
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

        /*if (!volLock) {
            volFn2();
        }*/
	
        if (togMenu && !ballnOn) {
            showMenu();
        }

    if (instructionsSc && volLock) {
        instructions();
        }

    if (gameSc && ballnOn && volLock) {
        game();
    }

}



