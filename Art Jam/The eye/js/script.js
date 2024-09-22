/**
 * The eye
 * Junming He
 * 
 
 */

"use strict";

let theOuterFrameUp = {
    x1: 100,
    y1: 290,
    x2: 230,
    y2: 180,
    x3: 490,
    y3: 180,
    x4: 620,
    y4: 350
}

let theOuterFrameDown = {
    x1: 100,
    y1: 290,
    x2: 230,
    y2: 460,
    x3: 490,
    y3: 460,
    x4: 620,
    y4: 350
}

let theMiddleCircle = {
    //x1: 350,
    x1: 220,
    //y1: 320,
    y1: 312,
    size: 130
}

let theCenterCircle = {
    size: 60
}

let RadiusDetect = theMiddleCircle.size / 2;

let collisionDetect = undefined;

let upRecY = 1;
let downRecY = 399;
let speedUpY = 5;
let speedDownY = -5;


//the second canvas
let extraCanvas;

function setup() {
    createCanvas(720, 640);
    extraCanvas = createGraphics(720, 640);
    extraCanvas.clear();
    collisionDetect = false;
}




function draw() {

    background(125);


    collisionDetect = false;

    //map
    let mouseX1 = map(mouseX, 0, 720, 100, 620);
    let mouseY1 = map(mouseY, 0, 640, 180, 460);


    //Eye's Frame
    push();
    //bezier(100, 290, 230, 180, 490, 180, 620, 350);
    //bezier(100, 290, 230, 460, 490, 460, 620, 350);
    stroke(0)
    strokeWeight(3);
    //noFill();
    bezier(theOuterFrameUp.x1, theOuterFrameUp.y1, theOuterFrameUp.x2, theOuterFrameUp.y2, theOuterFrameUp.x3, theOuterFrameUp.y3, theOuterFrameUp.x4, theOuterFrameUp.y4);
    bezier(theOuterFrameDown.x1, theOuterFrameDown.y1, theOuterFrameDown.x2, theOuterFrameDown.y2, theOuterFrameDown.x3, theOuterFrameDown.y3, theOuterFrameDown.x4, theOuterFrameDown.y4);
    pop();

    // if (mouseX1 <= 255) {
    //     mouseX1 = constrain(mouseX1, 220, 221);
    //     mouseY1 = constrain(mouseY1, 298, 312);
    // }

    for (let i = 0; i < 1; i += 1 / 100) {
        let upX = bezierPoint(theOuterFrameUp.x1, theOuterFrameUp.x2, theOuterFrameUp.x3, theOuterFrameUp.x4, i);
        let upY = bezierPoint(theOuterFrameUp.y1, theOuterFrameUp.y2, theOuterFrameUp.y3, theOuterFrameUp.y4, i);
        let downX = bezierPoint(theOuterFrameDown.x1, theOuterFrameDown.x2, theOuterFrameDown.x3, theOuterFrameDown.x4, i);
        let downY = bezierPoint(theOuterFrameDown.y1, theOuterFrameDown.y2, theOuterFrameDown.y3, theOuterFrameDown.y4, i);

        let upDistance = dist(upX, upY, mouseX1, mouseY1);
        let downDistance = dist(downX, downY, mouseX1, mouseY1);

        if (upDistance <= RadiusDetect || downDistance <= RadiusDetect) {
            collisionDetect = true;
            break;
        }

    }


    if (!collisionDetect) {
        extraCanvas.clear();
        image(extraCanvas, 0, 0);


        push();
        extraCanvas.noStroke();
        extraCanvas.fill(100);
        //extraCanvas.circle(theMiddleCircle.x1, theMiddleCircle.y1, theMiddleCircle.size);
        extraCanvas.circle(mouseX1, mouseY1, theMiddleCircle.size);
        pop();

        push();
        extraCanvas.noStroke();
        extraCanvas.fill(0);
        //extraCanvas.circle(theMiddleCircle.x1, theMiddleCircle.y1, theCenterCircle.size);
        extraCanvas.circle(mouseX1, mouseY1, theCenterCircle.size);
        pop();
    }


    image(extraCanvas, 0, 0);



    console.log("x:", mouseX1);
    console.log("y:", mouseY1);





}

function mousePressed() {
    push();
    rect(0, 0, width, upRecY * 10);
    pop();


    rectMode(CORNERS);
    rect(0, height, width, downRecY / 2);
}   