
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(50, 340, 50, 50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(50, 380, 400, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  console.log = ground.x
  foodGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
  background("green")
  
  var survivaltime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score:" + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  
  survivaltime = Math.ceil(frameCount/frameRate());
  text("survivaltime:" + survivaltime, 100, 50);
  
  if(keyDown("space")&& monkey.y >=150) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  
   
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
     spawnObstacles();
     food();
   
  monkey.collide(ground);
  drawSprites();  
}
function food(){
  if(World.frameCount%80 == 0){
    banana = createSprite(400, 300, 1, 1);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120, 200));
    
    banana.velocityX = -2;
    banana.Lifetime = 150;
    
    foodGroup.add(banana);
  }
}

function spawnObstacles(){
 if (World.frameCount % 300 === 0){
    obstacle = createSprite(400,365,10,40);
    obstacle.addImage(obstacleImage);
   obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
    
      //obstacle.Y =  Math.round(random(1,6));  
    
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 150;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}



