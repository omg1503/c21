var fixedRect,movingRect;
var a1,b1,c1,d1;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,80);
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

a1 = createSprite(100,100,50,50);
b1= createSprite(200,100,50,50);
c1 = createSprite(300,100,50,50);
d1= createSprite(400,100,50,50);

a1.shapeColor = "green";
b1.shapeColor = "green";
c1.shapeColor = "green";
d1.shapeColor = "green";




}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
if(isTouching(movingRect,a1)){
  movingRect.shapeColor="blue";
  a1.shapeColor="blue";
}
else{
  movingRect.shapeColor="green";
  a1.shapeColor="green";
}
drawSprites();
}

function isTouching(a,b){

  if(a.x - b.x < a.width/2 + b.width/2
    && b.x - a.x < a.width/2 + b.width/2
    && a.y - b.y < a.height/2 + b.height/2
     && b.y - a.y < a.height/2 + b.height/2 ){

return true;
}

else{
 return false;
}
}