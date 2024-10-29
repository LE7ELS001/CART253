/**
 * Array study
 * Junming He
 * 
 * 
 */

"use strict";

let speech = ["Veni", "Vidi", "Vici", "Sensi malum"];
let speechIndex = 0;

function setup() {
    createCanvas(600, 100);
}


function draw() {
    background(0);

    let currentLine = speech[speechIndex];

    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();

}

function mousePressed() {
    speechIndex = speechIndex + 1;

    if (speechIndex >= speech.length) {
        speechIndex = 0;
    }
}