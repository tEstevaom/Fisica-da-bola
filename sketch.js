const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world

  var optionsBall = {
    restitution: 0.95,
    frictionAir: 0.01
  }
 
  ball=Bodies.circle(200, 20,30,optionsBall) ;
  World.add(world,ball);

   var groundOptions ={
    isStatic: true
  }
  ground = Bodies.rectangle(200, 350, 400, 10,groundOptions)
  World.add(world,ground)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background("lightBlue")
  Engine.update(engine);
  fill("white")
  ellipse(ball.position.x,ball.position.y,30)
  fill("green")
  rect(ground.position.x,ground.position.y,400, 10)
}

