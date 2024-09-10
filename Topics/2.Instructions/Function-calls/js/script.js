/**
 * Explain the program
 * Function-Calls
 * Junming He
 * 
 * Work on function-calls example.
 */

"use strict";

/**
 * Creates the canvas for our work
 */
function setup() {
    // once at the beginning
    createCanvas(640, 640);
}


/**
 * Draws the writer's desktop and a blank piece of paper
 */
function draw() {
    // The pink desktop 
    background(150, 150, 150);
    // The blank piece of paper
    fill(255);
    stroke(0, 0, 0);
    strokeWeight(3);
    ellipse(320, 320, 480);
    pop();

    push();
    fill("black");
    noStroke();
    ellipse(320, 320, 480, 350);
    pop();

    push();
    fill(255);
    noStroke();
    ellipse(320, 320, 200);
    pop();
}