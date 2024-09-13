/**
 * Movement example
 * Junming He
 * 
 * 
 */

"use strict";
let bird = {
    x: 120,
    y: 400,
    size: 50,
    velocity: {
        x: 0,
        y: 0
    },
    minVeloctiy: {
        x: -3,
        y: -2
    },
    maxVeloctiy: {
        x: 3,
        y: 2
    },
    acceleration: {
        x: 0.025,
        y: -0.2
    },
    IsReachEdge: false

}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 480);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    bird.velocity.x += bird.acceleration.x;
    bird.velocity.y += + bird.acceleration.y;

    bird.velocity.x = constrain(bird.velocity.x, bird.minVeloctiy.x, bird.maxVeloctiy.x);
    bird.velocity.y = constrain(bird.velocity.y, bird.minVeloctiy.y, bird.maxVeloctiy.y);

    bird.x += bird.velocity.x;
    bird.y += + bird.velocity.y;

    if (bird.IsReachEdge == false) {
        if (bird.x > width) {
            bird.x = width - 0.1;
            bird.IsReachEdge = true;
        }
        else if (bird.x < 0 && bird.IsReachEdge == false) {
            bird.x = 0;
            bird.IsReachEdge = true;
        }
        else if (bird.y < 0 && bird.IsReachEdge == false) {
            bird.y = 0;
            bird.IsReachEdge = true;
        }
        else if (bird.y > height && bird.IsReachEdge == false) {
            bird.y = height - 0.1;
            bird.IsReachEdge = true;
        }
    }



    if (bird.IsReachEdge == true) {
        bird.velocity.x = 0;
        bird.velocity.y = 0;
        bird.acceleration.x *= -1;
        bird.acceleration.y *= -1;
        bird.IsReachEdge = false;
    }



    print(bird.x);
    print(bird.y);
    print(bird.acceleration.x);
    print(bird.acceleration.y);
    print(bird.velocity.x);
    print(bird.velocity.y);




    push();
    fill(255, 0, 0);
    noStroke();
    ellipse(bird.x, bird.y, bird.size);
    pop();
}