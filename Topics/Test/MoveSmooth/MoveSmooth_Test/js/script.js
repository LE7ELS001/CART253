/**
 * Test function MoveSmooth
 * Junming He
 * 

 */

"use strict";

let platform = {
    x: 0,
    y: 400,
    w: 640,
    h: 10
}

let Mycircle = {
    x: 0,
    y: 0,
    size: 80,
    isReachLine: false

}

let TmpX = undefined;
let TmpY = undefined;

function setup() {
    createCanvas(720, 640);
    TmpX = mouseX;
    TmpY = mouseY;
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("red");
    drawRect();

    Mycircle.isReachLine = (mouseY + Mycircle.size / 2 >= platform.y) ? true : false;


    if (!Mycircle.isReachLine) {


        Mycircle.x = mouseX;
        Mycircle.y = mouseY;
        drawCircle();
    }
    else {
        Mycircle.x = mouseX;
        drawCircle();
    }



    // if (Mycircle.isReachLine) {
    //     console.log("Active");

    //     Mycircle.x = 
    // }



}

function drawRect() {
    push();
    strokeWeight(2);
    fill(60);
    rect(platform.x, platform.y, width, platform.h);
    pop();
}

function drawCircle() {
    push();
    noStroke();
    fill("255");
    //circle(100, 100, 50);
    circle(Mycircle.x, Mycircle.y, Mycircle.size);
    pop();
}


/**
 * let MyCircle = {
  x:0,
  y:0,
  size:50,
  isReachTheBezier:undefined,
  isOutOfTheLine:undefined
  
}

let   tmpX2 =0;
let   tmpY2 = 0;

function setup() {
  createCanvas(400, 400);
  MyCircle.isReachTheBezier = false;
  MyCircle.isOutOfTheLine= false;
}

function draw() {
  background(220);
  noFill();
  bezier(0,150,50,240,350,240,400,150);
  bezier(0,125,50,225,350,225,400,125);
  

  
  for(let i =0; i < 1; i+= 1/100)
    {
      let tmpX = bezierPoint(0,50,350,400,i);
      let tmpY = bezierPoint(150,250,250,150,i);
      let tmpX2 = bezierPoint(0,50,350,400,i);
      let tmpY2 = bezierPoint(125,225,225,125,i);
      let d = dist(mouseX, mouseY, tmpX, tmpY);
      if(d <= MyCircle.size/2 )
        {
          
          MyCircle.isReachTheBezier = true;
          MyCircle.x = tmpX2;
          MyCircle.y = tmpY2;
          break;
        }
      else if(mouseY > tmpY)
        {
          MyCircle.x = tmpX2;
          MyCircle.y = tmpY2;
          MyCircle.isOutOfTheLine = true;
          break;
        }
        else{
            MyCircle.isReachTheBezier = false;
            MyCircle.isOutOfTheLine = false;
          }
        
    };
  
  if(!MyCircle.isReachTheBezier)
    {
      MyCircle.x = mouseX;
      MyCircle.y = mouseY;
      drawCircle();
    }
  else if (MyCircle.isOutOfTheLine || MyCircle.isReachTheBezier)
      {
        drawCircle();     
      }
  
  console.log(mouseY);
  
  
}

function drawCircle() {
  push();
  fill(0,255,100);
  circle(MyCircle.x,MyCircle.y,MyCircle.size);
  pop();
  
}
 */