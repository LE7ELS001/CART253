/**
 * Data-challenge
 * Junming He
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";

let mainText = "Click to generate a car name.";
let carName;
let dinosaurName;

/**
 * Load the car and dinosaur data
 */
function preload() {
    carData = loadJSON("../assets/data/cars.json");
    dinosaurData = loadJSON("../assets/data/dinosaurs.json");
    langData = loadJSON("../assets/data/lang.json");
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(800, 600);
    mainText = langData[lang];
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(mainText, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {

    carName = random(carData.cars);
    dinosaurName = random(dinosaurData.dinosaurs);
    //mainText = "Your car's name is " + dinosaurName + " " + carName;
    mainText = `Your car's name is ${dinosaurName} ${carName}`;

}