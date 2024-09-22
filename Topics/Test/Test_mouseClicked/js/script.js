/**
 * MouseClicked
 * Junming
 * 
 * 
 */

"use strict";


function setup() {
    createCanvas(400, 400);

}



function draw() {
    background(125);
   
}

function mousePressed() {
    push();
    fill(125, 200, 100);
    strokeWeight(3);
    ellipse(200, 200, 100);
    pop();
    console.log("you pressed");
}