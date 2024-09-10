/**
 * Let's create Variables
 * Junming He
 * 
 * 
 */

"use strict";

let holeSize = 180;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(480, 480);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255, 255, 0);

    push();
    noStroke();
    fill(0);
    ellipse(width / 2, height / 2, holeSize);
    pop();

}