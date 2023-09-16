var score = 0;
var timer = 60;
var rndNum;

function makeBubble () {
    var clutter = "";

    for (var i = 1; i <= 144; i++) {
        var rndm = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rndm}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runHit() {
    rndNum = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rndNum;
}

function runTimer() {
    var timeint = setInterval(function () {
        if (timer < 12) {
            document.querySelector("#timerval").style.color = "red";
        }
        if (timer > 0) {
            timer--; 
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over!</h1>";
            alert("Your Score is : " + score);
        }
    },1000);
}

function runScore()  {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(event) {
        var clickedNum = (Number(event.target.textContent));
        if (clickedNum == rndNum) {
            runScore();
            runHit();
            makeBubble();
        }
});

runTimer();
makeBubble();
runHit();