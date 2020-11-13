var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  boxPosition=width/2-50
boxY=410
  boxleftSprite=createSprite(boxPosition,boxY,20,100);
boxleftSprite.shapeColor=color(255,0,0);
boxleftBody=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true})
World.add(world,boxleftBody)
boxBase=createSprite(boxPosition+100,boxY+40,200,20);
boxBottomBody=Bodies.rectangle(boxPosition+100,boxY+45-20,200,20,{isStatic:true})
boxBase.shapeColor=color(255,0,0);
World.add(world,boxBottomBody);
boxrightsprite=createSprite(boxPosition+200,boxY,20,100);
boxrightsprite.shapeColor=color(255,0,0);
boxrightBody=Bodies.rectangle(boxPosition+200-20,boxY,20,100,{isStatic:true})
World.add(world,boxrightBody);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.y=packageSprite.y-20
	translation={y:-20,x:0}
	Matter.Body.setStatic(packageBody,false);
  }
}



