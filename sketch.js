var bgImg, edges;
var fighterjet;
var redRock, blackRock, greyRock, greenRock;
var rockGroup, bulletGroup;

function preload() {
bgImg = loadImage("Images/SPACE BG 1.jpg")
fighterimg = loadImage("Images/JET IMAGE 2.png")
redRockImage = loadImage("Images/RED ROCK IMAGE.png")
blackRockImage = loadImage("Images/BLACK ROCK IMAGE.png")
greyRockImage = loadImage("Images/GREY ROCK IMAGE.png")
greenRockImage = loadImage("Images/GREEN ROCK IMAGE.png")
starImage = loadImage("Images/star.png")
bulletImage = loadImage("Images/BULLET IMAGE.png")
}
  
rockGroup = createGroup();
bulletGroup = createGroup();


function setup() {
  createCanvas(windowWidth,windowHeight);
  edges= createEdgeSprites()
fighterjet = createSprite(width/4-100,height/2,50,50);
fighterjet.setCollider("rectangle",0,0,320,200)
//fighterjet.debug = true;
fighterjet.addImage("fighter",fighterimg);
fighterjet.scale = 0.5;
}

function drawRock() {
  if (frameCount % 80 === 0) 
  {

  var rock = createSprite(width,random(50,height-50,50,50))
 
    var rand=Math.round(random(1,4));
    switch(rand)
    {
      case 1: rock.addImage(redRockImage);
              rock.scale = 0.1;
              break;
      case 2: rock.addImage(blackRockImage);
              rock.scale = 0.3;
              break;
      case 3: rock.addImage(greyRockImage);
              rock.scale = 0.3;
              break;
      case 4: rock.addImage(greenRockImage);
              rock.scale = 0.2;
              break;
              
    }
    rock.scale = 0.1;
    rock.velocityX = -8;
    rock.lifetime = 500;

    rockGroup.add(rock);
  
}


}
 function drawStar() {
   if(frameCount % 160 === 0){

   
   var star = createSprite(width,random(40,height-100,50,50))
   star.addImage(starImage);
   star.scale = 0.05;
   star.velocityX = -10;
   star.lifetime = 500;
 }}

function drawBullet() {
  
  bullet = createSprite(fighterjet.x+75,fighterjet.y+7,20,20)
  bullet.addImage(bulletImage);
  bullet.scale = 0.15;
  bullet.velocityX = 3;
  bullet.lifetime = 500;

  bulletGroup.add(bullet);
    
}

// function drawgreenRock() {
//   greenRock = createSprite()
//   greenRock.addImage(greenRockImage);
//   greenRock.scale = 0.2;
//   greenRock.velocityX = -10;
//   greenRock.lifetime = 500;
// }

function draw() {
  background(bgImg);  
  if(keyDown("up")){
    fighterjet.y=fighterjet.y-5
  }
  if(keyDown("down")){
    fighterjet.y=fighterjet.y+5
  }
  fighterjet.bounceOff(edges[2]);
  fighterjet.bounceOff(edges[3]);

  drawRock();
  // if (frameCount % 60 === 0) {
  //   drawblackRock();
  // }
  
  // if (frameCount % 80 === 0) {
  //   drawgreyRock();
  // }

  // if (frameCount % 100 === 0) {
  //   drawgreenRock();
  // }
 
  if(keyDown("space"))
  {
    drawBullet();
  }

  if (bulletGroup.isTouching(rock)){
    
  }
  drawStar();
  drawSprites();
}