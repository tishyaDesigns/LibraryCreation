var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect2 = createSprite(800, 400, 50, 80);
  rect2.shapeColor = "green";

  rect3 = createSprite(200, 400, 50, 80);
  rect3.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  rect3.x = World.mouseX;
  rect3.y = World.mouseY;

  if(isTouching(rect2,rect3)){
    rect3.shapeColor = "red";
    rect2.shapeColor = "red";
  }else{
    rect3.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  bounceOff(fixedRect,movingRect);
  
  drawSprites();
}

