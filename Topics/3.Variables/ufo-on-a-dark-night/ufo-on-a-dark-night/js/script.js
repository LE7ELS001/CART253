/**
 * learn changing variables
 * Junming He
 * 
 */

"use strict";

// Our UFO
let ufo = {
    // Position
    x: 200,
    y: 375,
    // Dimensions
    width: 150,
    height: 50,
    // Fill colour (greyscale)
    fill: 255
};

// Shade to fill the sky (background)
let skyShade = 0;

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);
}

/**
 * Displays a UFO
*/
function draw() {
    //Dawn
    skyShade += 0.5;


    ufo.y -= 2;
    ufo.x = ufo.x + cos(frameCount * 0.1) * 3 + 0.6

    ufo.fill *= 0.997;
    ufo.width /= 1.005;
    ufo.height /= 1.005;
    // Display the sky
    background(skyShade);

    // Draw the UFO based on its properties
    push();
    fill(ufo.fill);
    noStroke();
    ellipse(ufo.x, ufo.y, ufo.width, ufo.height);
    pop();
}