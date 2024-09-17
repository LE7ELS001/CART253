/**
 * Challenges for week3
 * Junming He
 * 
 
 */

"use strict";

let mrFurious = {
    // Position and size
    x: 200,
    y: 300,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    },
    greenReduce: -0.5,
    BlueReduce: -0.5
};
//sky
let sky = {
    red: 160,
    green: 180,
    blue: 200,
    redReduce: -0.5,
    greenReduce: -0.5,
    BlueReduce: -0.5
}

//bird
let bird = {
    red: 0,
    green: 255,
    blue: 100,
    x: 20,
    y: 150,
    size: 20,

    velocity: {
        x: 0,
        y: 0
    },
    acceleration: {
        x: 0.25,
        y: 0.35
    },
    maxSpeed: 2,
    minSpeed: -2,
    flyingRange: {
        maxHorizontal: 370,
        minHorizontal: 20,
        maxVertical: 180,
        minVertical: 100
    },

}

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
    background(sky.red, sky.green, sky.blue);

    //MrFurious turns red
    mrFurious.fill.g += mrFurious.greenReduce;
    mrFurious.fill.b += mrFurious.BlueReduce;
    mrFurious.fill.g = constrain(mrFurious.fill.g, 20, 255);
    mrFurious.fill.b = constrain(mrFurious.fill.b, 20, 255);

    //Sky(background) turns dark
    sky.red += sky.redReduce;
    sky.green += sky.greenReduce;
    sky.blue += sky.BlueReduce;
    sky.red = constrain(sky.red, 0, 255);
    sky.green = constrain(sky.green, 0, 255);
    sky.blue = constrain(sky.blue, 0, 255);

    // console.log(sky.red);
    // console.log(sky.green);
    // console.log(sky.blue);

    //bird 
    push()
    noStroke();
    fill(bird.red, bird.green, bird.blue);
    ellipse(bird.x, bird.y, bird.size);
    pop();

    //bird flying 
    bird.velocity.x += bird.acceleration.x;
    bird.velocity.y += bird.acceleration.y;
    console.log(bird.velocity.y);

    bird.velocity.x = constrain(bird.velocity.x, bird.minSpeed, bird.maxSpeed);
    bird.velocity.y = constrain(bird.velocity.y, bird.minSpeed, bird.maxSpeed);

    bird.x += bird.velocity.x;
    bird.y += bird.velocity.y;

    bird.x = constrain(bird.x, bird.flyingRange.minHorizontal, bird.flyingRange.maxHorizontal);
    bird.y = constrain(bird.y, bird.flyingRange.minVertical, bird.flyingRange.maxVertical);


    if (bird.x == bird.flyingRange.maxHorizontal || bird.x == bird.flyingRange.minHorizontal) {
        bird.velocity.x /= -2;
        bird.acceleration.x *= -1;

    }


    if (bird.y == bird.flyingRange.maxVertical || bird.y == bird.flyingRange.minVertical) {
        bird.velocity.y /= -1;
        bird.acceleration.y *= -1;

    }





    //console.log(bird.x);
    console.log(bird.y);
    //console.log(bird.acceleration.x);
    console.log(bird.acceleration.y);
    //console.log(bird.velocity.x);
    console.log(bird.velocity.y);


    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
}