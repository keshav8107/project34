const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const MouseConstraint=Matter.MouseConstraint;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	canvas=createCanvas(windowWidth/2,windowHeight/1.5);

	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	let canvasmouse=Mouse.create(canvas.elt)
	canvasmouse.pixelRatio=pixelDensity();
	let options={
		mouse:canvasmouse
	};
	mconstraint=mouseConstraint.create(engine.optins)
	World.add(world,mconstraint)
	//roofObject=new roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new pendulum(startBobPositionX-bobDiameter*2,startBobPositionY,"#00b0ff");
	bobObject2=new pendulum(startBobPositionX-bobDiameter,startBobPositionY,"#e91e63");
	bobObject3=new pendulum(startBobPositionX,startBobPositionY,"#ffc107");
	bobObject4=new pendulum(startBobPositionX+bobDiameter,startBobPositionY,"e91e63");
	bobObject5=new pendulum(startBobPositionX+bobDiameter*2,startBobPositionY,"00b0ff");
	
	
	//Create a Ground
	

	

    rope1=new rope(bobObject1.body,{x:340,y:200})
	rope2=new rope(bobObject2.body,{x:400,y:200})
	rope3=new rope(bobObject3.body,{x:460,y:200})
	rope4=new rope(bobObject4.body,{x:520,y:200})
	rope5=new rope(bobObject5.body,{x:580,y:200})

	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  //roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
function mousePressed(){
	Matter.body.setPosition(bobObject1.body,{x:mouseX,y:mouseY})
}
