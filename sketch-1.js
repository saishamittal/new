
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var myengine,myworld;
var ground, ball;
var drumSound;
var drum1Sound;
var drum2Sound;

function preload(){
  
  drumSound = loadSound("mixkit-tribal-dry-drum-558.wav");
  
  drum1Sound = loadSound("mixkit-soft-horror-hit-drum-564.wav");
  
  drum2Sound = loadSound("mixkit-fail-drum-and-xylophone-568.wav");
}

function setup(){
    var canvas = createCanvas(800,400);
   
    myengine = Engine.create();
    myworld = myengine.world;

    var ground_options ={
        isStatic: true,
      
    }
    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(myworld,ground);
    console.log(ground);

    var redBox_options ={
        isStatic: true,
    }

    redBox = Bodies.rectangle(325,320,100,120,redBox_options);
    World.add(myworld,redBox);

    var greenBox_options ={
        isStatic: true,
    }

    greenBox = Bodies.rectangle(450,320,100,120,greenBox_options);
    World.add(myworld,greenBox);

    var yellowBox_options ={
        isStatic: true,
        angle:-60
        
    }

    yellowBox = Bodies.rectangle(590,320,100,20,yellowBox_options);
    World.add(myworld,yellowBox);

    var ball_options ={
        isStatic: false,
        restitution: 1.35
    }

    ball = Bodies.circle(600,100,20, ball_options);
    World.add(myworld,ball);
}

function draw(){
    background("lightgreen");
    Engine.update(myengine);
    rectMode(CENTER);

    fill("brown")
    rect(ground.position.x,ground.position.y,800,20);
    fill("red")
    rect(redBox.position.x,redBox.position.y,100,120);
    fill("green")
    rect(greenBox.position.x,greenBox.position.y,100,120);
    
    fill("yellow")
    push();
    translate(yellowBox.position.x,yellowBox.position.y);
    rotate(-45);
    rectMode(CENTER);
    rect(0, 0, 100, 20);
    pop();
   
    fill("red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    if(ball.isTouching(redBox)){
     Drum1Sound.play();
     
    }
  
  if(ball.isTouching(yellowBox)){
     DrumSound.play();
    
    }
  
  if(ball.isTouching(greenBox)){
     Drum2Sound.play();
     
    }
}
