/**
 * Refactoring
 * Pippin Barr
 * 
 * A simulation of bouncing three balls off a paddle in zero gravity
 * with perfect restitution (bounce)...
 * 
 * This is a project that is intentionally repetitive so that we can practice
 * noticing repetition and using functions (with parameters and return
 * values) to reduce it. That is, modularity and reuse.
 */

"use strict";

// Ball 1
let ball1 = undefined;

// Ball 2 is just like ball1 in a different place with different velocity
let ball2 = undefined;

// Ball 2 is just like ball1 and ball2 in a different place 
// with different velocity
let ball3 = undefined;
// The paddle the user controls
const paddle = {
    // Position
    x: undefined, // Will be mouseX
    y: undefined, // Will be set in setup,
    // Dimensions
    width: 100,
    height: 20
};

/**
 * Create the canvas and position the paddle
*/
function setup() {
    createCanvas(400, 400);

    //create ball 
    ball1 = createBall();
    ball2 = createBall();
    ball3 = createBall();

    // Position the paddle at the bottom
    paddle.y = height - paddle.height;
}


/**
 * Background, update balls and paddle, check bounces, display it all
*/
function draw() {
    // Black background!
    background(0);

    // Display balls
    drawBall(ball1);
    drawBall(ball2);
    drawBall(ball3);




    // Move balls
    moveBall(ball1);
    moveBall(ball2);
    moveBall(ball3);

    // Display paddle
    drawPaddle();

    // Move paddle
    movePaddle();

    // Check for bounces
    checkBallBounce(ball1);
    checkBallBounce(ball2);
    checkBallBounce(ball3);


}

/**
 * Move ball 1 by its velocity
 */
function moveBall1() {
    ball1.x += ball1.velocity.x;
    ball1.y += ball1.velocity.y;
}

/**
 * Move ball 2 by its velocity
 */
function moveBall2() {
    ball2.x += ball2.velocity.x;
    ball2.y += ball2.velocity.y;
}

/**
 * Move ball 3 by its velocity
 */
function moveBall3() {
    ball3.x += ball3.velocity.x;
    ball3.y += ball3.velocity.y;
}

/**
 * Move the paddle to the mouse location
 */
function movePaddle() {
    paddle.x = mouseX;
}

/**
 * Checks if ball1 is bouncing off the paddle
 */
function checkBall1Bounce() {
    // Check if ball1 overlaps the paddle
    const overlap = (ball1.x + ball1.size > paddle.x &&
        ball1.x < paddle.x + paddle.width &&
        ball1.y + ball1.size > paddle.y &&
        ball1.y < paddle.y + paddle.height);
    // If there is an overlap, bounce the ball back up
    if (overlap) {
        ball1.velocity.y *= -1;
    }
}

/**
 * Checks if ball2 is bouncing off the paddle
 */
function checkBall2Bounce() {
    // Check if ball2 overlaps the paddle
    const overlap = (ball2.x + ball2.size > paddle.x &&
        ball2.x < paddle.x + paddle.width &&
        ball2.y + ball2.size > paddle.y &&
        ball2.y < paddle.y + paddle.height);
    // If there is an overlap, bounce the ball back up
    if (overlap) {
        ball2.velocity.y *= -1;
    }
}

/**
 * Checks if ball3 is bouncing off the paddle
 */
function checkBall3Bounce() {
    // Check if ball3 overlaps the paddle
    const overlap = (ball3.x + ball3.size > paddle.x &&
        ball3.x < paddle.x + paddle.width &&
        ball3.y + ball3.size > paddle.y &&
        ball3.y < paddle.y + paddle.height);
    // If there is an overlap, bounce the ball back up
    if (overlap) {
        ball3.velocity.y *= -1;
    }
}

/**
 * Draw ball 1 as a white square
 */
function drawBall1() {
    push();
    noStroke();
    fill(255);
    rect(ball1.x, ball1.y, ball1.size);
    pop();
}

/**
 * Draw ball 2 as a white square
 */
function drawBall2() {
    push();
    noStroke();
    fill(255);
    rect(ball2.x, ball2.y, ball2.size);
    pop();
}

/**
 * Draw ball 3 as a white square
 */
function drawBall3() {
    push();
    noStroke();
    fill(255);
    rect(ball3.x, ball3.y, ball3.size);
    pop();
}

/**
 * Draw the paddle as a white rectangle
 */
function drawPaddle() {
    push();
    noStroke();
    fill(255);
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

function createBall() {
    const ball = {
        x: random(50, width - 50),
        y: -50,
        size: 20,
        velocity: {
            x: 0,
            y: random(2, 12)
        }
    }
    return ball;
}

function drawBall(ball) {
    push();
    noStroke();
    fill(255);
    rect(ball.x, ball.y, ball.size);
    pop();
}

function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}

function checkBallBounce(ball) {

    const overlap = (ball.x + ball.size > paddle.x &&
        ball.x < paddle.x + paddle.width &&
        ball.y + ball.size > paddle.y &&
        ball.y < paddle.y + paddle.height);

    if (overlap) {
        ball.velocity.y *= -1;
    }
}