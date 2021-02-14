const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World  = Matter.World;


var bodyguard,bodyguardImage;
var backgroundImage;
var world;
var engine;
var ground;

function preload(){
  //bodyguardImage = loadAnimation("Animation/Man1.png","Animation/Man2.png","Animation/Man3.png","Animation/Man4.png","Animation/Man5.png","Animation/Man6.png")
 // backgroundImage = loadImage("Animation/Background.png")
}
function setup() {

  engine = Engine.create();
  world = engine.world;
  createCanvas(1500,700);
  background = createSprite(400,240,1500,700)
  background.addImage(backgroundImage)
  background.x = background.width/2;
 //bodyguard =  createSprite(150, 570, 40, 40);
 //bodyguard.addAnimation("Image",bodyguardImage)
 //bodyguard.collide(ground);

   ground = new Ground(150,575,1500,700)
   bodyguard = new Bodyguard(150,570,40,40)

}

function draw() {
  //background(backgroundImage); 
  
  background.velocityX = -3;

  if (background.x < 0){
   background.x = background.width/2;
  }
  if(keyDown("space") ) {
    bodyguard.velocityY = -10;
  }
  bodyguard.velocityY = bodyguard.velocityY +0.5

  ground.display();
  bodyguard.display();

 

  drawSprites();
}