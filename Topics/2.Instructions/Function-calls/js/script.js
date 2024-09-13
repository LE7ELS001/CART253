/**
 * Explain the program
 * Function-Calls
 * Junming He
 * 
 * Work on function-calls example.
 */

"use strict";


let originMouseX;
let originMouseY;
let newMouseX;
let newMouseY;
let extraCanvas;
/**
 * Creates the canvas for our work
 */
function setup() {
    // once at the beginning
    createCanvas(640, 640);
    extraCanvas = createGraphics(640, 640);
    extraCanvas.clear();

    //set mouse move or not trigger
    originMouseX = mouseX;
    originMouseY = mouseY;

}


/**
 * Draws the writer's desktop and a blank piece of paper
 */
function draw() {
    // The pink desktop 
    background(150, 150, 150);
    // // The blank piece of paper


    push();
    fill(255);
    stroke(0, 0, 0);
    strokeWeight(3);
    ellipse(320, 320, 480);
    pop();

    push();
    fill("black");
    noStroke();
    ellipse(320, 320, 480, 350);
    pop();

    if (newMouseX != originMouseX || newMouseY != originMouseY) {
        mouseMoved();
        newMouseX = originMouseX;
        newMouseY = originMouseY;
    }
    else {
        mouseMoved();
    }


}

function mouseMoved() {
    push();
    extraCanvas.fill(255);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 200);
    pop();
}