
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var  world;
var dustbinimg;
var dustbin1;
function preload(){
	dustbinimg=loadImage("dustbingreen.png")
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
 dustbin1=createSprite(1200,570)
 dustbin1.addImage(dustbinimg)
 dustbin1.scale= 0.5

	engine = Engine.create();
	world = engine.world;
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(55);

  groundObject.display();
  dustbin1.display();
  paperObject.display();
  
  drawSprites();
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





