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
    var circleXSpeed;
    var circleYSpeed;

    var mouseclickX;
    var mouseclickY;


    function setup()
    {
        createCanvas(800,600);
        circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
        circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
    }
    function draw()
    {
        background(0,69,172);
        stroke(0);

        Square();
        Squaremove();
        walls();

        // exit message
        textSize(24);
        fill(255,0,0);
        text("EXIT", width-75,height-80);
        
        fill(105,105,105);
        circle(circleX, circleY, 35);

        // sets speed of circle enemy by giving it a random number
        circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the circle enemy
        circleX += circleXSpeed;
        circleY += circleYSpeed;

        //checks where the circle enemy is within the bounds of the canvas
        if(circleX > width)
        {
            circleX = 0;
        }
        if(circleX < 0)
        {
            circleX = width;
        }
        if(circleY > height)
        {
            circleY = 0;
        }
        if(circleY < 0)
        {
            circleY = height;
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
