/**
 * condition challenge
 * Junming He
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
const puck = {
    x: 350,
    y: 350,
    size: 100,
    fill: "#ff0000"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

let target = {
    x: 200,
    y: 200,
    size: 80,
    fills: undefined,
    overlap: 200,
    notOverlap: 130,
    IsOverlap: undefined

}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
    target.fills = target.notOverlap;
    target.IsOverlap = false;
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();
    movePunk();


    const d = dist(target.x, target.y, puck.x, puck.y);
    target.IsOverlap = (d < target.size / 2 + puck.size / 2);
    if (target.IsOverlap) {
        target.fills = target.overlap;
    }
    else {
        target.fills = target.notOverlap;
    }

    drawTarget();

    // Draw the user and puck
    drawUser();
    drawPuck();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}

function movePunk() {
    const d = dist(user.x, user.y, puck.x, puck.y);
    const overlab = (d < user.size / 2 + puck.size / 2);
    if (overlab) {
        const dx = user.x - puck.x;
        const dy = user.y - puck.y;
        if (abs(dx) > abs(dy)) {
            if (dx < 0) {
                puck.x += 1;
            }
            else if (dx > 0) {
                puck.x += -1;
            }
        }
        else if (abs(dx) < abs(dy)) {
            if (dy < 0) {
                puck.y += 1;
            }
            else if (dy > 0) {
                puck.y += -1;
            }
        }
    }
}

function drawTarget() {


    push();
    noStroke();
    fill(target.fills);
    ellipse(target.x, target.y, target.size);
    pop();
}