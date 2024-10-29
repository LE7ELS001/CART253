/**
 * Gradient
 * Junming He
 * 
 */

"use strict";


function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(0);

    for (let i = 0; i <= width; i++) {
        push();
        let strokeColor = map(i, 0, width, 0, 255);
        stroke(strokeColor);

        line(i, 0, i, height);
        pop();
    }
}