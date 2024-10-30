/**
 * Loop-challenge
 * Junming He
 * 
 *
 */

"use strict";

let startX = 0;
let originX = 0;
let gap = 50;

let startColor = 0;
let originColor = 0;
let colorGap = 25;

let startLineWeight = 1;
let OriginLineWeight = 1;
let lineWeightGap = 1;

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {


    background("pink");



    while (originX <= width) {

        push();
        stroke(originColor);
        strokeWeight(OriginLineWeight);
        line(originX, 0, originX, height);
        pop();

        console.log(originX, originColor, OriginLineWeight);


        originX += gap;
        originColor += colorGap;
        OriginLineWeight += lineWeightGap;

    }

    originX = startX;
    originColor = startColor;
    OriginLineWeight = startLineWeight;


    // stroke(0);
    // strokeWeight(1);
    // line(0, 0, 0, height);

    // stroke(25);
    // strokeWeight(2);
    // line(50, 0, 50, height);

    // stroke(50);
    // strokeWeight(3);
    // line(100, 0, 100, height);

    // stroke(75);
    // strokeWeight(4);
    // line(150, 0, 150, height);

    // stroke(100);
    // strokeWeight(5);
    // line(200, 0, 200, height);

    // stroke(125);
    // strokeWeight(6);
    // line(250, 0, 250, height);

    // stroke(150);
    // strokeWeight(7);
    // line(300, 0, 300, height);

    // stroke(175);
    // strokeWeight(8);
    // line(350, 0, 350, height);

    // stroke(200);
    // strokeWeight(9);
    // line(400, 0, 400, height);

    // stroke(225);
    // strokeWeight(10);
    // line(450, 0, 450, height);

    // stroke(250);
    // strokeWeight(11);
    // line(500, 0, 500, height);
}