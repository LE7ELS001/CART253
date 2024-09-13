/**
 * Challenges for week3
 * Junming He
 * 
 
 */

"use strict";

let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    },
    greenReduce: -0.5,
    BlueReduce: -0.5
};
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(160, 180, 200);
    mrFurious.fill.g += mrFurious.greenReduce;
    mrFurious.fill.b += mrFurious.BlueReduce;
    mrFurious.fill.g = constrain(mrFurious.fill.g, 20, 255);
    mrFurious.fill.b = constrain(mrFurious.fill.b, 20, 255);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
}