var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var red1
var red2,red3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	red1=createSprite(width/2,655,200,20);
	red2=createSprite(490,600,20,100);
	red3=createSprite(310,600,20,100);
    red1.shapeColor="RED";
    red2.shapeColor="RED";
    red3.shapeColor="RED";
	
	
    


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
   
	
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
		World.add(world, packageBody);

	//Create a Ground
	red1 = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
 	World.add(world, red1);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



