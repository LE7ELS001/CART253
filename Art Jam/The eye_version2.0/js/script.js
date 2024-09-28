/**
 * The eye 2.0 
 * Junming He
 * 
 */

"use strict";


//eyeFrame value
let upperEyeFrame = {
    x1: 100,
    y1: 290,
    x2: 230,
    y2: 130,
    x3: 490,
    y3: 130,
    x4: 620,
    y4: 350,

    //color
    color: {
        R: 217,
        G: 136,
        B: 58
    },

    //stroke weight
    lineWeight: 2
}

let lowerEyeFrame = {
    x1: 100,
    y1: 289,
    x2: 230,
    y2: 490,
    x3: 490,
    y3: 490,
    x4: 620,
    y4: 349,

    //default color
    color: {
        R: 217,
        G: 136,
        B: 58
    }
}

// eyelid value
let upperEyelid = {
    x1: 100,
    y1: 290,
    x2: 230,
    y2: 180,
    x3: 490,
    y3: 180,
    x4: 620,
    y4: 350,
    color: 255
}

let lowerEyelid = {
    x1: 100,
    y1: 289,
    x2: 230,
    y2: 460,
    x3: 490,
    y3: 460,
    x4: 620,
    y4: 349
}

//eyelash value
let eyeLashes = {
    size: 3,
    R: 0,
    G: 0,
    B: 0,
    upperDivideNumber: 1 / 50,
    lowerDivideNumber: 1 / 25
}

//eye lris value
let eyeLris = {
    x: 360,
    y: 317,
    size: 110,
    R: 73,
    G: 60,
    B: 46
}

