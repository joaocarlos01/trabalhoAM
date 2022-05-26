var tempo = document.getElementById("tempo");

tempo.style.opacity = "0.5";

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let start = document.getElementById("tempo");
let time_text = document.getElementById("time-text");


const GameStatus = {
    STOP: 1,
    START: 2,
};

const backgroundColors = {
    green: "rgb(78, 197, 78)",
    red: "rgb(206, 63, 63)",
    blue: "rgb(115, 147, 179)",
};
canvas.style.background = backgroundColors.blue;

let currentStatus = GameStatus.STOP;

let currentTime, countDownTimer;

function get_random_time(min, max) {
    let result = Math.floor(Math.random() * Math.floor(max)) + min;
    result = result * 1000;
    return result;
}

function end_game() {

    let date2 = new Date();
    let time_later = date2.getTime();
    let play_time = time_later - currentTime;
    tempo.innerHTML = play_time + "ms";
    canvas.style.background = backgroundColors.blue;

    currentStatus = GameStatus.STOP;

}

function startTimer(time) {

    countDownTimer = setTimeout(function() {
        tempo.style.pointerEvents = "auto";

        let date1 = new Date();
        currentTime = date1.getTime();
        canvas.style.background = backgroundColors.green;
        tempo.innerHTML = "CLICK!!"
    }, time);
}

function start_game() {
    tempo.style.pointerEvents = "none";

    let change_time = get_random_time(1, 3);
    currentStatus = GameStatus.START;
    canvas.style.background = backgroundColors.red;
    tempo.innerHTML = "...";
    startTimer(change_time);
}

tempo.addEventListener("click", function() {

    if (currentStatus === GameStatus.START) {
        end_game();
    } else {
        start_game();
    }
});