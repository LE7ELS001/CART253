/**
 * star-field
 * Junming He
 * 
 * 
 */

"use strict";

const starNumber = 100;
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

    background(0);
    for (let i = 0; i < starNumber; i++) {
        drawStar();
    }
}


function drawStar() {
    push();
    let x = random(0, width);
    let y = random(0, height);
    let size = random(2, 5);
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(x, y, size);
    pop();

}