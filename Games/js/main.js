"use strict";

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let canvas_parent = document.querySelector(".canvas-parent");

var parent_height = canvas_parent.clientHeight;
var parent_width = canvas_parent.clientWidth;

canvas.height = parent_height;
canvas.width = parent_width;

context.textAlign = "center";
context.textBaseline = "middle";
context.fillText("Click in this area", canvas.height / 2, canvas.width / 2);

let start = document.getElementById("start");
let time_text = document.getElementById("time-text");

const GameStatus = {
    STOP: 1,
    START: 2,
};

const backgroundColors = {
    green: "rgb(78, 197, 78)",
    red: "rgb(206, 63, 63)",
    yellow: "rgb(237, 255, 172)",
};

let currentStatus = GameStatus.STOP;

let currentTime, countDownTimer;

let userCanClick = false;

canvas.addEventListener("click", updateTimeOnClick);

function get_random_time(min, max) {
    let result = Math.floor(Math.random() * Math.floor(max)) + min;
    result = result * 1000;
    return result;
}

function end_game() {
    canvas.style.background = backgroundColors.yellow;
    start.innerHTML = "Start Game";
    currentStatus = GameStatus.STOP;
    userCanClick = false;
}

function startTimer(time) {
    countDownTimer = setTimeout(function () {
        let date1 = new Date();
        currentTime = date1.getTime();
        canvas.style.background = backgroundColors.green;

        userCanClick = true;
    }, time);
}

function start_game() {
    let change_time = get_random_time(1, 8);
    currentStatus = GameStatus.START;
    canvas.style.background = backgroundColors.red;

    startTimer(change_time);
}

start.addEventListener("click", function () {
    if (currentStatus === GameStatus.START) {
        end_game();
    } else {
        start_game();
        this.innerHTML = "Stop Game";
    }
});

function updateTimeOnClick() {
    if (currentStatus === GameStatus.STOP) return;

    if (userCanClick) {
        let date2 = new Date();
        let time_later = date2.getTime();
        let play_time = time_later - currentTime;
        time_text.innerHTML = play_time + "ms";
    } else {
        time_text.textContent = "Too soon.";
        clearTimeout(countDownTimer);
    }

    end_game();
}
