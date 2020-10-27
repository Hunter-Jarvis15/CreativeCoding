var headX = 200;
var headY = 200;
var headDirection = 1;

var mouthX = 200;
var mouthY = 252;
var mouthdirection = 5;
var tongueX = 200;
var tongueY = 260;
var tonguedirection = 3;

var LglassesX = 141;
var LglassesY = 173;
var Lglassesmove = 2.5
var RglassesX = 210;
var RglassesY = 173;
var Rglassesmove = 4;

var size = 22;
var count = 0;
var sizeDirection = 2;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(34,139,34);

    //neck
    fill(222,184,135);
    rect(167, 275, 68, 48);

    //head
    ellipse(headX,headY,150,180);
    headX+=headDirection;
    if(headX >= 325 || headX <= 75)
    {
        headDirection *= -1;
    }
    /*else(headY >= 300 || headY <= 50)
    {
        headDirection *= -1;
    }
    */
    //glasses
    rect(LglassesX,LglassesY,50,25);
    LglassesY+=Lglassesmove;
    if(LglassesY >= 325 || LglassesY <= 75)
    {
        Lglassesmove *= -1;
    }

    rect(RglassesX,RglassesY,50,25);
    RglassesY+=Rglassesmove;
    if(RglassesY >= 325 || RglassesY <= 75)
    {
        Rglassesmove *= -1;
    }

    line(192, 185, 210, 185);

    //eyes
    ellipse(165,185,30,20);
    ellipse(235,185,30,20);

    //nose
    triangle(200, 225, 200, 185, 215, 225);

    
    //mouth
    fill(105,105,105);
    ellipse(mouthX, mouthY, 60, 25);
    mouthX+=mouthdirection;
    if(mouthX >= 325 || mouthX <= 75)
    {
        mouthdirection *= -1;
    }
    fill(240,128,128);
    ellipse(tongueX, tongueY, 30, 10);
    tongueX+=tonguedirection;
    if(tongueX >= 325 || tongueX <= 75)
    {
        tonguedirection *= -1;
    }
    
    //body
    fill(0,191,255);
    rect(103, 315, 192, 88);

    //pupils
    fill(0,0,0);
    ellipse(165,185,12,12);
    ellipse(235,185,12,12);

    //name tag
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = .125;
    }
    text("Hunter Jarvis",10 ,385);
}