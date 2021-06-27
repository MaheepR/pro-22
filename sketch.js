const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_opt={
		isStatic:true,
	};

	bob1 = Bodies.circle(335,350,50,ball_opt);
	World.add(world,bob1);

	bob2 = Bodies.circle(370,350,50,ball_opt);
	World.add(world,bob2);

	bob3 = Bodies.circle(405,350,50,ball_opt);
	World.add(world,bob3);

	bob4 = Bodies.circle(440,350,50,ball_opt);
	World.add(world,bob4);

	bob5 = Bodies.circle(475,350,50,ball_opt);
	World.add(world,bob5);

	rope1 = new Rope(bob1,roof,-80,0);
	rope2 = new Rope(bob1,roof,-80,0);
	rope3 = new Rope(bob1,roof,-80,0);
	rope4 = new Rope(bob1,roof,-80,0);
	rope5 = new Rope(bob1,roof,-80,0);
	
	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	
  
  //create ellipse shape for multiple bobs here
	ellipse(bob1.position.x,bob1.position.y,35);
	ellipse(bob2.position.x,bob2.position.y,35);
	ellipse(bob3.position.x,bob3.position.y,35);
	ellipse(bob4.position.x,bob4.position.y,35);
	ellipse(bob5.position.x,bob5.position.y,35);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0});
	}
}