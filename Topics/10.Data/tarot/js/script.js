/**
 * Tarot
 * Pippin Barr
 * 
 * Some experiments with data representing a Tarot deck
 */

"use strict";

let tarot;
let description;
let fortune;

function preload() {
    tarot = loadJSON("../assets/data/tarot_interpretations.json");
}

function setup() {
    createCanvas(1280, 900);

    let card = random(tarot.tarot_interpretations);

    fortune = random(card.fortune_telling);
}



function draw() {
    background(0);

    //description = tarot.description;
    //let firstShadowMeaning = tarot.tarot_interpretations[0].meanings.shadow[0];

    push();
    textSize(18);
    textAlign(CENTER);
    fill(255, 255, 0);
    text(fortune, width / 2, height / 2);
    pop();
}