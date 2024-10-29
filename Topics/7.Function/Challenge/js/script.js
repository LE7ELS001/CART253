/**
 * Challenge
 * Junming He
 * 
 */

"use strict";

const gravity = 0.1;

// Our ball
let ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 0
    },

};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    drawBlock(paddle);
    drawBlock(ball);


    moveBall(ball);
    movePaddle(paddle);

    handleBounce(ball, paddle);


}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
    paddle.x = mouseX;

    paddle.x = constrain(paddle.x, paddle.width / 2, width - paddle.width / 2);
    // if (paddle.x <= paddle.width / 2) {
    //     paddle.x = paddle.width / 2;
    // }
    // if (paddle.x >= width - paddle.width / 2) {
    //     paddle.x = width - paddle.width / 2;
    // }
}

/**
 * Moves the ball
 */
function moveBall(ball) {
    ball.velocity.y += gravity;
    ball.y += ball.velocity.y;

}

function handleBounce(ball, paddle) {
    let overlap = centredRectanglesOverlap(ball, paddle);
    if (overlap) {
        ball.velocity.y *= -1;
    }
}


function drawBlock(element) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(element.x, element.y, element.width, element.height);
    pop();
}

function centredRectanglesOverlap(a, b) {
    return (a.x + a.width / 2 > b.x - b.width / 2 &&
        a.x - a.width / 2 < b.x + b.width / 2 &&
        a.y + a.height / 2 > b.y - b.height / 2 &&
        a.y - a.height / 2 < b.y + b.height / 2);
}