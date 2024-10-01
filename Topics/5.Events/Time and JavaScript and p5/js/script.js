/**
 * Time and JavaScript and p5
 * Junming He
 */

const ball = {
    x: 0,
    y: 200,
    size: 50
}

"use strict";


function setup() {

    createCanvas(400, 400);
}



function draw() {
    background(0);

    ball.x += 1;

    push();
    noStroke();
    ellipse(ball.x, ball.y, ball.size);
    pop();

}
