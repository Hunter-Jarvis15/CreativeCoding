
   // x and y for my character (square)
    var squareX = 100;
    var squareY = 100;

    var w = 87; 
    var s = 83;
    var a = 65;
    var d = 68;

    //circle enemy
    var circleX = 30;
    var circleY = 50;
    var circleXs = [];
    var circleYs = [];
    var circleXSpeed = [];
    var circleYSpeed = [];
    var diameters = []; 



    //circle when mouse clicked
    var mouseclickX;
    var mouseclickY;


    function setup()
    {
        createCanvas(800,600);
        for (var i = 0; i < 50; i++) {
            circleXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
            circleYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
            circleXs[i] = getRandomNumber(800);
            circleYs[i] = getRandomNumber(600);
            diameters[i] = getRandomNumber(20);
        }
        Square(100, 100);

    }
    function draw()
    {
        background(0,69,172);
        stroke(0);

        createSquare();
        Squaremove();
        walls();

        // exit message
        textSize(24);
        fill(255,0,0);
        text("EXIT", width-75,height-80);
        
        fill(105,105,105);

        // sets speed of circle enemy by giving it a random number
        for (var i = 0; i < circleXs.length; i++) {
            circle(circleXs[i], circleYs[i], diameters[i]);
            circleXSpeed [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            circleYSpeed [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the circle enemy
        circleXs [i] += circleXSpeed [i];
        circleYs [i] += circleYSpeed [i];

        //checks where the circle enemy is within the bounds of the canvas
        if(circleXs [i] > width)
        {
            circleXs[i] = 0;
        }
        if(circleXs[i] < 0)
        {
            circleXs[i] = width;
        }
        if(circleYs[i] > height)
        {
            circleYs[i] = 0;
        }
        if(circleYs[i] < 0)
        {
            circleYs[i] = height;
        }
    }
        //square charcter got to the exit
        if(squareX > 775 && squareY > 515)
        {
            fill(0);
            stroke(8);
            textSize(26);
            text("You Did The Thing, Congrats!", width/2-155, height/2);
        }

        fill(0);
        circle(mouseclickX, mouseclickY, 25);

    }

    function Square(x,y) 
    {
        squareX = x;
        squareY = y;
    }
    
    function createSquare()
    {
        //Square character
        fill(215,73,44);
        square(squareX,squareY,50);
    }
    

    function Squaremove()
    {
        //movement of square
        if(keyIsDown(w))
        {
            squareY -= 6;   
        }
        if(keyIsDown(s))
        {
            squareY += 6;   
        }
        if(keyIsDown(a))
        {
            squareX -= 6;   
        }
        if(keyIsDown(d))
        {
            squareX += 6;   
        }
    }

    function walls()
    {
        fill(0,129,9);
        // top border
        rect(0,0,width,20);
        // left border
        rect(0,0,20,height);
        // bottom border
        rect(0, height-20,width, 20);
        // right upper border
        rect(width-20,0,20,height-80);
    }



    function mouseClicked()
    {
        mouseclickX = mouseX;
        mouseclickY = mouseY;
    }

    function getRandomNumber(number) {
        return Math.floor(Math.random() * number) + 10;
    }



/*
//Prof example
// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(200, 350);
}

function draw() {
    background(120, 45, 78);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("EXIT", width - 50, height - 50)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // potential enemy
    fill(13, 145, 14);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);




        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
    // check to see if the character has left the exit
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    // create the shape based on the mouse click
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(23, 40, 123);
    circle(characterX, characterY, 25);
}

function createBorders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
*/