/**
 * Introducing events
 * Junming He
 * 
 */

"use strict";


function setup() {
    createCanvas(400, 400);

    background(0);

}



function draw() {

}

function mousePressed() {
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 50);
    pop();
}