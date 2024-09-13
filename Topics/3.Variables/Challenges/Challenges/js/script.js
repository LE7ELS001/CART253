/**
 * Challenges for week3
 * Junming He
 * 
 
 */

"use strict";

let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
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

    console.log(sky.red);
    console.log(sky.green);
    console.log(sky.blue);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
}