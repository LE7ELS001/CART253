/**
 * Buzzy the return value
 * Pippin Barr
 * 
 * Two flies that buzz around on the canvas
 */

"use strict";

// Our flies that will buzz around
let buzzyTheFly = undefined;

let jazzyTheFly = undefined;

let jacuzziTheFly = undefined;

/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);

    buzzyTheFly = createFly(2);
    jazzyTheFly = createFly(10);
    jacuzziTheFly = createFly(8);

}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");


    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);
    drawFly(jacuzziTheFly);

    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);
    moveFly(jacuzziTheFly);
}

/**
 * Move the fly passed in by updating its position
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draw the fly passed in using its properties
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

function createFly(buzziness) {
    const fly = {
        x: random(0, width),
        y: random(0, height),
        size: 30,
        buzziness: buzziness
    };
    return fly;
}