var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
   ghost = createSprite(300,300)
   ghost.addImage(ghostImg)
    ghost.scale = 0.3 
     doorsGroup = new Group()
    
    
     



}
  

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
   spawndoors()
    drawSprites()

   if (keyDown("UP_ARROW")) {
      ghost.velocityY = -5
   } 
    if(keyDown("RIGHT_ARROW")){
      ghost.velocityX = 5
    }
    if(keyDown("LEFT_ARROW")){
      ghost.velocityX = -5
    }

    if(ghost.isTouching(doorsGroup)){
      text("gameover",200,200)
      doorsGroup.setVelocityXEach(0)
      ghost.setVelocityXEach(0)

    }


      ghost.velocityY=ghost.velocityY+0.5
}
 function spawndoors() {
  if (frameCount %60===0 ) {
    door = createSprite(500,100)
    door.addImage(doorImg)
    climber = createSprite(500,150)
    climber.addImage(climberImg)
     climber.velocityY=5 
     door.velocityY = 5
     door.x = Math.round(random(10,450))
    // climber.x = Math.round(random(10,50))
      climber.x = door.x
     doorsGroup.add(door)

  }


 }