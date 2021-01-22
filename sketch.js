var truck , truckImage, truckGroup , greencar , greencarImage, greencarGroup , purplecar , purplecarImage, purplecarGroup , bus , busImage, busGroup , bike , bikeImage, road , roadImage , hole , holeImage, holeGroup ,score=0 , reset , resetImage;  
var gameState="PLAY", PLAY, END  , finish , finishImage;

function preload(){
truckImage=loadImage("germ.png");
greencarImage=loadImage("mask.png");
purplecarImage=loadImage("germ2.png");
busImage=loadImage("germ2.png");
bikeImage=loadImage("boy-.gif");
roadImage=loadImage("road2.jpg");
holeImage=loadImage("mask-1.png");
resetImage=loadImage("re.png");
soundi = loadSound("sound.mp3");
finishImage=loadImage("finish.png");  
}

function setup() {
createCanvas(650,600);
   road= createSprite(300,300);
  road.addImage(roadImage);
  road.scale=1.75;
  road.width=2000;
  road.heiht=1000;
  
   
   bike= createSprite(300,500);
   bike.addImage(bikeImage);
   bike.scale=0.8;
  
  reset=createSprite(300,60);
  reset.addImage(resetImage);
  reset.scale=0.8;
  
  reset.visible=false;
  
  score = score + Math.round(frameCount/60);
  busGroup=new Group();
  truckGroup=new Group();
  greencarGroup=new Group();
  holeGroup=new Group();
  purplecarGroup=new Group();
  
   
}

function draw() {
  
  
  obstacle();
  road.velocityY=20;
  
  if(gameState=="PLAY"){
    
    
  if(road.y>400){
   road.y=road.height/3;  
   }
    
    if(keyDown("RIGHT_ARROW")){
      bike.velocityX=5;
      }
    if(keyDown("LEFT_ARROW")){
      bike.velocityX=-5;
      }
    if(busGroup.isTouching(bike)||truckGroup.isTouching(bike)||purplecarGroup.isTouching(bike)){
    gameState="END";
     }

    if(holeGroup.isTouching(bike)){
      holeGroup.destroyEach();
      score=score+1;
    }
    
    if(greencarGroup.isTouching(bike)){
      greencarGroup.destroyEach();
      score=score+1;
    }
    
    if((bike.x==600)||(bike.x==0)){
      gameState="END";
    }
      
  }
  if(gameState=="END"){
    soundi.stop();
     road.velocityY=0;
  //road.destroy();
    bike.velocityY=0;
   bike.velocityX=0;
   truckGroup.setVelocityYEach(0);
    truckGroup.setVelocityXEach(0);
    purplecarGroup.setVelocityYEach(0);
    purplecarGroup.setVelocityXEach(0);
    busGroup.setVelocityYEach(0);
    busGroup.setVelocityXEach(0);
    greencarGroup.setVelocityYEach(0);
    greencarGroup.setVelocityXEach(0);
    bike.velocityY=0;
    bike.velocityX=0;
    
     busGroup.setLifetimeEach(0);
    truckGroup.setLifetimeEach(0);
    greencarGroup.setLifetimeEach(0);
    purplecarGroup.setLifetimeEach(0);
    holeGroup.setLifetimeEach(0);
     reset.visible= true;
    
        
  //fill("white"); 
   // background("red");
   // background.depth=background.depth+1;
   
    
     if(mousePressedOver(reset)){
        score = 0;
      gameState = "PLAY";
       bike.x=300;
       bike.y=500;
       road.velocityY=15;
       if(road.y>400){
   road.y=road.height/3;  
   }
      reset.visible=false; 
        }
   }

  
  
  
  drawSprites();
  
   
  if(gameState=="END"){
     textSize(30); 
    fill("red"); 
    text(" GAME OVER", 200, 300);
    }
   fill("white");
  textSize(20);
  text("SCORE : " + score, 500, 30);
  fill("red");
  text("Don't touch germs",5,50);
  text("Touch the masks to increase your score & life",5,70);
  text("Comment me in the comments, that what is your score",5,30);
 
}

function obstacle(){
 
    var select_obstacle = Math.round(random(1,5));
  console.log(select_obstacle);
    if (World.frameCount % 60 == 0) {
    if (select_obstacle == 1) {
      hole = createSprite( Math.round(random(100,300),200), 1, 1);
      hole.addImage(holeImage);
      hole.velocityY =road.velocityY;
      //(5+(score/100));
      hole.liftime = 150;
      hole.scale =0.25;
      holeGroup.add(hole);

    } else if (select_obstacle == 2) {
      bus = createSprite( Math.round(random(400, 500),250), 1, 1);
      bus.addImage(busImage);
      bus.velocityY =10+(score/1000);
      bus.velocityX =-1-(score/1000);
      bus.liftime = 150;
      //bus.debug = true;
      bus.scale = 0.2;
      busGroup.add(bus);
    } else if (select_obstacle == 3) {
      truck = createSprite( Math.round(random(300, 500), 0), 1, 1);
      truck.addImage(truckImage);
      truck.velocityY =10+(score/100);
      truck.velocityX=-1-(score/100);
      truck.liftime = 150;
      truck.scale = 0.2;
      //truck.debug = true;
      truck.setCollider("circle",0,0,0);
      truckGroup.add(truck);
    }else if (select_obstacle == 4) {
      greencar = createSprite( Math.round(random(100, 300), 0), 1, 1);
      greencar.addImage(greencarImage);
      greencar.velocityY =17+(score/1000);
      greencar.velocityX=2+(score/1000);;
      greencar.liftime = 150;
      greencar.scale = 0.25;
      greencarGroup.add(greencar);
            
    } else if (select_obstacle == 5) {
      purplecar = createSprite( Math.round(random(100, 300), 0), 1, 1);
      purplecar.addImage(purplecarImage);
      purplecar.velocityY =16+(score/1000);
      purplecar.velocityX=2+(score/1000);
      purplecar.liftime = 150;
      purplecar.scale = 0.2;
//      purplecar.debug = true;
      purplecarGroup.add(purplecar);
            
    }
   
 }
  
}  











