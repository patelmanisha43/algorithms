var fixedRect;
var movingRect;
var edges;

function setup()
 {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(100, 200, 80, 50);
  fixedRect.shapeColor="cyan";
  movingRect.shapeColor="green";
  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;
  
  
}

function draw()
 {
  background(0);  

  edges= createEdgeSprites();
  
  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);
 // movingRect.x = World.mouseX;
 // movingRect.y= World.mouseY;

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 )
{
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
  
}


if( movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
{

  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);

}


  drawSprites();
}