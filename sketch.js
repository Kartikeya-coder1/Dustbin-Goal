const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper
var paperImg;				 
var world;
var paperball;
var paper1 , ig,ig2;

////function preload(){
	//paperImg = loadImage("paper.png")
//}




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	
	engine = Engine.create();
	world = engine.world;
	

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,600);

	paper = new papert(250,290,65);
	 ig=new ground(950,550,20,240);
	//  ig2=new ground(950,435,5,50);

	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireFrames:false
		}
	})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");
 

  groundObject.display();
  dustbinObj.display();
  paper.display();
//   ig.display();
//   ig2.display();
  //keyPressed()	

}


function keyPressed(){
	if (keyCode === UP_ARROW)  {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:600,y:-1400});
	}
}