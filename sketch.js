
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left,right,bottom,ball;
function preload()
{
	
var left = createSprite(600,680,20,80);
var bottom = createSprite(645,700,90,20);
var right = createSprite(690,680,20,80);
var ball = createSprite(400,690,10,10);


}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 if(keyIsDown(RIGHT_ARROW)){
	 ball.velocityX = 50;
	 ball.velocityY = -10;
	 ball.velocityY = ball.velocityY+ 20;
 }





  drawSprites();
 
}