//eye pupil value
//pupil position should follow the Lris
let eyePupil = {
    size: 60,
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

//mouseClik value
let isMouseCliked = undefined;
let isAnimationFinish = undefined;


function setup() {
    createCanvas(720, 640);
    isMouseCliked = false;
    isAnimationFinish = true;

}


function draw() {
    background(backgroundColor.R, backgroundColor.G, backgroundColor.B);



    if (!isMouseCliked || isAnimationFinish) {
        //draw the eyeFrame
        push();
        strokeWeight(upperEyeFrame.lineWeight);
        fill(upperEyeFrame.color.R, upperEyeFrame.color.G, upperEyeFrame.color.B);
        bezier(upperEyeFrame.x1, upperEyeFrame.y1, upperEyeFrame.x2, upperEyeFrame.y2, upperEyeFrame.x3, upperEyeFrame.y3, upperEyeFrame.x4, upperEyeFrame.y4);
        bezier(lowerEyeFrame.x1, lowerEyeFrame.y1, lowerEyeFrame.x2, lowerEyeFrame.y2, lowerEyeFrame.x3, lowerEyeFrame.y3, lowerEyeFrame.x4, lowerEyeFrame.y4);
        pop();


        //draw the eyelid
        push();
        strokeWeight(upperEyeFrame.lineWeight);
        fill(upperEyelid.color);
        bezier(upperEyelid.x1, upperEyelid.y1, upperEyelid.x2, upperEyelid.y2, upperEyelid.x3, upperEyelid.y3, upperEyelid.x4, upperEyelid.y4);
        bezier(lowerEyelid.x1, lowerEyelid.y1, lowerEyelid.x2, lowerEyelid.y2, lowerEyelid.x3, lowerEyelid.y3, lowerEyelid.x4, lowerEyelid.y4);
        pop();



        //draw the eyelash
        push();
        stroke(eyeLashes.R, eyeLashes.G, eyeLashes.B);
        strokeWeight(eyeLashes.size);

        //upper eyelashes point (x,y)
        for (let i = 0; i < 1; i += eyeLashes.upperDivideNumber) {
            let upperTmpX = bezierPoint(upperEyelid.x1, upperEyelid.x2, upperEyelid.x3, upperEyelid.x4, i);
            let upperTmpY = bezierPoint(upperEyelid.y1, upperEyelid.y2, upperEyelid.y3, upperEyelid.y4, i);
            line(upperTmpX, upperTmpY, upperTmpX - 8, upperTmpY - 15);
        }


        //lower eyelashes point (x,y)
        for (let i = 0; i < 1; i += eyeLashes.lowerDivideNumber) {

            let lowerTmpX = bezierPoint(lowerEyelid.x1, lowerEyelid.x2, lowerEyelid.x3, lowerEyelid.x4, i);
            let lowerTmpY = bezierPoint(lowerEyelid.y1, lowerEyelid.y2, lowerEyelid.y3, lowerEyelid.y4, i);
            line(lowerTmpX, lowerTmpY, lowerTmpX - 10, lowerTmpY + 10);
        }
        pop();
    }






    //Draw eye lris
    //Detect the left edge and right edge and the middle area
    if (mouseX <= 188) {
        eyeLris.x = 190;
        eyeLris.y = 300;
    }
    else if (mouseX >= 531) {
        eyeLris.x = 531;
        eyeLris.y = 339;
    }
    else {
        if (mouseY >= 317) {

            //draw the bezier to debug the track
            //bezier(lowerEyelid.x1, lowerEyelid.y1 - eyeLris.size / 2 - 25, lowerEyelid.x2, lowerEyelid.y2 - eyeLris.size / 2 - 7, lowerEyelid.x3, lowerEyelid.y3 - eyeLris.size / 2 - 5, lowerEyelid.x4, lowerEyelid.y4 - eyeLris.size / 2 - 10);


            for (let i = 0; i < 1; i += 1 / 100) {
                let lowerTmpX = bezierPoint(lowerEyelid.x1, lowerEyelid.x2, lowerEyelid.x3, lowerEyelid.x4, i);
                let lowerTmpY = bezierPoint(lowerEyelid.y1 - eyeLris.size / 2 - 25, lowerEyelid.y2 - eyeLris.size / 2 - 7, lowerEyelid.y3 - eyeLris.size / 2 - 5, lowerEyelid.y4 - eyeLris.size / 2 - 10, i);

                const dx = mouseX - lowerTmpX;
                const dy = mouseY - lowerTmpY;

                if (dy > 0) {
                    if (abs(dx) <= width / 100) {
                        eyeLris.x = lowerTmpX;
                        eyeLris.y = lowerTmpY;
                        break;
                    }
                }
                else {
                    eyeLris.x = mouseX;
                    eyeLris.y = mouseY;
                }
            }
        }
        else {
            //draw the bezier to debug the track
            //bezier(upperEyelid.x1, upperEyelid.y1 + eyeLris.size / 2 + 6, upperEyelid.x2, upperEyelid.y2 + eyeLris.size / 2 + 3, upperEyelid.x3, upperEyelid.y3 + eyeLris.size / 2 + 5, upperEyelid.x4, upperEyelid.y4 + eyeLris.size / 2 + 16);

            for (let i = 0; i < 1; i += 1 / 100) {
                let upperTmpX = bezierPoint(upperEyelid.x1, upperEyelid.x2, upperEyelid.x3, upperEyelid.x4, i);
                let upperTmpY = bezierPoint(upperEyelid.y1 + eyeLris.size / 2 + 6, upperEyelid.y2 + eyeLris.size / 2 + 3, upperEyelid.y3 + eyeLris.size / 2 + 5, upperEyelid.y4 + eyeLris.size / 2 + 16, i);

                const dx = mouseX - upperTmpX;
                const dy = mouseY - upperTmpY;

                if (dy < 0) {
                    if (abs(dx) <= width / 100) {
                        eyeLris.x = upperTmpX;
                        eyeLris.y = upperTmpY;
                        break;
                    }
                }
                else {
                    eyeLris.x = mouseX;
                    eyeLris.y = mouseY;
                }
            }

        }
    }
    push();
    noStroke();
    fill(eyeLris.R, eyeLris.G, eyeLris.B);
    circle(eyeLris.x, eyeLris.y, eyeLris.size);
    //circle(mouseX, mouseY, eyeLris.size);
    pop();


    //draw eye pupil
    push();
    noStroke();
    fill(eyePupil.R, eyePupil.G, eyePupil.B);
    circle(eyeLris.x, eyeLris.y, eyePupil.size);
    pop();

    //draw eyeframe after mouse click
    if (isMouseCliked || !isAnimationFinish) {
        push();
        strokeWeight(upperEyeFrame.lineWeight);
        fill(upperEyelid.color);
        bezier(upperEyelid.x1, upperEyelid.y1, upperEyelid.x2, upperEyelid.y2, upperEyelid.x3, upperEyelid.y3, upperEyelid.x4, upperEyelid.y4);
        bezier(lowerEyelid.x1, lowerEyelid.y1, lowerEyelid.x2, lowerEyelid.y2, lowerEyelid.x3, lowerEyelid.y3, lowerEyelid.x4, lowerEyelid.y4);
        pop();

    }


    //debug
    //console.log(mouseY);

}

function mouseClicked() {
    if (isAnimationFinish) {

        isMouseCliked = true;
        isAnimationFinish = false;

        //debug
        console.log("you click");
    }

}