/**
 * Trisolaris
 * Pippin
 * 
 * Draws the three suns of Trisolaris. Poorly.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 400);
}

/**
 * Draw the three suns
 */
function draw() {
    // Sky blue
    background("#87ceeb");

    // drawSun1();
    // drawSun2();
    // drawSun3();
    drawSun(500, 100, 80);
    drawSun(350, 100, 200);
    drawSun(120, 100, 160);

}

/**
 * Draws the first sun
 */
function drawSun1() {
    push();
    noStroke();
    fill("#f99736");
    ellipse(500, 100, 80);
    pop();
}

/**
 * Draws the second sun
 */
function drawSun2() {
    push();
    noStroke();
    fill("#f99736");
    ellipse(350, 180, 200);
    pop();
}

/**
 * Draws the third sun
 */
function drawSun3() {
    push();
    noStroke();
    fill("#f99736");
    ellipse(120, 100, 160);
    pop();
}

function drawSun(x, y, size) {
    push();
    noStroke();
    fill("#f99736");
    ellipse(x, y, size);
    pop();
}