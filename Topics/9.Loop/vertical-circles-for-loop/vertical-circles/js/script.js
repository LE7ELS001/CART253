/**
 * Vertical circles
 * Pippin Barr
 * 
 * Draws a series of circles from the top to the bottom of the canvas.
 * Arguably not in the most efficient way.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw circles from the top to the bottom of the canvas
 */
function draw() {
    background(0);

    let x = width / 2;
    let startY = 0;
    let diameter = 50;
    let size = 50;


    for (let i = 0; i < 9; i++) {
        let y = startY + i * diameter;
        ellipse(x, y, size);
    }

}