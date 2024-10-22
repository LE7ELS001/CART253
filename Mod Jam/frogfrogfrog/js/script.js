/**
 * Frogfrogfrog modification
 * Junming He
 * 
 *let add some functions 
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

//Frog 
const frog = {
    // location 
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // tongue
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        state: "idle"
    }
};


const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};

let gameStatement = {
    currentStatement: undefined,
    levelOne: "levelOne",
    levelTwo: "levelTwo",
    inGame: "inGame",
    gameOver: "gameOver",
    levelChoose: undefined

}

let lotus = {
    levelOne: [],
    levelTwo: [],
    divideNumber: 0,
}

let riverEdge = {
    levelOne: [],
    levelTwo: [],
    divideNumber: 0
}


function setup() {
    createCanvas(800, 600);


    resetFly();

    //default statement levelOne(it's also the menu)
    gameStatement.currentStatement = gameStatement.levelTwo;

    /**
     * calculate the position and storage 
     *  */
    //level one
    for (let i = 0; i < 5; i++) {

        lotus.divideNumber = width / 4;
        let firstPlace = lotus.divideNumber / 2
        riverEdge.divideNumber = lotus.divideNumber;
        //lotus
        if (i < 4) {
            lotus.levelOne[i] = firstPlace + i * lotus.divideNumber;
            //debug
            //console.log(lotus.levelOne[i]);
        }

        if (i < 5) {

            //river
            riverEdge.levelOne[i] = 0 + i * riverEdge.divideNumber;
            //debug
            console.log(riverEdge.levelOne[i]);
        }
    }


    //level two
    for (let i = 0; i < 6; i++) {
        lotus.divideNumber = width / 5;
        let firstPlace = lotus.divideNumber / 2
        riverEdge.divideNumber = lotus.divideNumber;

        if (i < 5) {

            lotus.levelTwo[i] = firstPlace + i * lotus.divideNumber;

            //debug
            //console.log(lotus.levelTwo[i]);
        }

        if (i < 6) {
            riverEdge.levelTwo[i] = 0 + i * riverEdge.divideNumber;

            //debug
            console.log(riverEdge.levelTwo[i]);
        }


    }


}



function draw() {
    background("#87ceeb");

    if (gameStatement.currentStatement === gameStatement.levelOne) {
        gameStatement.levelChoose = 1;

    }
    else if (gameStatement.currentStatement === gameStatement.levelTwo) {
        gameStatement.levelChoose = 2;
    }

    drawMap();
    // moveFly();
    // drawFly();
    // moveFrog();
    // moveTongue();
    // drawFrog();
    // checkTongueFlyOverlap();
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}


function drawMap() {
    if (gameStatement.currentStatement === gameStatement.levelOne) {
        //draw lotus and lines
        lotus.divideNumber = 4;
        riverEdge.divideNumber = lotus.divideNumber;
        for (let i = 0; i < 5; i++) {
            if (i < 4) {

                push();
                fill(255);
                circle(lotus.levelOne[i], 500, 50);
                pop();
            }

            if (i < 5) {

                push();
                fill(0);
                strokeWeight(2);
                line(riverEdge.levelOne[i], 0, riverEdge.levelOne[i], height);
            }
        }
    }
    else if (gameStatement.currentStatement === gameStatement.levelTwo) {
        //draw lotus and lines
        lotus.divideNumber = 5;
        riverEdge.divideNumber = lotus.divideNumber;
        for (let i = 0; i < 6; i++) {
            if (i < 5) {

                push();
                fill(255);
                circle(lotus.levelTwo[i], 500, 50);
                pop();
            }

            if (i < 6) {

                push();
                fill(0);
                strokeWeight(2);
                line(riverEdge.levelTwo[i], 0, riverEdge.levelTwo[i], height);
            }
        }
    }
}