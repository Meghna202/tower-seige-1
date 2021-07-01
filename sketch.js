const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1,stand2;
var stone;
var slingShot;
var polygon_img;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(350,275,40,40);
  console.log(block1);
  
  block2 = new Block(380,275,40,40);
  block3 = new Block(410,275,40,40);
  block4 = new Block(430,275,40,40);
  //level two
  block5 = new Block(353,235,40,40);
  block6 = new Block(395,235,40,40);
  block7 = new Block(435,235,40,40);
  //level 3
  block8 = new Block(375,195,40,40);
  block9 = new Block(415,195,40,40);
  //leval 4
  block10 = new Block(395,170,40,40);


  block11 = new Block(655,195,30,30);
  block12 = new Block(685,195,30,30);
  block13 = new Block(715,195,30,30);
  block14 = new Block(745,195,30,30);
  //level two
  block15 = new Block(670,175,30,30);
  block16 = new Block(700,175,30,30);
  block17 = new Block(730,175,30,30);
  //level 3
  block18 = new Block(685,155,30,30);
  block19 = new Block(715,155,30,30);
  //leval 4
  block20 = new Block(700,135,30,30);


  //stone
  stone = new Stone(130, 150, 40, 40)

  slingShot = new Sling(stone.body,{x:130, y:150})

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  ground.display();
  stand1.display();
  stand2.display();
  stone.display();
  slingShot.display();
  
  strokeWeight(2);
  stroke(15);
  fill("orange");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  fill("pink")
  block5.display();
  block6.display();
  block7.display();
  block15.display();
  block16.display();
  block17.display();
  //block13.display();
  fill("skyblue");
  block8.display();
  block9.display();
  block18.display();
  block19.display();
  fill("leafgreen");
  block10.display();
  block20.display();
  keyPressed();
  
}

function keyPressed(){
  if(keyDown("space")){
    slingShot = new Sling(stone.body,{x:130, y:150})
  }
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}

