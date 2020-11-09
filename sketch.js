
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var monkey
var ground
var bannanaGroup
var obstacleGroup 
var obstacle
var SurvivalTime=0;

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600) 
 monkey = createSprite (80,315,10,10) 
 monkey.addAnimation ( 'moving',  monkey_running )
 monkey.scale=0.1

 ground=createSprite (400,350, 900, 10)
 ground.velocityX=-4
 ground.x=ground.width/2
  console.log(ground.x)
}


function draw() {
background('white')
 if(keyDown("space")) {
  monkey.velocityY = -12;
      
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
   if (ground.x < 0){
      ground.x = ground.width/2;
   }
  
 monkey.collide(ground)
  
  banana()
  obstacles()
  
  survivalTime=Math.ceil(frameCount/frameRate())
  text('Survival Time:' + survivalTime, 100,50 )
  
drawSprites(); 
}

function banana () {

   if (frameCount % 80 === 0){
   var  banana= createSprite(400,165,10,40);
   banana.velocityX=-6
       banana.y = Math.round(random(120,200));
     banana.addImage ( bananaImage)
     banana.scale = 0.1
     banana.lifetime=80
   }   
  
  
  
  
}


function obstacles (){
 
  if (frameCount % 300 === 0){
  obstacle = createSprite (600, 330, 10, 10)  
  obstacle.velocityX = -4
  obstacle.addImage ( obstacleImage )
  obstacle.scale=0.1
    obstacle.lifetime = 600
    
  }
}






