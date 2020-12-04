const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png")
	treeImage = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//tree = new Tree(1300, 418, 600, 750)
	ground = new Ground(800, 790, 1600, 20)

	stone = new Stone(188, 608, 50, 50)

	

	mango1 = new Mango(1106, 296, 30)
	mango2 = new Mango(1251, 167, 35)
	mango3 = new Mango(1193, 268, 35)
	mango4 = new Mango(1293, 297, 30)
	mango5 = new Mango(1185, 357, 30)
	mango6 = new Mango(1330, 216, 30)
	mango7 = new Mango(1353, 120, 35)
	mango8 = new Mango(1405, 294, 38)
	mango9 = new Mango(1420, 200, 35)
	mango10 = new Mango(1486, 258, 35)
  mango11 = new Mango(1525, 340, 35)
  
  boy = createSprite(260, 690, 200, 350)
  boy.scale = 0.14
  boy.addImage(boyImage)

  sling = new SlingShot(stone.body,{x:188, y:boy.y-80})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  text (mouseX+ ":"+ mouseY, 400, 200)

  imageMode(CENTER)
  //image(boyImage , 250, 690, 200, 350)
  image(treeImage, 1300, 418, 600, 750)


  //tree.display();
  ground.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);
  detectcollision(stone, mango9);
  detectcollision(stone, mango10);
  detectcollision(stone, mango11);



  drawSprites();

  sling.display();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
function detectcollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
	if(distance<=lmango.r+lstone.r){
    console.log(distance)
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:188 , y:boy.y-82})
    sling.attach(stone.body)
  }
  if(keyCode === UP_ARROW){
    boy.y = boy.y-50
    sling.sling.bodyA = null
    sling = new SlingShot(stone.body, {x:188, y:boy.y-80})
    Matter.Body.setPosition(stone.body, {x : 188, y : boy.y-82})
  }
  if(keyCode === DOWN_ARROW){
    boy.y = boy.y+50
    sling.sling.bodyA = null
    sling = new SlingShot(stone.body, {x:188, y:boy.y-80})
    Matter.Body.setPosition(stone.body, {x : 188, y : boy.y-82})
  }
}





