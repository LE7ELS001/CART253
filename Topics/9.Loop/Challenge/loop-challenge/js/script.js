/**
 * Loop-challenge
 * Junming He
 * 
 *
 */

"use strict";

let backgroundColor = 0;
let startBackgroundColor = 0;
let colorRange = 100;

let startX = 0;
let originX = 0;
let startY = 0;
let originY = 0;
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


    colorMode(HSB);
    for (let i = 0; i < height; i++) {
        stroke(i, i, colorRange);
        line(0, i, width, i)
    }







    while (originX <= width) {

        //vertical
        push();
        stroke(originColor);
        strokeWeight(OriginLineWeight);
        line(originX, 0, originX, height);
        pop();

        //horizontal
        push();
        stroke(originColor);
        strokeWeight(OriginLineWeight);
        line(0, originY, width, originY);
        pop();


        //debug
        //console.log(originX, originColor, OriginLineWeight);

        originX += gap;
        originY += gap;
        originColor += colorGap;
        OriginLineWeight += lineWeightGap;


    }

    resetValue();









}

function resetValue() {
    originX = startX;
    originY = startY
    originColor = startColor;
    OriginLineWeight = startLineWeight;

}