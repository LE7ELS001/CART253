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
    size: 130,
    R: 213,
    G: 110,
    B: 19
}

let theCenterCircle = {
    size: 60,
    R: 0,
    G: 0,
    B: 0
}

//eyelashes
let eyeLashes = {
    size: 3,
    R: 0,
    G: 0,
    B: 0
}

//background color
let backgroundColor = {
    R: 100,
    G: 100,
    B: 100
}

let RadiusDetect = theMiddleCircle.size / 2;

let collisionDetect = undefined;

//rectangle
let upRecY = 0;
let downRecY = 640;
let speedUpY = 10;
let speedDownY = -10;

//check if mouse is clicked
let isClick;

//active the change of rect
let isStartChange;


//the second canvas
let extraCanvas;

function setup() {
    createCanvas(720, 640);
    extraCanvas = createGraphics(720, 640);
    extraCanvas.clear();
    collisionDetect = false;
    isClick = false;
    isStartChange = false;
}




function draw() {

    background(backgroundColor.R, backgroundColor.G, backgroundColor.B);


    collisionDetect = false;

    //map
    // let mouseX1 = map(mouseX, 0, 720, 100, 620);
    // let mouseY1 = map(mouseY, 0, 640, 180, 460);

    let mouseX1 = map(mouseX, 0, 720, 100, 620);
    let mouseY1 = map(mouseY, 0, 640, 280, 360);


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

    //eyelashes
    push();
    stroke(eyeLashes.R, eyeLashes.G, eyeLashes.B);
    strokeWeight(eyeLashes.size);
    for (let i = 0; i < 1; i += 1 / 50) {
        //up beizier point
        let upBezierPointX = bezierPoint(theOuterFrameUp.x1, theOuterFrameUp.x2, theOuterFrameUp.x3, theOuterFrameUp.x4, i);
        let upBezierPointY = bezierPoint(theOuterFrameUp.y1, theOuterFrameUp.y2, theOuterFrameUp.y3, theOuterFrameUp.y4, i);

        //down bezier point
        let downBezierPointX = bezierPoint(theOuterFrameDown.x1, theOuterFrameDown.x2, theOuterFrameDown.x3, theOuterFrameDown.x4, i);
        let downBezierPointY = bezierPoint(theOuterFrameDown.y1, theOuterFrameDown.y2, theOuterFrameDown.y3, theOuterFrameDown.y4, i);

        if (upBezierPointX < 428) {

            line(upBezierPointX, upBezierPointY, upBezierPointX - 15, upBezierPointY - 15);
        }
        else {
            line(upBezierPointX, upBezierPointY, upBezierPointX - 10, upBezierPointY - 15);
        }

        if (downBezierPointX < 417) {

            line(downBezierPointX, downBezierPointY, downBezierPointX - 15, downBezierPointY + 15);
        }
        else {
            line(downBezierPointX, downBezierPointY, downBezierPointX - 10, downBezierPointY + 15);
        }


    }
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
        //extraCanvas.fill(213, 110, 19);
        extraCanvas.fill(theMiddleCircle.R, theMiddleCircle.G, theMiddleCircle.B);
        //extraCanvas.circle(theMiddleCircle.x1, theMiddleCircle.y1, theMiddleCircle.size);
        extraCanvas.circle(mouseX1, mouseY1, theMiddleCircle.size);
        pop();

        push();
        extraCanvas.noStroke();
        //extraCanvas.fill(0);
        extraCanvas.fill(theCenterCircle.R, theCenterCircle.G, theCenterCircle.B);
        //extraCanvas.circle(theMiddleCircle.x1, theMiddleCircle.y1, theCenterCircle.size);
        extraCanvas.circle(mouseX1, mouseY1, theCenterCircle.size);
        pop();
    }


    image(extraCanvas, 0, 0);

    if (isClick) {
        push();
        rect(0, 0, width, upRecY);
        pop();

        push();
        rectMode(CORNERS);
        rect(0, height, width, downRecY);
        pop();

        upRecY = constrain(upRecY, 0, height / 2);
        downRecY = constrain(downRecY, height / 2, height);

        upRecY += speedUpY;
        downRecY += speedDownY;


        if (upRecY === height / 2 || downRecY === height / 2) {
            speedUpY *= -1;
            speedDownY *= -1;
            console.log("active");
            isStartChange = false;
            theMiddleCircle.R = random(30, 255);
            theMiddleCircle.G = random(30, 255);
            theMiddleCircle.B = random(30, 255);
            theCenterCircle.R = random(30, 255);
            theCenterCircle.G = random(30, 255);
            theCenterCircle.B = random(30, 255);
            eyeLashes.size = int(random(1, 6));
            eyeLashes.R = random(30, 255);
            eyeLashes.G = random(30, 255);
            eyeLashes.B = random(30, 255);
            backgroundColor.R = random(30, 255);
            backgroundColor.G = random(30, 255);
            backgroundColor.B = random(30, 255);
        }
        if (!isStartChange) {
            if (upRecY === 0 || downRecY === height) {
                speedUpY *= -1;
                speedDownY *= -1;
                isClick = false;
            }

        }

    }

    // console.log("upY", upRecY);
    // console.log("downY", downRecY);
    // console.log(height);




    //console.log("x:", mouseX1);
    //console.log("y:", mouseY1);

    //console.log(mouseX);





}

function mouseClicked() {
    isClick = true;
    isStartChange = true;
    console.log("You click")

}   