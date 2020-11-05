
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,GND,left_rect,middle_rect,right_rect;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	GND = new Ground(400,550,800,15);
	paper = new Paper(200,470);
	left_rect = new Dustbin(395,550,20,100);
	middle_rect = new Dustbin(500,550,200,20);
	right_rect = new Dustbin(605,550,20,100); 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  GND.display();
  paper.display();
  left_rect.display();
  middle_rect.display();
  right_rect.display();
  drawSprites();
 
}


function Key_Pressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
