/**
 * Challenge
 * Junming He
 * 
 * let try it
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);

    window.addEventListener("mousedown", endTheGame);
    window.addEventListener("mouseup", endTheGame);
    window.addEventListener("keydown", endTheGame);
    window.addEventListener("keyup", endTheGame);
    window.addEventListener("mousemove", endTheGame);
    window.addEventListener("online", endTheGame);
    window.addEventListener("offline", endTheGame);
    window.addEventListener("visibilitychange", endTheGame);
}

/**
 * Update the score and display the UI
 */
function draw() {
    background("#87ceeb");

    // Only increase the score if the game is not over
    if (!gameOver) {
        // Score increases relatively slowly
        score += 0.05;
    }
    displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
    if (gameOver) {
        push();
        textSize(48);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You lose!", width / 2, height / 3);
        pop();
    }
    displayScore();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}

function endTheGame() {
    gameOver = true;
}