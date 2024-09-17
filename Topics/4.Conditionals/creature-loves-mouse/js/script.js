/**
 * Creature Loves Mouse Learning
 * Junming
 * 
 * 
 */

"use strict";

// Our creature
const creature = {
    // Position
    x: 200,
    y: 200,
    // Size
    size: 200,
    // Fill
    fill: "#000000", // Starts out bored
    // Possible fills for the creature that show its mood
    // We'll need these when we start changing its colour
    // and it's nice to keep them along with all the other info
    // about the creature
    fills: {
        bored: "#000000", // Black
        happy: "#33cc33", // Green
        angry: "#cc3333" // Red
    },
    Emotion: "#000000"
};

let tmpNum;

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Fills the background, displays the creature 
 */
function draw() {
    background(255, 200, 127);

    checkInput();
    drawCreature();
}

/**
 * Responds to user input
 */
function checkInput() {
    // We'll need to figure this out

    if (mouseIsPressed) {
        tmpNum = int(random(1, 4));
        console.log(tmpNum);
    }

    switch (tmpNum) {
        case 1:
            creature.Emotion = creature.fills.bored;
            break;

        case 2:
            creature.Emotion = creature.fills.happy;
            break;

        case 3:
            creature.Emotion = creature.fills.angry;
            break;

    }



}

/**
 * Draws the creature
 */
function drawCreature() {
    push();
    noStroke();
    // Use the creature's fill
    fill(creature.Emotion);
    // Display the creature at its position and size
    ellipse(creature.x, creature.y, creature.size);
    pop();
}